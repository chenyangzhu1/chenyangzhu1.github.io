# MoKus Qualitative Sections Restructure Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Keep `Qualitative Results` as a single-image section, add a new `Qualitative Comparison` autoplay carousel below it, and left-align all explanatory subtitles.

**Architecture:** This change is limited to `MoKus/index.html`. The comparison section will reuse the existing `bulma-carousel` initialization by adding a second `.carousel` block, and remaining caption alignment changes are handled by swapping Bulma utility classes.

**Tech Stack:** Static HTML, Bulma CSS, bulma-carousel

---

### Task 1: Verify the new comparison section is missing and some subtitles are still centered

**Files:**
- Test: `MoKus/index.html`

**Step 1: Write the failing tests**

Use structural checks:

```bash
rg -n 'Qualitative Comparison|qualitative-comparison-carousel' MoKus/index.html
rg -n '<h2 class="subtitle has-text-centered">' MoKus/index.html
```

**Step 2: Run tests to verify they fail correctly**

Run:

```bash
rg -n 'Qualitative Comparison|qualitative-comparison-carousel' MoKus/index.html
rg -n '<h2 class="subtitle has-text-centered">' MoKus/index.html
```

Expected:

- no match for the new section heading or carousel id
- one or more matches for centered explanatory subtitles

### Task 2: Rebuild the qualitative sections

**Files:**
- Modify: `MoKus/index.html`

**Step 1: Restore `Qualitative Results` to a single image**

Remove the current three-image carousel and keep only `static/images/Qualitative_ours.jpg` in that section.

Expected: `Qualitative Results` becomes a single-image block again.

**Step 2: Add a new `Qualitative Comparison` section**

Insert a new section below `Qualitative Results` and above `Gallery`.

Expected: the page has a distinct comparison block.

**Step 3: Add the comparison carousel**

Add a new `div` with `id="qualitative-comparison-carousel"` and classes `carousel results-carousel`, containing:

- `static/images/Qualitative_Comparison_shu.jpg`
- `static/images/Qualitative_Comparison_rec_shu.jpg`

Expected: the new section is compatible with the existing autoplay configuration.

**Step 4: Add per-slide captions**

Place one left-aligned caption in each carousel item using short default text.

Expected: each comparison slide shows its own explanation.

**Step 5: Left-align remaining explanatory subtitles**

Change remaining explanatory subtitle blocks from `has-text-centered` to `has-text-left`.

Expected: no explanatory `subtitle` remains centered.

### Task 3: Verify final structure

**Files:**
- Test: `MoKus/index.html`

**Step 1: Confirm section and image references**

Run:

```bash
rg -n 'Qualitative Results|Qualitative Comparison|qualitative-comparison-carousel|Qualitative_ours|Qualitative_Comparison_shu|Qualitative_Comparison_rec_shu' MoKus/index.html
```

Expected: matches for the two section headings, the new carousel id, and all three image filenames.

**Step 2: Confirm left-aligned explanatory subtitles**

Run:

```bash
rg -n '<h2 class="subtitle has-text-centered">' MoKus/index.html
```

Expected: no matches.

**Step 3: Inspect the rebuilt block**

Run:

```bash
nl -ba MoKus/index.html | sed -n '270,340p'
```

Expected: `Qualitative Results` is single-image, `Qualitative Comparison` is below it, and captions are left-aligned.
