# MoKus Qualitative Comparison Image Size Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reduce the displayed size of images in the `Qualitative Comparison` carousel to about `60%` width.

**Architecture:** This change is limited to `MoKus/index.html` and `MoKus/static/css/index.css`. The existing image class stays on the comparison slides, and CSS uses a selector scoped to `#qualitative-comparison-carousel` so the width rule is explicit within the carousel layout.

**Tech Stack:** Static HTML, CSS, Bulma carousel markup

---

### Task 1: Verify the size class is not present yet

**Files:**
- Test: `MoKus/index.html`
- Test: `MoKus/static/css/index.css`

**Step 1: Write the failing test**

Use a structural check for the scoped selector and width rule:

```bash
rg -n '#qualitative-comparison-carousel \\.qualitative-comparison-image|max-width: 60%' MoKus/index.html MoKus/static/css/index.css
```

**Step 2: Run test to verify it fails**

Run:

```bash
rg -n '#qualitative-comparison-carousel \\.qualitative-comparison-image|max-width: 60%' MoKus/index.html MoKus/static/css/index.css
```

Expected: no matches for the scoped selector yet.

### Task 2: Add the section-scoped image size styling

**Files:**
- Modify: `MoKus/index.html`
- Modify: `MoKus/static/css/index.css`

**Step 1: Keep the image class on both comparison slides**

Keep the dedicated class on the two images in `Qualitative Comparison`.

Expected: only the comparison images opt into the size change.

**Step 2: Define the scoped CSS rule**

Add a CSS rule scoped to `#qualitative-comparison-carousel` that centers the image and sets it to about `60%` width while preserving responsiveness.

Expected: the comparison images render smaller than before.

### Task 3: Verify final structure

**Files:**
- Test: `MoKus/index.html`
- Test: `MoKus/static/css/index.css`

**Step 1: Confirm the class and width rule**

Run:

```bash
rg -n '#qualitative-comparison-carousel \\.qualitative-comparison-image|max-width: 60%' MoKus/index.html MoKus/static/css/index.css
```

Expected: the image class remains in the HTML and the scoped selector appears in the CSS.

**Step 2: Inspect the affected block**

Run:

```bash
nl -ba MoKus/index.html | sed -n '292,304p'
nl -ba MoKus/static/css/index.css | sed -n '123,140p'
```

Expected: the comparison images carry the new class and the CSS rule is present.
