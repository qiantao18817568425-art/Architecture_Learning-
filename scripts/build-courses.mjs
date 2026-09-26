import {readFileSync, writeFileSync, mkdirSync, existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {Marked} from 'marked';
import {scheduleForDate} from './learning-calendar.mjs';
import {courseUnits,addSubmissionPanels,submissionPanel,answerStyles,answerDashboard} from './answer-ui.mjs';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const esc = text => String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
export const articles = html => html.replace(/\r/g, '').match(/<article>[\s\S]*?<\/article>/g) || [];

export function buildCourses() {
  const progress = JSON.parse(readFileSync(resolve(root, 'content/learning-progress.json'), 'utf8'));
  let archive = readFileSync(resolve(root, 'content/course-archive.html'), 'utf8').replace(/\r/g, '');
  const legacyArticles = articles(archive);
  if (legacyArticles.length !== progress.legacyArchive.articleCount) throw new Error('Legacy archive count differs from progress record');
  const parser = new Marked({gfm: true});
  parser.use({renderer: {
    code(token) {
      return token.lang === 'mermaid'
        ? `<pre class="mermaid">${esc(token.text)}</pre>\n`
        : `<pre><code>${esc(token.text)}</code></pre>\n`;
    }
  }});
  const seen = new Set([...archive.matchAll(/<span class="lesson-title">Day (\d+)/g)].map(m => 'day-' + m[1]));
  const rendered = progress.lessons.map(lesson => {
    const schedule = scheduleForDate(lesson.scheduledFor || lesson.date);
    if (lesson.kind === 'day' && !schedule.allowsNewDay) throw new Error(`New Day lesson scheduled on a review day: ${lesson.id}`);
    if (lesson.kind === 'review' && schedule.allowsNewDay) throw new Error(`Weekly review scheduled on a new-lesson day: ${lesson.id}`);
    if (!/^(day-\d+|week-[a-z0-9-]+)$/.test(lesson.id) || seen.has(lesson.id)) throw new Error(`Duplicate or invalid lesson: ${lesson.id}`);
    seen.add(lesson.id);
    if (!/^content\/lessons\/[a-z0-9-]+\.md$/.test(lesson.source)) throw new Error('Invalid lesson source');
    const markdown = readFileSync(resolve(root, lesson.source), 'utf8');
    const body = parser.parse(markdown);
    const state = lesson.status === 'scheduled' ? `预备材料 · 计划 ${lesson.scheduledFor}` : '待作答';
    return {lesson, body, block: `<details class="lesson" id="${lesson.id}" data-date="${esc(lesson.date)}"><summary><span class="lesson-title">${esc(lesson.title)}</span><span class="lesson-meta">全文 · ${esc(state)}</span></summary><div class="lesson-body"><p class="archive-note">${esc(lesson.date)} · <a href="lessons/${lesson.id}.html">独立阅读本课</a> · 材料发布不代表已经掌握。</p><article>${body}</article></div></details>`};
  });
  const marker = /\s*<\/section>\s*<footer>/;
  if (!marker.test(archive)) throw new Error('Archive closing section missing');
  archive = archive.replace(marker, '\n' + rendered.map(x => x.block).join('\n') + '\n</section>\n<footer>');
  let week = 0;
  archive = archive.replace(/<details class="lesson"([^>]*)>([\s\S]*?)<\/summary>/g, (full, attrs, summary) => {
    const day = summary.match(/lesson-title">Day (\d+)/);
    const id = day ? `day-${day[1]}` : (attrs.match(/\bid="([^"]+)"/)?.[1] || `week-entry-${++week}`);
    return `<details class="lesson"${attrs.replace(/\s+id="[^"]*"/g, '')} id="${id}">${summary}</summary>`;
  });
  const count = articles(archive).length;
  const maxDay = Math.max(...[...archive.matchAll(/lesson-title">Day (\d+)/g)].map(m => Number(m[1])));
  if (count !== legacyArticles.length + rendered.length || maxDay !== progress.lastPublishedDay) throw new Error('Course count or latest day mismatch');
  archive = archive.replace(/<strong>\d+<\/strong>(\s*个 Day \/ Week 档案)/, `<strong>${count}</strong>$1`)
    .replace(/<strong>\d+<\/strong>(\s*篇可阅读全文)/, `<strong>${count}</strong>$1`)
    .replace(/(当前已同步至|课程档案已同步至) Day \d+/g, `$1 Day ${maxDay}`)
    .replace('后续新增 Day 或 Week 时，重新生成并提交 <code>docs/index.html</code> 即可同步公开档案。', '后续课程同时维护源文件、学习台账与生成页面，保留既有正文和学习记录。');
  const latest = (progress.currentUnitId ? rendered.find(x => x.lesson.id === progress.currentUnitId) : rendered.at(-1))?.lesson;
  if (progress.currentUnitId && !latest) throw new Error('Current learning unit missing');
  if (latest) archive = archive.replace('<section class="guide">', `<section class="guide"><h2>当前学习任务</h2><p><a href="lessons/${latest.id}.html">${esc(latest.title)}</a> · ${esc(latest.scheduledFor || latest.date)} · 下一任务：${esc(progress.nextUnit.title)}</p><p>每日北京时间 20:00 准备任务；周一至周四新课，周五总结，周六巩固，周日综合复盘。已正式安排至 Day ${progress.lastAssignedDay ?? maxDay}；预备材料、作答评审与发布进度分开记录。</p></section>\n<section class="guide">`);
  const reveal = `<script id="course-navigation">function revealCourse(){const e=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(e&&e.matches('details.lesson')){e.open=true;e.scrollIntoView({block:'start'});}}addEventListener('hashchange',revealCourse);revealCourse();</script>`;
  archive = archive.replace(/<script id="course-navigation">[\s\S]*?<\/script>/g, '').replace('</body>', reveal + '\n</body>');
  if (!legacyArticles.every((article, i) => articles(archive)[i] === article)) throw new Error('Existing course text was changed');
  const units=courseUnits(archive,progress);
  const submissions=JSON.parse(readFileSync(resolve(root,'content/submissions.json'),'utf8'));
  archive=addSubmissionPanels(archive,units).replace('</head>',answerStyles+'</head>');
  mkdirSync(resolve(root,'docs/answers'),{recursive:true});
  writeFileSync(resolve(root,'content/course-units.json'),JSON.stringify(units,null,2)+'\n');
  writeFileSync(resolve(root,'docs/answers/index.html'),answerDashboard(units,submissions));
  mkdirSync(resolve(root, 'docs/lessons'), {recursive: true});
  writeFileSync(resolve(root, 'docs/index.html'), archive);
  const styles = archive.match(/<style>[\s\S]*?<\/style>/)?.[0] || '';
  for (const {lesson, body} of rendered) {
    writeFileSync(resolve(root, `docs/lessons/${lesson.id}.html`), `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(lesson.title)}</title>${styles}${answerStyles}</head><body><main><nav><a href="../index.html#${lesson.id}">课程档案</a> · <a href="../architecture/index.html">项目架构实践</a></nav><article>${body}</article>${submissionPanel(units.find(x=>x.id===lesson.id))}</main><script src="../architecture/vendor/mermaid-10.9.5.min.js"></script><script>mermaid.initialize({startOnLoad:true,theme:'neutral',securityLevel:'strict'});</script></body></html>`);
  }
  const buildInfo = resolve(root, 'docs/architecture/build-info.json');
  if (existsSync(buildInfo)) {
    const info = JSON.parse(readFileSync(buildInfo, 'utf8'));
    writeFileSync(buildInfo, JSON.stringify({...info, courses: count, courseArchiveUpdatedOn: progress.updatedOn}, null, 2));
  }
  const homePath = resolve(root, 'docs/architecture/index.html');
  if (existsSync(homePath)) writeFileSync(homePath, readFileSync(homePath, 'utf8').replace(/<b>\d+<\/b>关联课程与复盘/, `<b>${count}</b>关联课程与复盘`));
  return {count, maxDay, updatedOn: progress.updatedOn};
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) console.log(buildCourses());
