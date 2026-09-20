import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const root = new URL("..", import.meta.url);
const output = new URL("../docs/index.html", import.meta.url);

test("generates a self-contained GitHub Pages archive with expandable full content", () => {
  assert.equal(existsSync(output), true);

  const html = readFileSync(output, "utf8");
  assert.match(html, /Day 17 - OS 内通信/);
  assert.match(html, /Week 4 - 周末总结反思与综合题/);
  assert.match(html, /<details class="lesson"/);
  assert.match(html, /cdn\.jsdelivr\.net\/npm\/mermaid@10/);
  assert.match(html, /https:\/\/www\.bilibili\.com/);
});
