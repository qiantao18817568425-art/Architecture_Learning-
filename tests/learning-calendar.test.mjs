import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {scheduleForDate,shanghaiDate} from '../scripts/learning-calendar.mjs';

test('weekdays and weekends follow the original course cadence',()=>{
  for (const [date,kind] of [['2026-09-24','day'],['2026-09-25','friday-review'],['2026-09-26','saturday-review'],['2026-09-27','sunday-review'],['2026-09-28','day']]) assert.equal(scheduleForDate(date).kind,kind);
  assert.throws(()=>scheduleForDate('2026-02-30'));
});

test('China midnight changes task type even while UTC is still Friday',()=>{
  assert.equal(scheduleForDate(shanghaiDate(new Date('2026-09-25T15:59:59Z'))).kind,'friday-review');
  assert.equal(scheduleForDate(shanghaiDate(new Date('2026-09-25T16:00:00Z'))).kind,'saturday-review');
});

test('current review excludes prepublished Monday material from assigned progress',()=>{
  const progress=JSON.parse(readFileSync(new URL('../content/learning-progress.json',import.meta.url),'utf8'));
  for(const lesson of progress.lessons){
    const schedule=scheduleForDate(lesson.scheduledFor||lesson.date);
    assert.equal(lesson.kind==='day',schedule.allowsNewDay,lesson.id);
    if(lesson.status==='scheduled') assert.ok(lesson.day>progress.lastAssignedDay);
  }
  const current=progress.lessons.find(x=>x.id===progress.currentUnitId);
  assert.equal(current.kind==='day',scheduleForDate(progress.updatedOn).allowsNewDay);
  assert.ok(progress.lastAssignedDay<=progress.lastPublishedDay);
});
