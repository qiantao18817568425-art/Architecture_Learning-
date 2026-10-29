# Day 52 Interface Contract Implementation Plan

> **For agentic workers:** Execute inline with strict red-green verification; do not delegate because this heartbeat already fixes the scope and publication sequence.

**Goal:** Publish Day 52, update learning state, integrate stable interface/recovery knowledge into the architecture library and knowledge galaxy, and verify both GitHub Pages deployments.

**Architecture:** Extend the existing Markdown → generated course/library pipeline and the explicit galaxy mapping. Keep course exercises and constructed-case conclusions in the lesson archive; only stable interface, generation, state-authority and recovery mechanisms enter reusable knowledge.

**Tech Stack:** Node.js ESM scripts, JSON/MJS content sources, Node test runner, static GitHub Pages.

## Global Constraints

- Asia/Shanghai date is 2026-10-29, Thursday; publish exactly one normal Day.
- Answer scan precedes content creation and remains authoritative for assessment state.
- No unverified vehicle parameter becomes a platform fact.
- Preserve all prior lessons and generated destinations.

## Review Focus

- Duplicate Day 52 or wrong weekday assignment must fail calendar tests.
- Missing architecture reverse links or search terms must fail library tests.
- Galaxy mapping must target concrete L3/L4 chains in the expected order.
- Old-generation completion after reset must be rejected by the documented contract.
- Rebuilds must be deterministic and must not remove legacy content.

### Task 1: Freeze Day 52 behavior with failing tests

**Files:**
- Modify: `tests/learning-calendar.test.mjs`
- Modify: `tests/architecture.test.mjs`
- Modify: `../Cockpit_Knowledge_Galaxy/tests/reference-mapping.test.mjs`

- [ ] Add assertions for the 2026-10-29 Day 52 assignment and Friday review next unit.
- [ ] Add architecture assertions for stable interface/recovery knowledge and latest-home entry.
- [ ] Add galaxy assertions for Day 52 concrete chain mappings and reverse day references.
- [ ] Run the targeted tests and confirm failure because Day 52 is absent.

### Task 2: Publish the course and learning records

**Files:**
- Create: `content/lessons/day-52.md`
- Modify: `content/learning-progress.json`
- Modify: `content/course-units.json`
- Modify: `content/submissions.json`
- Modify: `LEARNING_CONTROL.md`

- [ ] Write the 60-minute lesson with official sources, four flows, state/recovery contracts, fault analysis, evidence and exercises.
- [ ] Advance published/assigned/current state to Day 52 and schedule the Friday review without advancing Day.
- [ ] Keep Day 34–52 assessment pending because no learner answer exists.

### Task 3: Integrate reusable knowledge and the galaxy

**Files:**
- Modify: `content/architecture.json`
- Modify: `content/course-knowledge.mjs`
- Modify: `scripts/build-library.mjs`
- Modify: `../Cockpit_Knowledge_Galaxy/content/learning-mapping.json`

- [ ] Map Day 52 to the applicable architecture chapters.
- [ ] Add stable module-boundary, interface-state and recovery-contract knowledge with Mermaid.
- [ ] Map Day 52 to concrete galaxy chains without treating lesson publication as mastery.

### Task 4: Build, verify and publish

**Files:**
- Generated: `docs/**`
- Generated: `../Cockpit_Knowledge_Galaxy/docs/graph.json`

- [ ] Build both sites and run targeted tests until green.
- [ ] Run both full suites and deterministic rebuild checks.
- [ ] Recheck remote heads, atomically publish only task files, and verify remote files plus Pages.
