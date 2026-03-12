# MoKus Teaser Caption Alignment Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Change the `Teaser` figure caption from centered text to left-aligned text.

**Architecture:** This change is limited to one existing `h2` element in `MoKus/index.html`. It swaps a Bulma utility class without changing surrounding markup or introducing CSS.

**Tech Stack:** Static HTML, Bulma CSS

---

### Task 1: Verify the caption is not already left-aligned

**Files:**
- Test: `MoKus/index.html`

**Step 1: Write the failing test**

Use a structural check on the current subtitle alignment classes:

```bash
rg -n '<h2 class="subtitle has-text-left">|<h2 class="subtitle has-text-centered">' MoKus/index.html
```

**Step 2: Run test to verify it fails**

Run:

```bash
rg -n '<h2 class="subtitle has-text-left">|<h2 class="subtitle has-text-centered">' MoKus/index.html
```

Expected: the `Teaser` caption appears with `has-text-centered`.

### Task 2: Change the caption alignment

**Files:**
- Modify: `MoKus/index.html`

**Step 1: Replace the alignment class**

Change the `Teaser` caption element from `has-text-centered` to `has-text-left`.

Expected: only the `Teaser` caption alignment changes.

### Task 3: Verify final structure

**Files:**
- Test: `MoKus/index.html`

**Step 1: Confirm the left-aligned class**

Run:

```bash
nl -ba MoKus/index.html | sed -n '156,164p'
```

Expected: the `Teaser` caption line shows `class="subtitle has-text-left"`.
