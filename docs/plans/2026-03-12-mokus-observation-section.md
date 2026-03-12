# MoKus Observation Section Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Change the `Observation` section below `Abstract` into a `7/5` two-column block with text on the left and an image on the right.

**Architecture:** This change is limited to the standalone static page at `MoKus/index.html`. The updated section will keep the existing title row and use Bulma columns for the content row, with a wider text column and a slightly narrower image column, so the page emphasizes the explanatory copy without introducing new CSS.

**Tech Stack:** Static HTML, Bulma CSS

---

### Task 1: Verify the right-side image layout is not present yet

**Files:**
- Test: `MoKus/index.html`

**Step 1: Write the failing test**

Use a structural check for the missing image reference:

```bash
rg -n 'intro_case\.jpg|is-vcentered' MoKus/index.html
```

**Step 2: Run test to verify it fails**

Run:

```bash
rg -n 'intro_case\.jpg|is-vcentered' MoKus/index.html
```

Expected: no match for `intro_case.jpg` and no `is-vcentered` row inside the `Observation` block yet.

### Task 2: Adjust the section to a `7/5` two-column layout

**Files:**
- Modify: `MoKus/index.html`

**Step 1: Keep the title row and add a content row**

Preserve the `Observation` section location, keep the heading on its own row, and add a nested Bulma `columns is-vcentered` row beneath it.

Expected: the section title remains consistent with nearby sections.

**Step 2: Set the left text column to `is-7`**

Place the observation paragraph in a left-side content column using `class="column is-7"`.

Expected: the text area becomes wider and easier to scan.

**Step 3: Set the right image column to `is-5`**

Keep `static/images/intro_case.jpg` in the right column and use `class="column is-5"` for that side.

Expected: the section presents the requested `7/5` left-text right-image layout.

### Task 3: Verify final structure

**Files:**
- Test: `MoKus/index.html`

**Step 1: Run image/layout check**

Run:

```bash
rg -n 'Observation: Cross-modal Knowledge Transfer|intro_case\.jpg|column is-7|column is-5' MoKus/index.html
```

Expected: matches for the section heading, the image reference, and the `is-7` / `is-5` column classes.

**Step 2: Confirm placement and structure**

Run:

```bash
nl -ba MoKus/index.html | sed -n '193,230p'
```

Expected: the `Observation` section remains located after `Abstract` and before `Method`, with `is-7` text on the left and `is-5` image on the right.
