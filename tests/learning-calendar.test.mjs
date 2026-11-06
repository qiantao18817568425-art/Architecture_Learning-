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

test('current unit follows its scheduled date even when a later date records an authorized catch-up',()=>{
  const progress=JSON.parse(readFileSync(new URL('../content/learning-progress.json',import.meta.url),'utf8'));
  for(const lesson of progress.lessons){
    const schedule=scheduleForDate(lesson.scheduledFor||lesson.date);
    assert.equal(lesson.kind==='day',schedule.allowsNewDay,lesson.id);
    if(lesson.status==='scheduled') assert.ok(lesson.day>progress.lastAssignedDay);
  }
  const current=progress.lessons.find(x=>x.id===progress.currentUnitId);
  assert.equal(current.kind==='day',scheduleForDate(current.scheduledFor||current.date).allowsNewDay);
  if(progress.updatedOn!==current.scheduledFor) assert.ok(current.assignmentRecordedOn===progress.updatedOn||current.assignedOn===progress.updatedOn);
  assert.ok(progress.lastAssignedDay<=progress.lastPublishedDay);
});

test('an unpublished Sunday is not backfilled when Monday assigns Day49',()=>{
  const progress=JSON.parse(readFileSync(new URL('../content/learning-progress.json',import.meta.url),'utf8'));
  const skipped=progress.skippedUnits.find(x=>x.id==='week-15-sunday');
  const day49=progress.lessons.find(x=>x.id==='day-49');
  assert.equal(scheduleForDate('2026-10-25').kind,'sunday-review');
  assert.equal(skipped?.status,'not_published');
  assert.equal(skipped?.recordedOn,'2026-10-26');
  assert.equal(scheduleForDate(day49.scheduledFor).kind,'day');
  assert.equal(day49.firstPublishedOn,'2026-10-26');
});

test('Tuesday 2026-10-27 keeps the historical Day50 assignment',()=>{
  const progress=JSON.parse(readFileSync(new URL('../content/learning-progress.json',import.meta.url),'utf8'));
  const day50=progress.lessons.find(x=>x.id==='day-50');
  assert.equal(scheduleForDate('2026-10-27').kind,'day');
  assert.equal(day50?.scheduledFor,'2026-10-27');
  assert.equal(day50?.firstPublishedOn,'2026-10-27');
  assert.equal(day50?.status,'assigned');
  assert.equal(day50?.assessment,'awaiting_answers');
});

test('Wednesday 2026-10-28 records Day51 exactly once',()=>{
  const progress=JSON.parse(readFileSync(new URL('../content/learning-progress.json',import.meta.url),'utf8'));
  const day51=progress.lessons.find(x=>x.id==='day-51');
  assert.equal(scheduleForDate('2026-10-28').kind,'day');
  assert.equal(day51?.scheduledFor,'2026-10-28');
  assert.equal(day51?.firstPublishedOn,'2026-10-28');
  assert.equal(progress.lessons.filter(x=>x.id==='day-51').length,1);
});

test('Thursday 2026-10-29 assigns Day52 once and prepares the Friday review',()=>{
  const progress=JSON.parse(readFileSync(new URL('../content/learning-progress.json',import.meta.url),'utf8'));
  const day52=progress.lessons.find(x=>x.id==='day-52');
  assert.equal(scheduleForDate('2026-10-29').kind,'day');
  assert.equal(day52?.scheduledFor,'2026-10-29');
  assert.equal(day52?.firstPublishedOn,'2026-10-29');
  assert.equal(day52?.status,'assigned');
  assert.equal(day52?.assessment,'awaiting_answers');
  assert.equal(progress.lessons.filter(x=>x.id==='day-52').length,1);
  assert.ok(progress.lastPublishedDay>=52);
  assert.ok(progress.lastAssignedDay>=52);
  assert.ok(progress.lessons.some(x=>x.id==='week-16-friday'));
});

test('Friday 2026-10-30 publishes one Week16 review without advancing Day53',()=>{
  const progress=JSON.parse(readFileSync(new URL('../content/learning-progress.json',import.meta.url),'utf8'));
  const review=progress.lessons.find(x=>x.id==='week-16-friday');
  assert.equal(scheduleForDate('2026-10-30').kind,'friday-review');
  assert.equal(review?.scheduledFor,'2026-10-30');
  assert.equal(review?.kind,'review');
  assert.deepEqual(review?.scope,[49,50,51,52]);
  assert.equal(progress.lessons.filter(x=>x.id==='week-16-friday').length,1);
  assert.ok(progress.lastPublishedDay>=52);
  assert.ok(progress.lastAssignedDay>=52);
  assert.ok(progress.lessons.some(x=>x.id==='week-16-saturday'));
});

