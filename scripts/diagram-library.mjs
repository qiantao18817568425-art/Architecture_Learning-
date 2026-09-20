import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {resolve} from 'node:path';
import {createHash} from 'node:crypto';
const root=resolve(import.meta.dirname,'..'),out=resolve(root,'docs/architecture');
const redraws=JSON.parse(readFileSync(resolve(root,'content/diagram-redraws.json'),'utf8'));
const readingViews=JSON.parse(readFileSync(resolve(root,'content/diagram-reading-views.json'),'utf8'));
const images=new Map();for(const d of redraws)for(const a of d.assets)images.set(a,d);
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export const diagramManifest=[];
mkdirSync(resolve(out,'diagrams'),{recursive:true});
export function diagram(code,{id,title,chapter,source,original,note,open=true,panelOnly=false}={}){
 id ||= 'diagram-'+createHash('sha256').update(code).digest('hex').slice(0,16);
 writeFileSync(resolve(out,'diagrams',id+'.mmd'),code+'\n');
 diagramManifest.push({id,title,chapter,source,original,sha256:createHash('sha256').update(code).digest('hex')});
 const panel=`<details ${panelOnly?`id="${id}"`:''} class="diagram" ${open?'open':''} data-panel="${id}"><summary>${panelOnly?esc(title):'展开 / 收起图表'}</summary><div class="diagram-tools"><button type="button" data-expand>大屏阅读</button><button type="button" data-zoom="readable">清晰字号</button><button type="button" data-zoom="in" aria-label="放大图表">＋</button><button type="button" data-zoom="out" aria-label="缩小图表">−</button><button type="button" data-zoom="actual">原始比例</button><button type="button" data-zoom="reset">查看全图</button><a href="diagrams/${id}.mmd" download>下载 Mermaid</a></div><div class="diagram-viewport" tabindex="0" role="region" aria-label="${esc(title||'架构图')}，可使用方向键滚动"><pre class="mermaid">${esc(code)}</pre></div><p class="diagram-status" role="status">图表进入可见区域后生成。</p><details><summary>查看 Mermaid 源码</summary><pre><code>${esc(code)}</code></pre></details></details>`;
 if(panelOnly)return panel;
 return `<figure class="mermaid-figure" id="${id}"><figcaption>${esc(title||'架构图')} · Mermaid</figcaption>${panel}${note?`<p class="note">${esc(note)}</p>`:''}${original?`<details class="original-reference"><summary>查看源文件原图作对照</summary><a href="${esc(original)}" target="_blank" rel="noopener"><img loading="lazy" src="${esc(original)}" alt="${esc(title)} 源图"></a></details>`:''}</figure>`;
}
export function redrawImage(token,c){
 const d=images.get(token.href);if(!d)throw Error('Architecture image missing Mermaid redraw: '+token.href);
 const base={id:d.id+'-'+c.edition,title:d.title,chapter:(c.edition==='original'?'original-':'')+c.id,source:d.source,original:token.href,note:d.note};
 const code=readFileSync(resolve(root,'content/diagrams',d.source),'utf8').trim(),views=readingViews[d.id];
 if(!views)return diagram(code,base);
 // Keep previously shared source download URLs current after introducing detail panels.
 writeFileSync(resolve(out,'diagrams',base.id+'.mmd'),code+'\n');
 const panels=views.map((v,i)=>({...v,domId:base.id+'-'+v.id,code:readFileSync(resolve(root,'content/diagrams',v.source),'utf8').trim(),open:i===0}));
 panels.push({domId:base.id+'-complete',title:'完整结构图 · 全部模块',source:d.source,code,open:false});
 return `<figure class="mermaid-figure diagram-reading" id="${base.id}"><figcaption>${esc(d.title)} · Mermaid</figcaption><p class="diagram-guide">先看总览，再选择${d.id==='android-layers'?'软件层':'运行域'}查看全部模块。排列与颜色用于阅读分区，不表示调用或启动顺序。</p><label class="diagram-view-picker" for="${base.id}-view">阅读视图 <select id="${base.id}-view" data-diagram-view>${panels.map(p=>`<option value="${p.domId}">${esc(p.title)}</option>`).join('')}</select></label>${panels.map(p=>diagram(p.code,{...base,id:p.domId,title:p.title,source:p.source,open:p.open,panelOnly:true})).join('')}<p class="note">${esc(d.note)} 完整结构图保留全部原始模块；总览只做导航，详细内容见各层或各域。</p><details class="original-reference"><summary>查看源文件原图作对照</summary><a href="${esc(token.href)}" target="_blank" rel="noopener"><img loading="lazy" src="${esc(token.href)}" alt="${esc(d.title)} 源图"></a></details></figure>`;
}
export function buildDiagramIndex(shell){
 const unique=[...new Map(diagramManifest.map(d=>[d.id,d])).values()];
 const body=`<h1>架构图表目录</h1><p>全部章节图表从 Mermaid 源码生成。${redraws.length} 类图片源图已建立 Mermaid 重绘，原图片保留在各图下方的对照区。现有章节的 Mermaid 拓扑保留；图表文字与说明中的不确定性也继续保留。</p><p>本页是索引，点击回到对应章节阅读上下文，或下载源码。每份源代码的 SHA-256 记录在 <a href="diagram-manifest.json">构建清单</a>。</p><ul>${unique.map(d=>`<li><a href="${d.chapter}.html#${d.id}">${esc(d.title||d.source||d.id)} · ${d.chapter}</a> · <a href="diagrams/${d.id}.mmd" download>源码</a></li>`).join('')}</ul>`;
 writeFileSync(resolve(out,'diagrams.html'),shell({name:'Mermaid 图表目录',body}));
 writeFileSync(resolve(out,'diagram-manifest.json'),JSON.stringify(diagramManifest,null,2));
 return {occurrences:diagramManifest.length,unique:unique.length,redraws:redraws.length};
}
