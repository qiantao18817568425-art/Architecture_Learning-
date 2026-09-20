/* All content is server-rendered static HTML. Enhancements never hide the article. */
const q=document.querySelector('#search'),state=document.querySelector('#search-state'),results=document.querySelector('#search-results');
let indexPromise,sourcePromise,queryId=0,timer;
const sourceToggle=document.querySelector("#search-sources");
const loadSources=()=>sourcePromise||(sourcePromise=fetch("source-search.json").then(r=>{if(!r.ok)throw Error("source index");return r.json()}).catch(e=>{sourcePromise=null;throw e}));
sourceToggle?.addEventListener("change",()=>q.dispatchEvent(new Event("input")));
const load=()=>indexPromise||(indexPromise=fetch('search.json').then(r=>{if(!r.ok)throw Error('index');return r.json()}).catch(e=>{indexPromise=null;throw e}));
q?.addEventListener('input',()=>{clearTimeout(timer);const ticket=++queryId;timer=setTimeout(async()=>{
 const term=q.value.trim().toLocaleLowerCase();results.replaceChildren();if(!term){state.textContent='';return}state.textContent='正在搜索全文…';
 try{const data=[...await load(),...(sourceToggle?.checked?await loadSources():[])];if(ticket!==queryId)return;const words=term.split(/\s+/);const matches=data.filter(x=>words.every(w=>(x.title+' '+x.text).toLocaleLowerCase().includes(w))).sort((a,b)=>(b.title.toLocaleLowerCase().includes(term)?1:0)-(a.title.toLocaleLowerCase().includes(term)?1:0));state.textContent=matches.length?`找到 ${matches.length} 处，显示前 40 处`:'没有找到匹配内容，请换一个模块名或关键词。';
 for(const hit of matches.slice(0,40)){const a=document.createElement('a');a.className='search-hit';a.href=hit.url;const title=document.createElement('strong');title.textContent=(hit.edition==='source'?'材料原文 · ':hit.edition==='original'?'原版 · ':'中文版 · ')+hit.title;const p=document.createElement('p');const at=hit.text.toLocaleLowerCase().indexOf(words[0]);p.textContent=(at>30?'…':'')+hit.text.slice(Math.max(0,at-30),Math.max(0,at-30)+145)+'…';a.append(title,p);results.append(a)}
 }catch{if(ticket===queryId)state.textContent='搜索索引暂时无法读取，可继续使用下方树状目录。'}
},180)});
if(matchMedia('(max-width:760px)').matches){const tree=document.querySelector('.nav-tree');if(tree)tree.open=false}
document.querySelectorAll('[data-read]').forEach(button=>{const key='cockpit-read-'+button.dataset.read;const update=()=>{try{button.textContent=localStorage.getItem(key)?'已读 ✓（点击取消）':'标记已读'}catch{button.textContent='标记已读'}};update();button.addEventListener('click',()=>{try{localStorage.getItem(key)?localStorage.removeItem(key):localStorage.setItem(key,'1');update()}catch{button.textContent='此浏览器无法保存阅读标记'}})});
// Render diagrams lazily; fit only when the labels remain readable.
const diagramQueue=[];let rendering=false;
if(window.mermaid)window.mermaid.initialize({startOnLoad:false,securityLevel:'strict',theme:'neutral',maxTextSize:200000,flowchart:{htmlLabels:true,useMaxWidth:false,nodeSpacing:20,rankSpacing:25},sequence:{useMaxWidth:false}});
function sizeDiagram(d,mode='readable'){
 const svg=d.querySelector('svg'),viewport=d.querySelector('.diagram-viewport');if(!svg)return;
 const natural=svg.viewBox.baseVal.width||svg.getBoundingClientRect().width;
 const current=svg.getBoundingClientRect().width,fit=Math.max(200,viewport.clientWidth-16);
 const labels=[...svg.querySelectorAll('text,.nodeLabel,.edgeLabel')];
 const base=Math.min(16,...labels.map(x=>parseFloat(getComputedStyle(x).fontSize)).filter(x=>x>0));
 const readable=natural*Math.max(.875,14/base);
 const width=mode==='reset'?Math.min(natural,fit):mode==='actual'?natural:mode==='readable'?Math.max(Math.min(natural,fit),readable):Math.max(150,Math.min(natural*4,current*(mode==='in'?1.25:1/1.25)));
 svg.style.width=width+'px';svg.style.minWidth='0';svg.style.maxWidth='none';svg.style.height='auto';d.dataset.zoomMode=mode;
 const estimated=Math.round(base*width/natural);
 d.querySelector('.diagram-status').textContent=`Mermaid 图表 · 当前文字约 ${estimated}px。`+(width>fit?'可横向滚动查看；点击“大屏阅读”扩大画布。':estimated<14?'当前为全图预览，点击“清晰字号”阅读细节。':'');
}
async function renderNext(){if(rendering)return;rendering=true;while(diagramQueue.length){const d=diagramQueue.shift();if(d.dataset.rendered)continue;const pre=d.querySelector('pre.mermaid'),status=d.querySelector('.diagram-status');try{if(!window.mermaid)throw Error('Mermaid unavailable');await window.mermaid.run({nodes:[pre]});if(!pre.querySelector('svg'))throw Error('SVG missing');d.dataset.rendered='success';sizeDiagram(d);}catch(e){d.dataset.rendered='error';status.textContent='图表生成失败；下方保留完整源码供核对。';}}rendering=false;}
function enqueueDiagram(d){if(!d.open||d.dataset.queued)return;d.dataset.queued='1';diagramQueue.push(d);renderNext();}
const diagramObserver=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting)enqueueDiagram(e.target)},{rootMargin:'250px'});
const dialog=document.createElement('dialog');dialog.className='diagram-dialog';dialog.setAttribute('aria-label','图表大屏阅读');
const closeDiagram=document.createElement('button');closeDiagram.type='button';closeDiagram.className='diagram-close';closeDiagram.textContent='关闭大屏（Esc）';dialog.append(closeDiagram);document.body.append(dialog);
let expanded=null,placeholder=null,returnFocus=null;
function restoreDiagram(){if(!expanded)return;placeholder.replaceWith(expanded);const d=expanded;expanded=null;placeholder=null;document.body.classList.remove('diagram-open');sizeDiagram(d);returnFocus?.focus();}
closeDiagram.addEventListener('click',()=>dialog.close());dialog.addEventListener('close',restoreDiagram);
document.querySelectorAll('details.diagram').forEach(d=>{
 diagramObserver.observe(d);d.addEventListener('toggle',()=>{if(d.open)enqueueDiagram(d)});
 d.querySelectorAll('[data-zoom]').forEach(b=>b.addEventListener('click',()=>sizeDiagram(d,b.dataset.zoom)));
 d.querySelector('[data-expand]')?.addEventListener('click',e=>{returnFocus=e.currentTarget;placeholder=document.createComment('diagram position');d.before(placeholder);expanded=d;dialog.append(d);dialog.showModal();document.body.classList.add('diagram-open');sizeDiagram(d);});
});
document.querySelectorAll('[data-diagram-view]').forEach(select=>select.addEventListener('change',()=>{
 const group=select.closest('.diagram-reading');group.querySelectorAll(':scope > details.diagram').forEach(d=>{d.open=d.dataset.panel===select.value;if(d.open)enqueueDiagram(d)});
}));
let resizeTimer;addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>document.querySelectorAll('details.diagram[open][data-rendered="success"]').forEach(d=>{if(['readable','reset'].includes(d.dataset.zoomMode))sizeDiagram(d,d.dataset.zoomMode)}),100)});
function reveal(){let id;try{id=decodeURIComponent(location.hash.slice(1))}catch{return}const target=document.getElementById(id);if(!target)return;for(let p=target;p;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;const picker=target.closest('.diagram-reading')?.querySelector('[data-diagram-view]');if(picker&&(target.matches('details.diagram')||target.matches('.diagram-reading'))){picker.value=target.matches('details.diagram')?target.dataset.panel:picker.options[0].value;picker.dispatchEvent(new Event('change'));}target.scrollIntoView({block:'start'})}addEventListener('hashchange',reveal);if(location.hash)reveal();
const params=new URLSearchParams(location.search);
if(params.get('compare')==='1')document.body.classList.add('embedded-reading');
const select=document.querySelector('#compare-chapter');
if(select){document.body.classList.add('compare-page');const initial=params.get('chapter');if([...select.options].some(x=>x.value===initial))select.value=initial;const choose=()=>{const id=select.value;document.querySelector('#compare-left').src=id+'.html?compare=1';document.querySelector('#compare-right').src='original-'+id+'.html?compare=1';document.querySelector('#compare-left-link').href=id+'.html';document.querySelector('#compare-right-link').href='original-'+id+'.html';history.replaceState(null,'','?chapter='+id)};choose();select.addEventListener('change',choose)}
