import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read = path => readFileSync(new URL('../'+path,import.meta.url),'utf8');
const decode = s => s.replaceAll('&amp;','&').replaceAll('&quot;','"');

test('every historical Day and Week exposes an upload link bound to its own stable course id',()=>{
  const html=read('docs/index.html');
  const lessons=[...html.matchAll(/<details class="lesson"([^>]*)>([\s\S]*?)(?=<details class="lesson"|<footer>)/g)];
  assert.ok(lessons.length>=54);
  for(const [,attrs,body] of lessons){
    const id=attrs.match(/\bid="([^"]+)"/)[1];
    const match=body.match(/<a[^>]*class="answer-submit"[^>]*href="([^"]+)"/);
    assert.ok(match,`missing submission link for ${id}`);
    const url=new URL(decode(match[1]));
    assert.equal(url.origin,'https://github.com');
    assert.equal(url.pathname,'/qiantao18817568425-art/Architecture_Learning-/issues/new');
    assert.equal(url.searchParams.get('template'),'answer.yml');
    assert.equal(url.searchParams.get('lesson'),id);
    assert.ok(url.searchParams.get('title').startsWith(`[答卷][${id}]`));
    assert.ok(body.includes('附件')&&body.includes('公开')&&body.includes('GitHub 登录'));
  }
});

test('independent new lesson and weekend review both expose submission and grading links',()=>{
  for(const id of ['day-37','week-11-saturday']){
    const html=read(`docs/lessons/${id}.html`);
    assert.ok(html.includes('class="answer-submit"'),id);
    assert.ok(html.includes('查看答卷与批改'),id);
  }
});
