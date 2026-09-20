import {readFileSync,writeFileSync,copyFileSync} from 'node:fs';
import {resolve} from 'node:path';
const root=resolve(import.meta.dirname,'..'),out=resolve(root,'docs/architecture');
export const sourceIndex=JSON.parse(readFileSync(resolve(root,'content/sources.json'),'utf8'));
const records=new Map(sourceIndex.map(x=>[x.id,JSON.parse(readFileSync(resolve(root,`content/sources/${x.id}.json`),'utf8'))]));
const esc=s=>String(s??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const sourceLinks=new Map();
for(const s of sourceIndex)for(const r of s.refs)sourceLinks.set(`${r.edition}/${r.chapter}/${decodeURI(r.href)}`,{s,r});
export function sourceDestination(c,href){const hit=sourceLinks.get(`${c.edition}/${c.id}/${decodeURI(href)}`);if(!hit)return null;const page=hit.r.fragment.match(/page=(\d+)/)?.[1];return `source-${hit.s.id}.html`+(page?`#page-${page}`:'');}
export function evidence(c){
 const refs=new Map();
 for(const s of sourceIndex){if(s.ext!=='.pdf')continue;for(const r of s.refs){if(r.chapter!==c.id||r.edition!==c.edition)continue;const n=Number(r.fragment.match(/page=(\d+)/)?.[1]||1);refs.set(s.id+'/'+n,{s,n});}}
 if(c.id==='22'||!refs.size)return '';
 return `<section class="evidence-excerpts" id="evidence-excerpts"><h2>本章引用的材料内容</h2><p>下面直接展示引用页的文字开头，可展开核对。打开材料页可看全部物理页及完整 PDF，图表和版式以 PDF 为准。提取原文不代表已经逐页验证其适用于当前项目。</p>${[...refs.values()].map(({s,n})=>{const page=records.get(s.id).pages.find(p=>p.number===n);return `<details><summary>${esc(s.name)} · PDF 第 ${n} 页</summary><pre class="source-text">${esc(page?.text.slice(0,2200)||'这一页没有足够的可提取文字，请打开原 PDF 查看图示。')}${page?.text.length>2200?'\n……本页余下内容见完整材料页。':''}</pre><a href="source-${s.id}.html#page-${n}">阅读整页及原图 →</a></details>`}).join('')}</section>`;
}
export function buildSources(shell){
 const search=[];
 for(const s of records.values()){
  const pdf=s.ext==='.pdf'&&s.asset;
  let body=`<div class="breadcrumb"><a href="index.html">知识库</a> / <a href="sources.html">材料原文</a></div><h1>${esc(s.name)}</h1><p>${esc(s.id)}${s.aliases.length?' · 原来源 ID '+esc(s.aliases.join('、')):''} · ${esc(s.unit||s.status)} · ${s.pages.length} 个阅读单元</p><p class="note">${esc(s.review_scope)}。以下为来源内容，不是对当前项目实测结果的断言。</p><details><summary>版本与来源追溯</summary><p>${esc(s.origin)}</p><p>SHA-256：<code>${esc(s.sha256)}</code></p><p>原文件大小：${s.bytes.toLocaleString()} 字节</p></details>`;
  if(s.asset)body+=`<div class="actions"><a class="button" href="${s.asset}" ${pdf?'target="_blank" rel="noopener"':'download'}>${pdf?'打开完整 PDF（含全部图表） ↗':'下载完整原文件'}</a><a class="button secondary" href="#source-text">阅读站内正文 ↓</a></div>`;
  if(s.layout_note)body+=`<p class="note">${esc(s.layout_note)}</p>`;
  for(const warning of s.extraction_warnings||[])body+=`<p class="note">${esc(warning)}</p>`;
  if(s.children?.length)body+=`<h2>压缩包内可直接阅读的文档</h2><ul>${s.children.map(id=>`<li><a href="source-${id}.html">${esc(records.get(id).name)}</a></li>`).join('')}</ul>`;
  if(s.members)body+=`<details><summary>压缩包完整目录（${s.members.length} 项）</summary><p>文档已单独提供阅读入口。程序、安装包、仿真模型等保留名称与大小，不作为培训正文，也未执行。</p><ul>${s.members.map(m=>`<li>${esc(m.path)} · ${m.bytes.toLocaleString()} 字节</li>`).join('')}</ul></details>`;
  if(pdf)body+=`<details><summary>在本页展开原 PDF 查看图表</summary><iframe class="pdf-viewer" loading="lazy" title="${esc(s.name)} 原 PDF" src="${s.asset}"></iframe><p>若浏览器不支持嵌入 PDF，请使用上方“打开完整 PDF”。下方文字仍可直接阅读。</p></details>`;
  body+='<article id="source-text">';
  for(const p of s.pages){
   body+=`<section class="source-page" id="page-${p.number}"><h2>${esc(s.unit||'阅读单元')} ${p.number}${p.title?' · '+esc(p.title):''}</h2>${pdf?`<a href="${s.asset}#page=${p.number}" target="_blank" rel="noopener">查看该页原始图表 ↗</a>`:''}<pre class="source-text">${esc(p.text)||'本页无可提取文字，请查看原图。'}</pre></section>`;
   search.push({title:s.name+' · '+(s.unit||'阅读单元')+' '+p.number,edition:'source',url:`source-${s.id}.html#page-${p.number}`,text:p.text});
  }
  body+='</article>';
  if(s.media.length)body+=`<section><h2>材料中的原图</h2>${s.media.map((m,i)=>`<figure><a href="${m}" target="_blank" rel="noopener"><img loading="lazy" src="${m}" alt="${esc(s.name)} 内嵌原图 ${i+1}"></a><figcaption>原图 ${i+1} · 点击放大</figcaption></figure>`).join('')}</section>`;
  const toc=s.pages.map(p=>`<a href="#page-${p.number}">${esc(s.unit||'单元')} ${p.number}${p.title?' '+esc(p.title):''}</a>`).join('');
  writeFileSync(resolve(out,`source-${s.id}.html`),shell({name:s.name,body,toc}));
 }
 const groups=[['正文直接引用',s=>s.refs.some(r=>r.chapter!=='22')],['MT8668 原材料',s=>s.origin.startsWith('8668/')],['MT8676 原材料',s=>s.origin.startsWith('8676/')],['PVT 与其他材料',s=>!s.origin.startsWith('8668/')&&!s.origin.startsWith('8676/')]];
 const body=`<p class="eyebrow">MATERIALS / 原文资料库</p><h1>在站内阅读材料原文</h1><p>${records.size} 个去重后的来源，${search.length} 个正文阅读单元。PDF 按物理页提供全文及保留图表的原件；Word、PPT、工作表提供提取的文字、可用图片与原件。来源目录和原件内容的覆盖状态在各页明确说明。</p><p>左侧搜索可勾选“同时搜索材料原文”。架构正文中的来源链接已指向这里，引用页也可直接展开核对。网页中的培训命令是资料内容，不代表建议立即在目标机执行。</p><p><a href="import.html">下载可导入 ChatGPT 的资料与分析说明 →</a></p>${groups.map(([name,test],i)=>`<section id="group-${i}"><h2>${name}</h2><ul class="source-list">${sourceIndex.filter(test).map(s=>`<li><a href="source-${s.id}.html">${esc(s.name)}</a> <small>${esc(s.id)} · ${s.pageCount} 个阅读单元${['empty_source','legacy_word_download','binary_catalogue'].includes(s.status)?' · '+esc(s.status):''}</small></li>`).join('')}</ul></section>`).join('')}`;
 writeFileSync(resolve(out,'sources.html'),shell({name:'材料原文',body,toc:groups.map(([name],i)=>`<a href="#group-${i}">${name}</a>`).join('')}));
 writeFileSync(resolve(out,'source-search.json'),JSON.stringify(search));
 return {sourceCount:records.size,readingUnits:search.length};
}
