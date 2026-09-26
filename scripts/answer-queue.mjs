import {createHash} from 'node:crypto';
import {mkdirSync,writeFileSync,existsSync,readFileSync} from 'node:fs';
import {resolve,dirname,relative,isAbsolute} from 'node:path';

const repository='qiantao18817568425-art/Architecture_Learning-';
const validId=id=>/^(day-\d+|week-[a-z0-9-]+)$/.test(id);
const hash=value=>createHash('sha256').update(JSON.stringify(value)).digest('hex');
function safePath(root,path){
  const target=resolve(root,path),rel=relative(resolve(root),target);
  if(!rel||rel.startsWith('..')||isAbsolute(rel))throw new Error('Unsafe answer path');
  return target;
}
function write(root,path,text,immutable=false){
  const target=safePath(root,path);mkdirSync(dirname(target),{recursive:true});
  if(immutable&&existsSync(target)){
    if(readFileSync(target,'utf8')!==text)throw new Error('Immutable answer revision differs');
    return;
  }
  writeFileSync(target,text);
}
function section(body,label){return body.match(new RegExp('(?:^|\\n)### '+label+'\\s*\\n([\\s\\S]*?)(?=\\n### |$)'))?.[1]?.trim();}
function paths(unitId,issueNumber,revision){
  if(!validId(unitId)||!Number.isSafeInteger(issueNumber)||issueNumber<1||! /^[a-f0-9]{64}$/.test(revision))throw new Error('Invalid answer identity or revision');
  const base=`submissions/${unitId}/issue-${issueNumber}/${revision}`;
  return {answerPath:`${base}/answer.md`,snapshotPath:`${base}/answer.json`,reviewPath:`${base}/review.md`};
}

export function planAnswerReview(snapshot,index,units){
  if(snapshot?.complete!==true||!Array.isArray(snapshot.issues)||!snapshot.capturedAt||!Number.isFinite(Date.parse(snapshot.capturedAt)))throw new Error('A complete, dated issue scan is required');
  const ids=new Set(units.map(x=>x.id)),authorized=new Set(index.authorizedLearners||[]);
  const pending=[],blocked=[];
  for(const issue of snapshot.issues){
    if(issue.pull_request||!authorized.has(issue.user?.login)||!issue.title?.startsWith('[答卷]'))continue;
    if(!Array.isArray(issue.comments))throw new Error(`Incomplete comments for issue ${issue.number}`);
    const unitId=issue.title.match(/^\[答卷\]\[([^\]]+)\]/)?.[1];
    const body=issue.body||'',bodyId=section(body,'课程编号'),answer=section(body,'答卷正文与附件');
    if(!unitId||!validId(unitId)||!ids.has(unitId)||bodyId!==unitId||!answer||answer==='_No response_'||!Number.isSafeInteger(issue.number)||issue.number<1){
      blocked.push({issueNumber:issue.number,reason:'课程编号无效、标题与正文编号不一致，或答卷正文为空；请修正原 Issue。'});continue;
    }
    const supplements=issue.comments.filter(c=>c.user?.login===issue.user.login&&c.body?.trimStart().startsWith('[补交]')).map(c=>({id:c.id,body:c.body})).sort((a,b)=>a.id-b.id);
    const source={unitId,author:issue.user.login,body,supplements};
    const revision=hash(source),previous=index.submissions.find(x=>x.issueNumber===issue.number);
    if(previous?.reviewedRevision===revision)continue;
    const text=[body,...supplements.map(x=>x.body)].join('\n');
    const attachmentUrls=[...new Set(text.match(/https:\/\/(?:github\.com\/user-attachments\/|user-images\.githubusercontent\.com\/)[^\s)<>"\]]+/g)||[])];
    pending.push({issueNumber:issue.number,unitId,author:issue.user.login,revision,sourceUrl:`https://github.com/${repository}/issues/${issue.number}`,attachmentUrls,...paths(unitId,issue.number,revision),source});
  }
  return {capturedAt:snapshot.capturedAt,pending,blocked};
}

export function archiveAnswerQueue(plan,index,root){
  const result=structuredClone(index);
  for(const item of plan.pending){
    const {source,...metadata}=item;
    const expected=paths(item.unitId,item.issueNumber,item.revision);
    if(hash(source)!==item.revision||item.answerPath!==expected.answerPath)throw new Error('Answer revision integrity check failed');
    const markdown=`# 学习答卷：${item.unitId}\n\n来源：${item.sourceUrl}\n\n提交者：${item.author}\n\n答卷版本：${item.revision}\n\n## 原始提交\n\n${source.body}\n\n${source.supplements.map(c=>`## 补交评论 ${c.id}\n\n${c.body}\n`).join('\n')}`;
    write(root,expected.answerPath,markdown,true);
    write(root,expected.snapshotPath,JSON.stringify(source,null,2)+'\n',true);
    const previous=result.submissions.find(x=>x.issueNumber===item.issueNumber);
    const record={...previous,...metadata,status:'pending_review',reviewPath:previous?.reviewPath||null};
    result.submissions=result.submissions.filter(x=>x.issueNumber!==item.issueNumber).concat(record);
  }
  result.lastScan=plan.capturedAt;
  result.blocked=plan.blocked;
  return result;
}

export function recordAnswerReview(index,review,root){
  const result=structuredClone(index),item=result.submissions.find(x=>x.issueNumber===review.issueNumber);
  if(!item||item.revision!==review.revision)throw new Error('Review revision is stale or unknown');
  const statuses=['passed','needs_revision','attachment_unreadable'];
  if(!statuses.includes(review.status)||!review.feedback?.trim())throw new Error('Review needs a valid status and substantive feedback');
  if(item.attachmentUrls.length&&review.attachmentsRead!==true&&review.status!=='attachment_unreadable')throw new Error('All attachments must be read before grading');
  const {reviewPath}=paths(item.unitId,item.issueNumber,item.revision);
  const marker=`<!-- cockpit-review:v1 issue=${item.issueNumber} revision=${item.revision} -->`;
  write(root,reviewPath,`${marker}\n# 答卷批改：${item.unitId}\n\n答卷：[Issue #${item.issueNumber}](${item.sourceUrl})\n\n版本：${item.revision}\n\n结论：${review.status}\n\n${review.feedback.trim()}\n`);
  Object.assign(item,{status:review.status,reviewPath,reviewedAt:review.reviewedAt||new Date().toISOString()});
  if(review.status!=='attachment_unreadable')item.reviewedRevision=item.revision;
  return result;
}
