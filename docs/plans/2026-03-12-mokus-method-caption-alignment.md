# MoKus Method Caption Alignment Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Change the `Method` figure caption from centered text to left-aligned text.

**Architecture:** This change is limited to one existing `h2` element in `MoKus/index.html`. It swaps one Bulma utility class for another, with no new CSS and no changes to surrounding structure.

**Tech Stack:** Static HTML, Bulma CSS

---

### Task 1: Verify the caption is not already left-aligned

**Files:**
- Test: `MoKus/index.html`

**Step 1: Write the failing test**

Use a structural check on the `Method` caption classes:

```bash
rg -n '<h2 class="subtitle has-text-left">|<h2 class="subtitle has-text-centered">' MoKus/index.html
```

**Step 2: Run test to verify it fails**

Run:

```bash
rg -n '<h2 class="subtitle has-text-left">|<h2 class="subtitle has-text-centered">' MoKus/index.html
```

Expected: the `Method` caption appears with `has-text-centered`, not `has-text-left`.

### Task 2: Change the caption alignment

**Files:**
- Modify: `MoKus/index.html`

**Step 1: Replace the alignment class**

Change the `Method` caption element from `has-text-centered` to `has-text-left`.

Expected: only the `Method` caption alignment changes.

### Task 3: Verify final structure

**Files:**
- Test: `MoKus/index.html`

**Step 1: Confirm the left-aligned class**

Run:

```bash
nl -ba MoKus/index.html | sed -n '256,266p'
```

Expected: the `Method` caption line shows `class="subtitle has-text-left"`.
