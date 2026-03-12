# MoKus Knowledge-Aware Applications Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a `Knowledge-Aware Applications` section with `application.jpg` below `Qualitative Comparison`.

**Architecture:** This change is limited to `MoKus/index.html`. The new section will reuse the same static HTML structure as the other image-based content sections and will not require CSS or JavaScript changes.

**Tech Stack:** Static HTML

---

### Task 1: Verify the section does not exist yet

**Files:**
- Test: `MoKus/index.html`

**Step 1: Write the failing test**

Use a structural check for the new heading and image:

```bash
rg -n 'Knowledge-Aware Applications|application\.jpg' MoKus/index.html
```

**Step 2: Run test to verify it fails**

Run:

```bash
rg -n 'Knowledge-Aware Applications|application\.jpg' MoKus/index.html
```

Expected: no matches.

### Task 2: Add the new section

**Files:**
- Modify: `MoKus/index.html`

**Step 1: Insert the section below `Qualitative Comparison`**

Add a new section after `Qualitative Comparison` and before `BibTeX`.

Expected: the page gains the requested content block in the expected order.

**Step 2: Add the heading and image**

Use the heading `Knowledge-Aware Applications` and reference `static/images/application.jpg`.

Expected: the section is complete without extra styling work.

### Task 3: Verify final structure

**Files:**
- Test: `MoKus/index.html`

**Step 1: Confirm the new heading and image reference**

Run:

```bash
rg -n 'Knowledge-Aware Applications|application\.jpg' MoKus/index.html
```

Expected: matches for both the new title and image.

**Step 2: Confirm placement**

Run:

```bash
nl -ba MoKus/index.html | sed -n '300,330p'
```

Expected: the new section appears between `Qualitative Comparison` and `BibTeX`.
