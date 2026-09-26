const repo='qiantao18817568425-art/Architecture_Learning-';
const github=`https://github.com/${repo}`;
const site='https://qiantao18817568425-art.github.io/Architecture_Learning-/';
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const decode=s=>s.replaceAll('&amp;','&').replaceAll('&lt;','<').replaceAll('&gt;','>').replaceAll('&quot;','"').replaceAll('&#39;',"'");

export function courseUnits(archive,progress){
  return [...archive.matchAll(/<details class="lesson"([^>]*)>[\s\S]*?<span class="lesson-title">([\s\S]*?)<\/span>/g)].map(([,attrs,title])=>{
    const id=attrs.match(/\bid="([^"]+)"/)?.[1];
    if(!/^(day-\d+|week-[a-z0-9-]+)$/.test(id))throw new Error(`Invalid course id: ${id}`);
    const meta=progress.lessons.find(x=>x.id===id);
    return {id,title:decode(title.replace(/<[^>]*>/g,'')),url:`${site}#${id}`,status:meta?.status||'assigned'};
  });
}

export function submissionLinks(unit){
  const title=`[答卷][${unit.id}] ${unit.title}`;
  const submit=new URL(`${github}/issues/new`);
  submit.searchParams.set('template','answer.yml');
  submit.searchParams.set('title',title);
  submit.searchParams.set('lesson',unit.id);
  submit.searchParams.set('course',unit.url);
  const view=new URL(`${github}/issues`);
  view.searchParams.set('q',`is:issue in:title "[答卷][${unit.id}]"`);
  return {submit:submit.href,view:view.href,dashboard:`${site}answers/index.html#${unit.id}`};
}

export function submissionPanel(unit){
  const links=submissionLinks(unit);
  return `<section class="answer-panel" data-course="${esc(unit.id)}" aria-label="${esc(unit.title)} 答卷提交"><h3>提交本课答卷</h3><p>在 GitHub 登录后填写文字，或把图片、PDF、Word 等文件拖入“答卷正文与附件”框；点击 Submit new issue（提交）才算上传成功。答卷和附件将保存在公开的 GitHub 仓库，请只提交可公开的学习材料。</p><p><a class="answer-submit" href="${esc(links.submit)}" target="_blank" rel="noopener">上传／提交答卷 ↗</a> <a class="answer-view" href="${esc(links.view)}" target="_blank" rel="noopener">查看答卷与批改 ↗</a> <a href="${esc(links.dashboard)}">归档与批改状态</a></p><p>课程编号：<code>${esc(unit.id)}</code>。补交请在同一答卷下评论，以 <strong>[补交]</strong> 开头，并注明题号；也可编辑原答卷。每天 20:00 先检查并批改新答卷，再安排当天任务。${unit.status==='scheduled'?'本课目前为预备材料，提交不会自动改变正式排期。':''}</p></section>`;
}

export function addSubmissionPanels(archive,units){
  const byId=new Map(units.map(x=>[x.id,x]));
  return archive.replace(/(<details class="lesson"([^>]*)>[\s\S]*?<article>[\s\S]*?<\/article>)/g,(full,_body,attrs)=>{
    const id=attrs.match(/\bid="([^"]+)"/)[1];
    return full+submissionPanel(byId.get(id));
  });
}

export const answerStyles=`<style>.answer-panel{margin:22px 0;padding:18px;border:1px solid #9ab8d8;border-left:5px solid #1763a3;border-radius:8px;background:#f2f7fc}.answer-panel h3{margin-top:0}.answer-submit,.answer-view{display:inline-block;padding:10px 14px;margin:4px 8px 4px 0;border-radius:6px;background:#12578f;color:#fff;text-decoration:none}.answer-view{background:#e0ecf6;color:#153e61}.answer-panel a:focus-visible{outline:3px solid #db5a2a;outline-offset:3px}.answer-panel code{overflow-wrap:anywhere}.answer-list{padding:0;list-style:none}.answer-list li{margin:12px 0;padding:16px;background:#fff;border:1px solid #d8dee8;border-radius:6px}body{font-family:system-ui,'Microsoft YaHei',sans-serif;line-height:1.75;color:#18212f;background:#f6f8fb}main{max-width:1180px;margin:auto;padding:24px}a{overflow-wrap:anywhere}</style>`;

export function answerDashboard(units,index){
  const statuses={awaiting_review:'待批改',reviewed:'已批改',needs_revision:'需补答',passed:'通过',not_passed:'未通过',attachment_unreadable:'附件待补充',review_incomplete:'批改未完成'};
  const rows=units.map(unit=>{
    const links=submissionLinks(unit);
    const submissions=index.submissions.filter(s=>s.unitId===unit.id);
    const records=submissions.map(s=>{
      const base=`${github}/blob/main/submissions/${unit.id}/issue-${s.issueNumber}/${s.revision}`;
      const status=s.reviewedRevision===s.revision?(statuses[s.status]||'已归档'):s.status==='attachment_unreadable'?'附件待补充':'新版本待批改';
      return `<p><a href="${github}/issues/${Number(s.issueNumber)}">答卷 #${Number(s.issueNumber)}</a> · ${esc(status)} · <a href="${base}/answer.md">答卷快照</a>${s.reviewedRevision===s.revision?` · <a href="${base}/review.md">批改记录</a>`:''}</p>`;
    }).join('');
    return `<li id="${esc(unit.id)}"><strong><a href="${esc(unit.url)}">${esc(unit.title)}</a></strong>${records||'<p>尚无已归档答卷；刚提交的内容请直接查看 GitHub 答卷。</p>'}<a href="${esc(links.submit)}">上传／提交答卷</a> · <a href="${esc(links.view)}">查看最新答卷与批改</a></li>`;
  }).join('');
  const scan=index.lastScan?`最近扫描（UTC）：${esc(index.lastScan)}；${(index.blocked||[]).length} 份答卷需要修正课程编号或正文。`:'尚未完成首次答卷扫描。';
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>答卷提交与批改记录</title>${answerStyles}</head><body><main><a href="../index.html">返回课程档案</a><h1>答卷提交与批改记录</h1><p>每篇 Day / Week 均有独立提交入口。通过 GitHub 登录提交文字或附件；提交成功后立即保存在 GitHub。补交在原答卷下以 [补交] 开头评论。每天 20:00 先扫描并批改，再按星期安排学习内容。</p><p>答卷、附件与批改记录公开可见。附件原件由 GitHub 附件服务保存，仓库快照保留原始链接；可读取时批改，不把打不开的附件当成空白答卷。需要帮助时参阅 <a href="${github}/blob/main/ANSWER_WORKFLOW.md">答卷使用说明</a>。</p><p>${scan} 页面状态随每日同步更新，刚提交的答卷请使用“查看最新答卷与批改”。</p><ul class="answer-list">${rows}</ul></main></body></html>`;
}
