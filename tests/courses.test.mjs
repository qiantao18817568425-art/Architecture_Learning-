import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {buildCourses, articles} from '../scripts/build-courses.mjs';
const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('preserves every legacy article including Day35/36 and appends each new lesson once', () => {
  const progress = JSON.parse(read('content/learning-progress.json'));
  const legacy = articles(read('content/course-archive.html'));
  const current = articles(read('docs/index.html'));
  assert.equal(legacy.length, 52);
  assert.deepEqual(current.slice(0, legacy.length), legacy);
  assert.equal(current.length, legacy.length + progress.lessons.length);
  assert.ok(legacy.at(-2).includes('Day 35'));
  assert.ok(legacy.at(-1).includes('Day 36'));
  const html = read('docs/index.html');
  for (let n = 1; n <= progress.lastPublishedDay; n++) assert.equal((html.match(new RegExp(`id="day-${n}"`, 'g')) || []).length, 1);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length, 'page ids must be unique');
});

test('independent lesson includes diagrams, sources, exercises and honest assessment state', () => {
  const html = read('docs/lessons/day-37.html');
  assert.equal(articles(html).length, 1);
  assert.equal((html.match(/class="mermaid"/g) || []).length, 2);
  for (const text of ['ANC', 'AEC', 'RX', 'TX', 'epoch', '六道综合题', '待作答', '20:00—21:00', 'source.android.com', 'bluetooth.com', 'ti.com']) assert.ok(html.includes(text), text);
  assert.equal(JSON.parse(read('content/learning-progress.json')).masteryEvidence.length, 0);
  for (const href of [...html.matchAll(/href="([^"]+)"/g)].map(m => m[1])) assert.ok(/^https:\/\//.test(href) || ['../index.html#day-37', '../architecture/index.html'].includes(href), href);
});

test('repeat builds are deterministic and keep latest courses and counts', () => {
  const paths = ['docs/index.html', 'docs/lessons/day-37.html'];
  const before = paths.map(read);
  const stats = buildCourses();
  assert.deepEqual(paths.map(read), before);
  const progress = JSON.parse(read('content/learning-progress.json'));
  assert.equal(stats.maxDay, progress.lastPublishedDay);
  assert.equal(stats.count, progress.legacyArchive.articleCount + progress.lessons.length);
});
