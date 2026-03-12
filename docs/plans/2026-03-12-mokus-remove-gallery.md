# MoKus Remove Gallery Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove the `Gallery` section and delete its six placeholder image files from the `MoKus` page.

**Architecture:** This change is limited to `MoKus/index.html` and the unused files under `MoKus/static/images/`. Shared carousel CSS and JS remain untouched because other sections still use them.

**Tech Stack:** Static HTML, filesystem cleanup

---

### Task 1: Verify the section and files currently exist

**Files:**
- Test: `MoKus/index.html`
- Test: `MoKus/static/images/gallery-1-placeholder.jpg`
- Test: `MoKus/static/images/gallery-2-placeholder.jpg`
- Test: `MoKus/static/images/gallery-3-placeholder.jpg`
- Test: `MoKus/static/images/gallery-4-placeholder.jpg`
- Test: `MoKus/static/images/gallery-5-placeholder.jpg`
- Test: `MoKus/static/images/gallery-6-placeholder.jpg`

**Step 1: Write the failing tests**

Use structural checks:

```bash
rg -n 'Gallery|gallery-[1-6]-placeholder\.jpg' MoKus/index.html
ls -1 MoKus/static/images/gallery-*-placeholder.jpg
```

**Step 2: Run tests to verify they fail correctly**

Run:

```bash
rg -n 'Gallery|gallery-[1-6]-placeholder\.jpg' MoKus/index.html
ls -1 MoKus/static/images/gallery-*-placeholder.jpg
```

Expected:

- matches in `MoKus/index.html`
- six image files listed on disk

### Task 2: Remove the section and files

**Files:**
- Modify: `MoKus/index.html`
- Delete: `MoKus/static/images/gallery-1-placeholder.jpg`
- Delete: `MoKus/static/images/gallery-2-placeholder.jpg`
- Delete: `MoKus/static/images/gallery-3-placeholder.jpg`
- Delete: `MoKus/static/images/gallery-4-placeholder.jpg`
- Delete: `MoKus/static/images/gallery-5-placeholder.jpg`
- Delete: `MoKus/static/images/gallery-6-placeholder.jpg`

**Step 1: Delete the `Gallery` section**

Remove the entire block from the `Gallery` comment through its closing `section` tag.

Expected: `BibTeX` follows directly after `Qualitative Comparison`.

**Step 2: Delete the gallery images**

Remove the six placeholder image files from `MoKus/static/images/`.

Expected: no gallery placeholder files remain on disk.

### Task 3: Verify final structure

**Files:**
- Test: `MoKus/index.html`
- Test: `MoKus/static/images/`

**Step 1: Confirm HTML references are gone**

Run:

```bash
rg -n 'Gallery|gallery-[1-6]-placeholder\.jpg' MoKus/index.html
```

Expected: no matches.

**Step 2: Confirm files are gone**

Run:

```bash
ls -1 MoKus/static/images/gallery-*-placeholder.jpg
```

Expected: no files listed and the command exits non-zero.
