import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,readFileSync,existsSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
const mod=await import('../scripts/answer-queue.mjs').catch(()=>({}));
const owner='qiantao18817568425-art';
const index=()=>({schemaVersion:1,authorizedLearners:[owner],submissions:[]});
const units=[{id:'day-1',title:'Day 1'},{id:'week-entry-1',title:'Week 2'}];
const issue=(changes={})=>({number:7,title:'[答卷][day-1] 第一课',body:'### 课程编号\n\nday-1\n\n### 答卷正文与附件\n\n第1题：这是我的分析。',user:{login:owner},state:'open',updated_at:'2026-09-26T12:00:00Z',comments:[],...changes});
const snapshot=issues=>({complete:true,capturedAt:'2026-09-26T12:05:00Z',issues});
const plan=(s,i=index())=>{assert.equal(typeof mod.planAnswerReview,'function','answer scanning is not implemented');return mod.planAnswerReview(s,i,units);};

test('new and closed submissions are reviewed; unchanged revisions and coach replies are not',()=>{
  const original=issue({state:'closed'});
  const first=plan(snapshot([original]));
  assert.equal(first.pending.length,1);
  const previous=index();previous.submissions=[{...first.pending[0],reviewedRevision:first.pending[0].revision,status:'passed'}];
  assert.equal(plan(snapshot([original]),previous).pending.length,0);
  original.comments.push({id:12,user:{login:owner},body:'<!-- cockpit-review:v1 -->\n批改：通过',updated_at:'2026-09-26T12:10:00Z'});
  assert.equal(plan(snapshot([original]),previous).pending.length,0);
});

test('edits and learner supplements trigger a new revision without erasing the original',()=>{
  const original=issue();const first=plan(snapshot([original]));
  const previous=index();previous.submissions=[{...first.pending[0],reviewedRevision:first.pending[0].revision,status:'passed'}];
  const edited=issue({body:original.body+'\n更正：补充了超时与恢复。'});
  assert.notEqual(plan(snapshot([edited]),previous).pending[0].revision,first.pending[0].revision);
  original.comments=[{id:13,user:{login:owner},body:'[补交] 第2题：补充的时序分析。'}];
  const second=plan(snapshot([original]),previous);
  assert.notEqual(second.pending[0].revision,first.pending[0].revision);
  const dir=mkdtempSync(join(tmpdir(),'cockpit-answers-'));
  mod.archiveAnswerQueue(first,index(),dir);
  mod.archiveAnswerQueue(second,previous,dir);
  assert.ok(existsSync(join(dir,first.pending[0].answerPath)));
  assert.ok(readFileSync(join(dir,second.pending[0].answerPath),'utf8').includes('补充的时序分析'));
});

test('attachments are retained as links and unreadable files never become passing grades',()=>{
  const first=plan(snapshot([issue({body:issue().body+'\n[答卷.pdf](https://github.com/user-attachments/files/123/answer.pdf)'})]));
  assert.deepEqual(first.pending[0].attachmentUrls,['https://github.com/user-attachments/files/123/answer.pdf']);
  const dir=mkdtempSync(join(tmpdir(),'cockpit-review-'));
  const saved=mod.archiveAnswerQueue(first,index(),dir);
  assert.throws(()=>mod.recordAnswerReview(saved,{issueNumber:7,revision:first.pending[0].revision,status:'passed',feedback:'通过',attachmentsRead:false},dir),/attachment/i);
  const reviewed=mod.recordAnswerReview(saved,{issueNumber:7,revision:first.pending[0].revision,status:'needs_revision',feedback:'第1题已解释模块，但缺少时序证据，请补充。',attachmentsRead:true},dir);
  assert.equal(reviewed.submissions[0].reviewedRevision,first.pending[0].revision);
  assert.ok(existsSync(join(dir,reviewed.submissions[0].reviewPath)));
  assert.throws(()=>mod.recordAnswerReview(saved,{issueNumber:7,revision:'stale',status:'passed',feedback:'通过',attachmentsRead:true},dir),/revision/i);
});

test('unrelated issues, other users and pull requests do not change personal learning status',()=>{
  const result=plan(snapshot([issue({title:'普通问题'}),issue({user:{login:'someone-else'}}),issue({pull_request:{url:'x'}})]));
  assert.equal(result.pending.length,0);
});

test('incomplete scans and invalid course mapping cannot silently become no new answers',()=>{
  assert.throws(()=>plan({complete:false,issues:[]}),/complete/i);
  const bad=plan(snapshot([issue({title:'[答卷][../../bad] 错误'})]));
  assert.equal(bad.pending.length,0);assert.equal(bad.blocked.length,1);
  const mismatch=plan(snapshot([issue({title:'[答卷][week-entry-1] 周总结'})]));
  assert.equal(mismatch.blocked.length,1);
});
