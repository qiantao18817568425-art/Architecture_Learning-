import {readFileSync,writeFileSync,mkdirSync,copyFileSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {Marked} from 'marked';
import {guides,stages,topics} from '../content/beginner-guides.mjs';
const root=resolve(import.meta.dirname,'..'),out=resolve(root,'docs/architecture');mkdirSync(out,{recursive:true});
const data=JSON.parse(readFileSync(resolve(root,'content/architecture.json'),'utf8'));
const all=[...data.chapters,...data.originals];
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const file=c=>(c.edition==='original'?'original-':'')+c.id+'.html';
const title=id=>data.chapters.find(x=>x.id===id)?.title||id;
const order=stages.flatMap(x=>x.ids);
function slug(s){return s.toLowerCase().replace(/<[^>]+>/g,'').replace(/[^\p{L}\p{N}\p{M}_ -]/gu,'').replaceAll(' ','-');}
const search=[];
function render(c){
 const headings=[],counts=new Map();
 const md=new Marked({gfm:true});
 function dest(href){
  if(/^https?:\/\//.test(href))return href;
  if(href.startsWith('#'))return href;
  const [p,hash]=decodeURI(href).split('#');
  if(p==='README.md'||/项目阅读说明|架构解释更新说明/.test(p))return 'index.html';
  const name=p.split('/').pop();const match=data.chapters.find(x=>x.filename===name);
  if(match){const orig= p.includes('架构资料')||(c.edition==='original'&&!p.includes('架构知识')&&+match.id<17);return (orig?'original-':'')+match.id+'.html'+(hash?'#'+hash:'');}
  return null;
 }
 md.use({renderer:{
  heading(token){const idBase=slug(token.text),n=counts.get(idBase)||0;counts.set(idBase,n+1);const id=idBase+(n?'-'+n:'');headings.push({id,text:token.text.replace(/[`*_]/g,''),depth:token.depth});return `<h${token.depth} id="${esc(id)}">${this.parser.parseInline(token.tokens)}</h${token.depth}>\n`;},
  link(token){const url=dest(token.href),label=this.parser.parseInline(token.tokens);return url?`<a href="${esc(url)}">${label}</a>`:`<span class="local-source" title="原文件保存在本地项目资料库，按名称与页码查阅">${label}<small>〔本地来源〕</small></span>`;},
  image(token){return `<figure><a href="${esc(token.href)}" target="_blank" rel="noopener"><img loading="lazy" src="${esc(token.href)}" alt="${esc(token.text)}"></a><figcaption>${esc(token.text)} · 点击查看原图</figcaption></figure>`;},
  code(token){return token.lang==='mermaid'?`<details class="diagram"><summary>展开架构图（原图代码保留）</summary><pre class="mermaid">${esc(token.text)}</pre><details><summary>查看原始图代码</summary><pre><code>${esc(token.text)}</code></pre></details></details>`:`<pre><code>${esc(token.text)}</code></pre>`;},
  html(token){return /^\s*(?:<a\s+(?:id|name)=["'][^"']+["']\s*>(?:\s*<\/a>)?|<\/a>|<br\s*\/?>)\s*$/.test(token.text)?token.text:'';}
 }});
 const html=md.parse(c.markdown);
 // Heading-based search excerpts: include full section text, without source paths or code fences.
 const sections=c.markdown.split(/(?=^#{1,6}\s)/m);let h=0;
 for(const section of sections){
  const heading=section.match(/^#{1,6}\s+(.+)/);const target=heading?headings[h++]:null;
  const text=section.replace(/^```[^\n]*$/gm,' ').replace(/<!--.*?-->/gs,' ').replace(/\[([^\]]+)\]\([^)]*\)/g,'$1').replace(/[#*`|]/g,' ').replace(/\s+/g,' ').trim();
  if(text.length>25)search.push({title:c.title+' · '+(target?.text||'导读'),edition:c.edition,url:file(c)+(target?'#'+target.id:''),text});
 }
 search.push({title:c.title+' · 新手导读',edition:c.edition,url:file(c)+'#beginner-guide',text:Object.values(guides[c.id]).join(' ')});
 return {html,headings};
}
function chapterLinks(ids){return ids.map(id=>`<a href="${id}.html"><span>${id}</span> ${esc(title(id))}</a>`).join('');}
function tree(current){return `<details class="nav-tree" open><summary>树状目录 · 全部内容</summary><a class="home-link" href="index.html">学习首页</a>${stages.map(s=>`<details ${s.ids.includes(current)?'open':''}><summary>${s.name}</summary>${s.ids.map(id=>`<a ${id===current?'aria-current="page"':''} href="${id}.html">${id} ${esc(title(id))}</a>`).join('')}</details>`).join('')}<details><summary>原版解释 · 17 章</summary>${data.originals.map(c=>`<a href="${file(c)}">${c.id} ${esc(c.title)}</a>`).join('')}</details><a href="../index.html">Day / Week 学习档案 ↗</a></details>`;}
function shell({name,body,current='',toc=''}){return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="真实项目架构学习：完整章节、树状目录、新手导读、MT8676/MT8668 对比和实践方法。"><title>${esc(name)} · 座舱架构实践</title><link rel="stylesheet" href="library.css"></head><body><a class="skip" href="#main">跳到正文</a><header class="topbar"><a href="index.html" class="brand">座舱架构<span>项目实践知识库</span></a><nav><a href="index.html#learning-path">学习路线</a><a href="17.html">平台对比</a><a href="../index.html">课程档案 ↗</a></nav></header><div class="layout"><aside class="sidebar"><label for="search">全文搜索</label><input id="search" type="search" placeholder="Camera、MBOS、无声…" autocomplete="off"><div id="search-state" role="status"></div><div id="search-results"></div>${tree(current)}</aside><main id="main">${body}</main><aside class="toc"><details open><summary>本章目录</summary>${toc||'<a href="index.html#learning-path">学习路线</a><a href="index.html#method">如何学习真实项目</a><a href="index.html#practice">项目练习</a><a href="index.html#topics">主题索引</a>'}</details></aside></div><footer>资料更新 2026-09-20 · 平台事实、项目证据与教学练习分别记录。阅读标记只保存在本浏览器，不代表已掌握或实机通过。</footer><script src="library.js" defer></script></body></html>`;}
function guide(c){const g=guides[c.id];return `<section class="beginner" id="beginner-guide"><p class="eyebrow">新手导读 / ${c.edition==='original'?'原版解释对照':'逐步学习'}</p><h2>${g.question}</h2><p>${g.concept}</p><ol><li><strong>怎么读：</strong>${g.steps}</li><li><strong>项目练习：</strong>${g.exercise}</li><li><strong>自检：</strong>${g.check}</li></ol><p class="note">练习用于理解已有架构；示意推演不冒充当前项目实测。阅读全文时核对来源版本与可信度标记。</p></section>`;}
for(const c of all){
 const {html,headings}=render(c),i=order.indexOf(c.id);const original=c.edition==='original';
 const comparison=+c.id<17?`<a class="button secondary" href="compare.html?chapter=${c.id}">并排对比两套正文 ↗</a><a class="button secondary" href="${original?'':'original-'}${c.id}.html">对照${original?'中文版':'原版解释'} ↗</a>`:'';
 const toc='<a href="#beginner-guide">新手导读</a>'+headings.filter(x=>x.depth<=3).map(x=>`<a class="depth-${x.depth}" href="#${esc(x.id)}">${esc(x.text)}</a>`).join('');
 const related=data.days.filter(d=>d.chapters.split('、').includes(c.id)).map(d=>`<a href="../index.html#day-${d.day}">Day ${d.day}</a>`).join(' ');
 const body=`<div class="breadcrumb"><a href="index.html">知识库</a> / ${original?'原版解释':'中文版'} / ${c.id}</div><div class="chapter-title"><p class="eyebrow">CHAPTER ${c.id} · ${original?'原版解释全文':'中文版全文'}</p><h1>${esc(c.title)}</h1><div class="actions">${comparison}<button class="button" data-read="${original?'original-':''}${c.id}" type="button">标记已读</button><a class="button secondary" href="#chapter-text">进入完整正文 ↓</a></div></div>${guide(c)}${related?`<div class="related"><strong>关联课程</strong> ${related}</div>`:''}<article id="chapter-text">${html}</article><nav class="pager">${i>0?`<a href="${order[i-1]}.html">← 上一步：${title(order[i-1])}</a>`:'<a href="index.html">← 学习首页</a>'}${i<order.length-1?`<a href="${order[i+1]}.html">下一步：${title(order[i+1])} →</a>`:'<a href="index.html#practice">进入项目练习 →</a>'}</nav>`;
 const withToc=body.replace('<article id="chapter-text">',`<details class="inline-toc"><summary>本章目录 · 展开选择小节</summary>${toc}</details><article id="chapter-text">`);
 writeFileSync(resolve(out,file(c)),shell({name:c.title,body:withToc,current:c.id,toc}));
}
const home=`<section class="hero"><p class="eyebrow">从第一张图，到一次有证据的问题分析</p><h1>把整套座舱架构<br>一步一步读懂。</h1><p>以 MT8676 / MT8668、PVT 和盟博 OS 项目材料为基础，从整机角色开始，走进模块、业务链路与工程验证。保留完整正文，给每一步补上新手导读。</p><div class="actions"><a class="button" href="00.html">开始第一步 →</a><a class="button secondary" href="index.html#learning-path">查看学习路线</a></div><div class="stats"><span><b>24</b>中文版章节</span><span><b>17</b>原版对照章节</span><span><b>6</b>学习阶段</span><span><b>50</b>关联课程与复盘</span></div></section><section id="learning-path"><p class="eyebrow">LEARNING PATH</p><h2>学习路线</h2><p>按顺序建立系统观，再按业务回查。每章先读导读，再进正文；遇到不熟悉的模块，用目录或全文搜索定位。</p><div class="path">${stages.map((s,i)=>`<section class="stage"><span class="stage-number">0${i+1}</span><div><h3>${s.name}</h3><p>${s.goal}</p><div class="chapter-links">${chapterLinks(s.ids)}</div></div></section>`).join('')}</div></section><section id="method" class="panel"><h2>如何学习真实项目</h2><p>“真实项目实践”首先意味着能把结论指回资料、接口和观察点。网站保留项目角色与原图，并把版本事实、方案案例、教学方法和待验证项分开；这不代表每个流程都已在当前车辆上测试通过。</p><ol><li><strong>先说现象：</strong>用户做了什么、看到了什么、什么时候出现；把“画面黑”和“旧画面停住”分开。</li><li><strong>再找链路：</strong>谁发起请求，谁决定策略，谁搬数据，谁执行物理动作，谁反馈状态。</li><li><strong>解释每次交接：</strong>把输入、输出、ID、有效期与完成语义写出来。ACK 只按该接口合同解释。</li><li><strong>比较证据：</strong>同一版本、同一会话、可比较的时间轴；缺哪一层证据就保留哪一层不确定性。</li><li><strong>做可复核产出：</strong>职责卡、链路表、假设与反证、验证记录。读完一章只标记已读，不自动宣告掌握。</li></ol><h3>第一次读图的三个问题</h3><p><strong>在哪运行？</strong>找部署域。<strong>负责什么？</strong>查模块输入/输出。<strong>什么时候算完成？</strong>沿反馈链查当前权威状态。不要把同一个框同时当硬件、进程和业务结果。</p></section><section id="practice"><p class="eyebrow">PROJECT PRACTICE</p><h2>从项目链路开始练习</h2><p>下列推演依据已有项目边界组织，属于学习练习，不是新增实测故障报告。</p><div class="case-grid"><section class="panel"><h3>01 · R 挡触发后环视黑屏</h3><p>先把挡位触发、相机采集、buffer/fence、合成送显拆成四段。记录同一次事件中最后一个仍正常推进的里程碑。</p><p>练习：为“采集未启动”“消费者等待”“显示未映射”各写一条可排除它的证据。恢复后同时检查新鲜帧与标定质量。</p><a href="11.html">读完整业务链 →</a> · <a href="19.html">对照 Camera/DDR →</a></section><section class="panel"><h3>02 · 导航获得焦点却无声</h3><p>按音源与音区定位策略，再追 PCM、route、DSP/Codec/功放和实际声音。确认日志的成功属于哪一层。</p><p>练习：把“一个音源无声”和“全部音源无声”的共同/独立路径标出；解释旧导航结束事件为什么不能恢复新通话的音量。</p><a href="12.html">读音频完整流程 →</a> · <a href="17.html">比较平台路径 →</a></section><section class="panel"><h3>03 · 空调 SET 成功但状态未变</h3><p>区分请求被接收、发送到 MCU/ECU、执行、状态回读和 UI 更新；不能用 App 返回代替车辆状态。</p><p>练习：构造请求值与反馈值对照表，给每行附会话、时间、有效性与来源，再标出最早缺少证据的交接。</p><a href="10.html">读正反向业务链 →</a> · <a href="15.html">学习诊断方法 →</a></section></div></section><section id="topics"><h2>按主题查阅全部内容</h2><div class="topic-grid">${topics.map(([id,name,ids])=>`<section class="panel"><h3>${id} · ${name}</h3><div class="chapter-links">${chapterLinks(ids)}</div></section>`).join('')}</div></section><section class="panel"><h2>两套正文怎样对比？</h2><p>中文版提供 24 章完整归纳；原版目录保留原有 17 章解释及其中独有的项目补充。00—16 章顶部可直接切换对应版本。平台差异单独读第 17 章，不能把两套文档的差别当作两颗芯片的全部差别。</p><a class="button secondary" href="17.html">8676 / 8668 平台对比 →</a> <a class="button secondary" href="original-00.html">原版解释全文 →</a><p class="note">原始 PDF、资料清单和本地证据文件未复制为在线下载；引用保留名称和页码，显示“本地来源”的条目请在项目资料库核对。</p></section>`;
writeFileSync(resolve(out,'index.html'),shell({name:'学习首页',body:home}));
writeFileSync(resolve(out,'compare.html'),shell({name:'两套正文并排对比',body:`<p class="eyebrow">COMPARE / 完整正文</p><h1>两套解释，并排阅读</h1><p>左侧为中文版，右侧为原版解释。两套材料的补充内容可能不同；平台差异请读 <a href="17.html">第 17 章</a>。</p><label for="compare-chapter">选择对比章节</label><select id="compare-chapter">${data.originals.map(c=>`<option value="${c.id}">${c.id} ${esc(c.title)}</option>`).join('')}</select><div class="comparison"><section><h2>中文版</h2><a id="compare-left-link" href="00.html">独立打开中文版 ↗</a><iframe title="中文版完整正文" id="compare-left" src="00.html?compare=1"></iframe></section><section><h2>原版解释</h2><a id="compare-right-link" href="original-00.html">独立打开原版 ↗</a><iframe title="原版完整正文" id="compare-right" src="original-00.html?compare=1"></iframe></section></div>`}));
writeFileSync(resolve(out,'search.json'),JSON.stringify(search));
for(const f of ['library.css','library.js'])copyFileSync(resolve(root,'scripts',f),resolve(out,f));
// Retain the latest course bodies byte-for-byte after newline normalization.
let archive=readFileSync(resolve(root,'content/course-archive.html'),'utf8').replace(/\r/g,'');let week=0;
archive=archive.replace(/<details class="lesson"([^>]*)>([\s\S]*?)<\/summary>/g,(full,attrs,head)=>{const day=head.match(/lesson-title">Day (\d+)/);const id=day?'day-'+day[1]:'week-entry-'+(++week);return full.replace('<details class="lesson"',`<details class="lesson" id="${id}"`);});
const topicNav=`<section class="guide" id="topics"><h2>按主题学习</h2><p><a href="architecture/index.html"><strong>进入完整架构实践知识库 →</strong></a> · 树状目录、24 章全文、17 章原版对照、新手学习路线。</p><p>架构解释同步：2026-09-20。课程仍到 Day 34，复盘不改变个人掌握记录。</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px">${topics.map(([id,name,ids])=>`<section><h3>${id} · ${name}</h3><p>${data.days.filter(d=>d.topics.includes(id)).map(d=>`<a href="#day-${d.day}">Day ${d.day}</a>`).join(' · ')}</p><a href="architecture/${ids[0]}.html">项目架构解释 →</a></section>`).join('')}</div></section>`;
archive=archive.replace('<section class="guide">',topicNav+'\n<section class="guide">');
archive=archive.replace('</body>',`<script>function revealCourse(){const e=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(e&&e.matches('details.lesson')){e.open=true;e.scrollIntoView({block:'start'});}}addEventListener('hashchange',revealCourse);revealCourse();</script></body>`);
writeFileSync(resolve(root,'docs/index.html'),archive);
writeFileSync(resolve(out,'build-info.json'),JSON.stringify({date:data.date,chapters:24,originals:17,searchSections:search.length,courses:50,architecture:'preserved',baseCommit:'a4fe4eaa70ff44aeb9e27068c71514f050f0ba06'},null,2));
console.log(`Built 41 full chapters, learning home, ${search.length} search sections and 50 course anchors.`);
