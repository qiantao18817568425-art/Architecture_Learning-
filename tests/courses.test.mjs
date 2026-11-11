import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {buildCourses, articles} from '../scripts/build-courses.mjs';
const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('preserves every legacy article including Day35/36 and appends each new lesson once', () => {
  const progress = JSON.parse(read('content/learning-progress.json'));
  const legacy = articles(read('content/course-archive.html'));
  const current = articles(read('docs/index.html'));
  assert.equal(legacy.length, 52);
  assert.deepEqual(current.slice(0, legacy.length), legacy);
  assert.equal(current.length, legacy.length + progress.lessons.length);
  assert.ok(legacy.at(-2).includes('Day 35'));
  assert.ok(legacy.at(-1).includes('Day 36'));
  const html = read('docs/index.html');
  for (let n = 1; n <= progress.lastPublishedDay; n++) assert.equal((html.match(new RegExp(`id="day-${n}"`, 'g')) || []).length, 1);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length, 'page ids must be unique');
});

test('independent lesson includes diagrams, sources, exercises and honest assessment state', () => {
  const html = read('docs/lessons/day-37.html');
  assert.equal(articles(html).length, 1);
  assert.equal((html.match(/class="mermaid"/g) || []).length, 2);
  for (const text of ['ANC', 'AEC', 'RX', 'TX', 'epoch', '六道综合题', '待作答', '20:00—21:00', 'source.android.com', 'bluetooth.com', 'ti.com']) assert.ok(html.includes(text), text);
  assert.equal(JSON.parse(read('content/learning-progress.json')).masteryEvidence.length, 0);
  for (const href of [...html.matchAll(/href="([^"]+)"/g)].map(m => m[1])) assert.ok(/^https:\/\//.test(href) || ['../index.html#day-37', '../architecture/index.html'].includes(href), href);
});

test('every lesson closes Mermaid fences and renders each latest diagram as its own block', () => {
  const progress = JSON.parse(read('content/learning-progress.json'));
  for (const lesson of progress.lessons) {
    const markdown = read(lesson.source);
    assert.equal((markdown.match(/^~~~mermaid\s*$/gm) || []).length, (markdown.match(/^~~~\s*$/gm) || []).length, `${lesson.id} Mermaid fences`);
  }
  const latest = read(`docs/lessons/day-${progress.lastPublishedDay}.html`);
  assert.ok((latest.match(/class="mermaid"/g) || []).length >= 2);
  assert.doesNotMatch(latest, /~~~mermaid|~~\+/);
});

test('repeat builds are deterministic and keep latest courses and counts', () => {
  const paths = ['docs/index.html', 'docs/lessons/day-37.html'];
  const before = paths.map(read);
  const stats = buildCourses();
  assert.deepEqual(paths.map(read), before);
  const progress = JSON.parse(read('content/learning-progress.json'));
  assert.equal(stats.maxDay, progress.lastPublishedDay);
  assert.equal(stats.count, progress.legacyArchive.articleCount + progress.lessons.length);
});

test('Week16 Friday review stays independent and exposes answer workflows',()=>{
  const markdown=read('content/lessons/week-16-friday.md');
  for(const text of ['Day 49—52','不推进 Day 53','不附参考答案','个人反思由你本人填写','week-16-friday','答卷中心']) assert.ok(markdown.includes(text),text);
  assert.doesNotMatch(markdown,/^#{1,6}\s*(参考答案|示范作答|预设根因)\s*[:：]?/m);
  const html=read('docs/lessons/week-16-friday.html');
  assert.ok(html.includes('上传／提交答卷'));
  assert.ok(html.includes('查看答卷与批改'));
  assert.ok(html.includes('Day 49—52'));
});

test('Week16 Saturday consolidation stays independent and exposes answer workflows',()=>{
  const markdown=read('content/lessons/week-16-saturday.md');
  for(const text of ['Day 49—52','不推进 Day 53','独立作答','证据链','个人反思由你本人填写','week-16-saturday','答卷中心']) assert.ok(markdown.includes(text),text);
  assert.doesNotMatch(markdown,/^#{1,6}\s*(参考答案|示范作答|预设根因)\s*[:：]?/m);
  const html=read('docs/lessons/week-16-saturday.html');
  assert.ok(html.includes('上传／提交答卷'));
  assert.ok(html.includes('查看答卷与批改'));
  assert.ok(html.includes('Day 49—52'));
});

test('Week16 Sunday integration stays independent and exposes answer workflows',()=>{
  const markdown=read('content/lessons/week-16-sunday.md');
  for(const text of ['Day 49—52','不推进 Day 53','跨层取证','恢复设计','测试闭环','方案整合','个人反思由你本人填写','week-16-sunday','答卷中心']) assert.ok(markdown.includes(text),text);
  assert.doesNotMatch(markdown,/^#{1,6}\s*(参考答案|示范作答|预设根因)\s*[:：]?/m);
  const html=read('docs/lessons/week-16-sunday.html');
  assert.ok(html.includes('上传／提交答卷'));
  assert.ok(html.includes('查看答卷与批改'));
  assert.ok(html.includes('Day 49—52'));
});

test('Day53 trade study is independent, evidence bounded and exposes answer workflows',()=>{
  const markdown=read('content/lessons/day-53.md');
  for(const text of ['A/B 方案权衡','硬门槛','敏感性分析','风险三元组','决策记录','ACK','业务完成','旧消息','待项目确认','day-53','答卷中心']) assert.ok(markdown.includes(text),text);
  assert.equal((markdown.match(/^~~~mermaid\s*$/gm)||[]).length,2);
  const html=read('docs/lessons/day-53.html');
  assert.ok(html.includes('上传／提交答卷'));
  assert.ok(html.includes('查看答卷与批改'));
  assert.ok(html.includes('NASA'));
});

for(const [id,texts,minDiagrams] of [
  ['day-54',['可观测性与验证设计','OpenTelemetry','business accepted','待项目确认','答卷中心'],3],
  ['day-55',['评审基线','场景走查','证据准入','待项目确认','答卷中心'],2],
  ['day-56',['变更影响','发布门禁','rollback','风险','答卷中心'],3]
  ,['day-57',['跨域架构评审实战','完成阶梯','ACK','业务完成','旧代','待项目确认','答卷中心'],2]
  ,['day-58',['智能座舱域控制器入门架构方案','六流','系统边界','ACK','业务完成','待项目确认','答卷中心'],2]
  ,['day-59',['STR 后黑屏根因分析','最早断点','ACK','业务完成','旧代','待项目确认','答卷中心'],2]
]) test(`${id} is independently publishable and evidence bounded`,()=>{
  const markdown=read(`content/lessons/${id}.md`);
  for(const text of texts) assert.ok(markdown.includes(text),`${id} contains ${text}`);
  assert.ok((markdown.match(/^~~~mermaid\s*$/gm)||[]).length>=minDiagrams,`${id} diagrams`);
  const html=read(`docs/lessons/${id}.html`);
  assert.ok(html.includes('上传／提交答卷'));
  assert.ok(html.includes('查看答卷与批改'));
});

test('Week17 Friday review covers only Day53 through Day56 and does not advance Day57',()=>{
  const markdown=read('content/lessons/week-17-friday.md');
  for(const text of ['Day 53—56','不推进 Day 57','不附参考答案','个人反思由你本人填写','week-17-friday','答卷中心']) assert.ok(markdown.includes(text),text);
  assert.doesNotMatch(markdown,/^#{1,6}\s*(参考答案|示范作答|预设根因)\s*[:：]?/m);
  const html=read('docs/lessons/week-17-friday.html');
  assert.ok(html.includes('上传／提交答卷'));
  assert.ok(html.includes('查看答卷与批改'));
});

test('Week17 Saturday provides independent evidence and architecture practice',()=>{
  const markdown=read('content/lessons/week-17-saturday.md');
  for(const text of ['Day 53—56','不推进 Day 57','不附参考答案','个人反思由你本人填写','竞争假设','六流图','待执行','week-17-saturday','答卷中心']) assert.ok(markdown.includes(text),text);
  assert.doesNotMatch(markdown,/^#{1,6}\s*(参考答案|示范作答|预设根因)\s*[:：]?/m);
  const html=read('docs/lessons/week-17-saturday.html');
  assert.ok(html.includes('上传／提交答卷'));
  assert.ok(html.includes('查看答卷与批改'));
  assert.equal((html.match(/class="mermaid"/g)||[]).length,2);
});

test('Week17 Sunday integrates evidence recovery and verification without publishing the next Day',()=>{
  const markdown=read('content/lessons/week-17-sunday.md');
  for(const text of ['Day 53—56','不推进 Day 57','跨层取证','恢复设计','测试','证据账本','竞争假设','个人反思','week-17-sunday','答卷中心']) assert.ok(markdown.includes(text),text);
  assert.doesNotMatch(markdown,/^#{1,6}\s*(参考答案|示范作答|预设根因)\s*[:：]?/m);
  assert.ok((markdown.match(/^~~~mermaid\s*$/gm)||[]).length>=1);
  const html=read('docs/lessons/week-17-sunday.html');
  assert.ok(html.includes('上传／提交答卷'));
  assert.ok(html.includes('查看答卷与批改'));
  assert.ok(html.includes('Day 53—56'));
});
