# MoKus Qualitative Results Carousel Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the single `Qualitative Results` image with an autoplaying three-image carousel.

**Architecture:** This change is limited to `MoKus/index.html`. The new markup will reuse the existing `bulma-carousel` setup by adding another `.carousel` element, so no JavaScript changes are required.

**Tech Stack:** Static HTML, Bulma CSS, bulma-carousel

---

### Task 1: Verify the carousel is not already present

**Files:**
- Test: `MoKus/index.html`

**Step 1: Write the failing test**

Use a structural check for the requested images and new carousel id:

```bash
rg -n 'qualitative-results-carousel|Qualitative_Comparison_shu|Qualitative_Comparison_rec_shu' MoKus/index.html
```

**Step 2: Run test to verify it fails**

Run:

```bash
rg -n 'qualitative-results-carousel|Qualitative_Comparison_shu|Qualitative_Comparison_rec_shu' MoKus/index.html
```

Expected: no matches, because the section still contains only one static image.

### Task 2: Add the carousel markup

**Files:**
- Modify: `MoKus/index.html`

**Step 1: Replace the single image with a new carousel container**

Add a new element such as `id="qualitative-results-carousel"` with classes `carousel results-carousel`.

Expected: the section becomes compatible with the existing global carousel initialization.

**Step 2: Add three carousel items**

Add one `.item` element per requested image:

- `static/images/Qualitative_ours.jpg`
- `static/images/Qualitative_Comparison_shu.jpg`
- `static/images/Qualitative_Comparison_rec_shu.jpg`

Expected: the section contains the full set of requested slides.

**Step 3: Keep a shared caption below the carousel**

Retain one section-level caption after the carousel instead of adding per-slide captions.

Expected: the markup stays compact and readable.

### Task 3: Verify final structure

**Files:**
- Test: `MoKus/index.html`

**Step 1: Confirm the carousel references**

Run:

```bash
rg -n 'qualitative-results-carousel|Qualitative_ours|Qualitative_Comparison_shu|Qualitative_Comparison_rec_shu' MoKus/index.html
```

Expected: matches for the new carousel id and all three image filenames.

**Step 2: Inspect the final section block**

Run:

```bash
nl -ba MoKus/index.html | sed -n '270,296p'
```

Expected: the `Qualitative Results` section contains a `carousel results-carousel` block followed by the shared caption.
