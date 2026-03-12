# MoKus Favicon Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the generic MoKus favicon with a custom icon built from an `M` plus knowledge-transfer motif.

**Architecture:** Create a new vector favicon under `MoKus/static/images/`, export a PNG touch icon from it, then point the project page head tags to the new favicon assets.

**Tech Stack:** Static HTML, SVG, PNG asset generation, local shell tools

---

### Task 1: Record the approved icon direction

**Files:**
- Create: `docs/plans/2026-03-12-mokus-favicon-design.md`
- Create: `docs/plans/2026-03-12-mokus-favicon.md`

**Step 1: Confirm the design doc captures the chosen direction**

Run: `sed -n '1,220p' docs/plans/2026-03-12-mokus-favicon-design.md`
Expected: the doc says the icon uses a bold `M` with nodes and a transfer track.

**Step 2: Confirm the implementation plan captures the execution steps**

Run: `sed -n '1,220p' docs/plans/2026-03-12-mokus-favicon.md`
Expected: the plan references the favicon asset files and `MoKus/index.html`.

### Task 2: Create the new favicon assets

**Files:**
- Create: `MoKus/static/images/favicon.svg`
- Create: `MoKus/static/images/apple-touch-icon.png`

**Step 1: Write a failing verification check**

Run: `test -f MoKus/static/images/favicon.svg && test -f MoKus/static/images/apple-touch-icon.png`
Expected: fail before asset creation.

**Step 2: Create the SVG source and export the PNG**

Implement:
- a light rounded-square background
- a navy geometric `M`
- a blue source node
- an orange-red transfer path and destination node

**Step 3: Run the verification again**

Run: `test -f MoKus/static/images/favicon.svg && test -f MoKus/static/images/apple-touch-icon.png`
Expected: pass after asset creation.

### Task 3: Update icon references in the page head

**Files:**
- Modify: `MoKus/index.html`

**Step 1: Write a failing verification check**

Run: `rg -n "favicon.svg|apple-touch-icon.png" MoKus/index.html`
Expected: no matches before the edit.

**Step 2: Update the head links**

Implement:
- favicon link to `static/images/favicon.svg`
- apple touch icon link to `static/images/apple-touch-icon.png`

**Step 3: Run the same verification again**

Run: `rg -n "favicon.svg|apple-touch-icon.png" MoKus/index.html`
Expected: both new references exist.

### Task 4: Run final verification

**Files:**
- Verify: `MoKus/static/images/favicon.svg`
- Verify: `MoKus/static/images/apple-touch-icon.png`
- Verify: `MoKus/index.html`

**Step 1: Check file presence and types**

Run: `file MoKus/static/images/favicon.svg MoKus/static/images/apple-touch-icon.png`
Expected: SVG text for the favicon source and PNG image data for the touch icon.

**Step 2: Check the page references**

Run: `rg -n "favicon.svg|apple-touch-icon.png" MoKus/index.html`
Expected: both references are present in the head.