test('Saturday 2026-10-31 publishes one Week16 consolidation without advancing Day53',()=>{
  const progress=JSON.parse(readFileSync(new URL('../content/learning-progress.json',import.meta.url),'utf8'));
  const review=progress.lessons.find(x=>x.id==='week-16-saturday');
  assert.equal(scheduleForDate('2026-10-31').kind,'saturday-review');
  assert.equal(review?.scheduledFor,'2026-10-31');
  assert.equal(review?.kind,'review');
  assert.deepEqual(review?.scope,[49,50,51,52]);
  assert.equal(progress.lessons.filter(x=>x.id==='week-16-saturday').length,1);
  assert.equal(review?.status,'assigned');
  assert.ok(progress.lastPublishedDay>=52);
  assert.ok(progress.lastAssignedDay>=52);
  assert.ok(progress.lessons.some(x=>x.id==='week-16-sunday'));
});

test('Sunday 2026-11-01 publishes one Week16 integration without advancing Day53',()=>{
  const progress=JSON.parse(readFileSync(new URL('../content/learning-progress.json',import.meta.url),'utf8'));
  const review=progress.lessons.find(x=>x.id==='week-16-sunday');
  assert.equal(scheduleForDate('2026-11-01').kind,'sunday-review');
  assert.equal(review?.scheduledFor,'2026-11-01');
  assert.equal(review?.kind,'review');
  assert.deepEqual(review?.scope,[49,50,51,52]);
  assert.equal(progress.lessons.filter(x=>x.id==='week-16-sunday').length,1);
  assert.equal(review?.status,'assigned');
  assert.ok(progress.lastPublishedDay>=52);
  assert.ok(progress.lastAssignedDay>=52);
});

test('Monday 2026-11-02 assigns Day53 once after the Week16 weekend',()=>{
  const progress=JSON.parse(readFileSync(new URL('../content/learning-progress.json',import.meta.url),'utf8'));
  const day53=progress.lessons.find(x=>x.id==='day-53');
  assert.equal(scheduleForDate('2026-11-02').kind,'day');
  assert.equal(day53?.scheduledFor,'2026-11-02');
  assert.equal(day53?.firstPublishedOn,'2026-11-02');
  assert.equal(day53?.status,'assigned');
  assert.equal(day53?.assessment,'awaiting_answers');
  assert.equal(progress.lessons.filter(x=>x.id==='day-53').length,1);
  assert.ok(progress.lastPublishedDay>=53);
  assert.ok(progress.lastAssignedDay>=53);
});

test('authorized catch-up preserves planned weekday dates and the real first publication date',()=>{
  const progress=JSON.parse(readFileSync(new URL('../content/learning-progress.json',import.meta.url),'utf8'));
  for(const [id,date] of [['day-54','2026-11-03'],['day-55','2026-11-04'],['day-56','2026-11-05']]){
    const lesson=progress.lessons.find(x=>x.id===id);
    assert.equal(scheduleForDate(date).kind,'day');
    assert.equal(lesson?.scheduledFor,date);
    assert.equal(lesson?.originalScheduledFor,date);
    assert.equal(lesson?.firstPublishedOn,'2026-11-06');
    assert.equal(lesson?.assignmentRecordedOn,'2026-11-06');
    assert.equal(lesson?.assessment,'awaiting_answers');
    assert.equal(progress.lessons.filter(x=>x.id===id).length,1);
  }
  const catchUp=progress.catchUpHistory.find(x=>x.recordedOn==='2026-11-06');
  assert.deepEqual(catchUp?.unitIds,['day-54','day-55','day-56']);
});

test('Friday 2026-11-06 publishes one Week17 review without advancing Day57',()=>{
  const progress=JSON.parse(readFileSync(new URL('../content/learning-progress.json',import.meta.url),'utf8'));
  const review=progress.lessons.find(x=>x.id==='week-17-friday');
  assert.equal(scheduleForDate('2026-11-06').kind,'friday-review');
  assert.equal(review?.kind,'review');
  assert.deepEqual(review?.scope,[53,54,55,56]);
  assert.equal(review?.firstPublishedOn,'2026-11-06');
  assert.equal(progress.currentUnitId,'week-17-friday');
  assert.equal(progress.lastPublishedDay,56);
  assert.equal(progress.lastAssignedDay,56);
  assert.equal(progress.nextUnit.id,'day-57');
  assert.equal(progress.nextUnit.scheduledFor,'2026-11-09');
});
