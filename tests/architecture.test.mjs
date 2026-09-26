import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
test('all 25 Chinese and 17 original chapters have full text and beginner guides',()=>{
 const data=JSON.parse(read('content/architecture.json'));
 assert.equal(data.chapters.length,25);assert.equal(data.originals.length,17);
 for(const item of [...data.chapters,...data.originals]){
  const html=read(`docs/architecture/${item.edition==='original'?'original-':''}${item.id}.html`);
  assert.ok(html.includes('新手导读'));assert.ok(html.includes('项目练习'));assert.ok(html.includes('本章目录'));
  const sourceHeadings=item.markdown.match(/^#{1,6}\s/gm)||[];
  const body=html.split('<article id="chapter-text">')[1].split('</article>')[0];
  assert.equal((body.match(/<h[1-6] id=/g)||[]).length,sourceHeadings.length,`all headings present: ${item.edition} ${item.id}`);
 }
});
test('course archive preserves legacy articles and adds new courses with stable destinations',()=>{
 const before=read('content/course-archive.html'),after=read('docs/index.html');
 const articles=s=>s.replace(/\r/g,'').match(/<article>[\s\S]*?<\/article>/g);
 const progress=JSON.parse(read('content/learning-progress.json'));
 assert.deepEqual(articles(after).slice(0,articles(before).length),articles(before),'all legacy articles preserved');assert.equal(articles(after).length,articles(before).length+progress.lessons.length);
 for(let n=1;n<=JSON.parse(read('content/learning-progress.json')).lastPublishedDay;n++)assert.ok(after.includes(`id="day-${n}"`));
 assert.ok(after.includes('architecture/index.html'));assert.ok(after.includes('完整架构实践知识库'));
});
test('curriculum offers progression, comparisons, examples and full text search',()=>{
 const home=read('docs/architecture/index.html');
 for(const text of ['学习路线','第一阶段','第六阶段','平台对比','真实项目','树状目录','全文搜索'])assert.ok(home.includes(text),text);
 const index=JSON.parse(read('docs/architecture/search.json'));
 assert.ok(index.length>200);assert.ok(index.some(x=>x.text.includes('camerahalserver')));
 assert.ok(existsSync(new URL('../docs/architecture/original-11.html',import.meta.url)));
});
test('full text search includes interface names inside code blocks and beginner explanations',()=>{
 const index=JSON.parse(read('docs/architecture/search.json'));
 assert.ok(index.some(x=>x.url.startsWith('06.html#')&&x.text.includes('dequeueBuffer')),'code-block API is searchable');
 assert.ok(index.some(x=>x.url==='02.html#beginner-guide'&&x.text.includes('物理 CPU')),'beginner guide is searchable');
});
