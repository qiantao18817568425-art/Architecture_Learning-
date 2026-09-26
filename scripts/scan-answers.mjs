import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {planAnswerReview,archiveAnswerQueue} from './answer-queue.mjs';
const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const args=process.argv.slice(2),option=name=>args.includes(name)?args[args.indexOf(name)+1]:null;
const indexPath=resolve(root,'content/submissions.json');
const index=JSON.parse(readFileSync(indexPath,'utf8'));
const units=JSON.parse(readFileSync(resolve(root,'content/course-units.json'),'utf8'));
async function pages(url){
  let records=[];
  for(let page=1;;page++){
    const response=await fetch(`${url}${url.includes('?')?'&':'?'}per_page=100&page=${page}`,{headers:{Accept:'application/vnd.github+json','User-Agent':'cockpit-learning-answer-scan',...(process.env.GITHUB_TOKEN?{Authorization:`Bearer ${process.env.GITHUB_TOKEN}`}:{})},signal:AbortSignal.timeout(30000)});
    if(!response.ok)throw new Error(`GitHub scan failed: HTTP ${response.status}; do not treat this as no new answers`);
    const data=await response.json();if(!Array.isArray(data))throw new Error('Incomplete GitHub scan');
    records.push(...data);if(data.length<100)return records;
  }
}
let snapshot;
if(option('--input'))snapshot=JSON.parse(readFileSync(resolve(option('--input')),'utf8'));
else{
  const issues=await pages(`https://api.github.com/repos/${index.repository}/issues?state=all`);
  for(const issue of issues){
    if(!issue.pull_request&&index.authorizedLearners.includes(issue.user?.login)&&issue.title?.startsWith('[答卷]'))issue.comments=await pages(`https://api.github.com/repos/${index.repository}/issues/${issue.number}/comments`);
  }
  snapshot={complete:true,capturedAt:new Date().toISOString(),issues};
}
const plan=planAnswerReview(snapshot,index,units);
const updated=archiveAnswerQueue(plan,index,root);
writeFileSync(indexPath,JSON.stringify(updated,null,2)+'\n');
const output=resolve(option('--output')||resolve(root,'.tmp/answer-queue.json'));
mkdirSync(dirname(output),{recursive:true});writeFileSync(output,JSON.stringify(plan,null,2)+'\n');
console.log(JSON.stringify({scannedAt:plan.capturedAt,pending:plan.pending.length,blocked:plan.blocked,queue:output}));
