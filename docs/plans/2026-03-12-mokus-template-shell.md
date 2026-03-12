# MoKus Template Shell Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Restyle `MoKus/` with the Academic Project Page Template shell while preserving the current MoKus paper content and section ordering.

**Architecture:** Keep `MoKus` as a self-contained static subsite. Update `index.html` to adopt the new template head and shell elements, then replace the local page stylesheet and script with template-inspired versions that only target sections present on the current MoKus page.

**Tech Stack:** Static HTML, Bulma CSS, local CSS/JS, Font Awesome, Bulma Carousel, Bulma Slider

---

### Task 1: Lock the migration boundaries in docs

**Files:**
- Create: `docs/plans/2026-03-12-mokus-template-shell-design.md`
- Create: `docs/plans/2026-03-12-mokus-template-shell.md`

**Step 1: Confirm the design doc captures the approved scope**

Run: `sed -n '1,220p' docs/plans/2026-03-12-mokus-template-shell-design.md`
Expected: the doc says to preserve current MoKus content while only adopting the external template shell.

**Step 2: Confirm the implementation plan captures the execution steps**

Run: `sed -n '1,260p' docs/plans/2026-03-12-mokus-template-shell.md`
Expected: the plan references `MoKus/index.html`, `MoKus/static/css/index.css`, and `MoKus/static/js/index.js`.

### Task 2: Update the page shell in `MoKus/index.html`

**Files:**
- Modify: `MoKus/index.html`

**Step 1: Write a failing verification check for missing template-shell elements**

Run: `rg -n "scroll-to-top|more-works-container|copy-bibtex-btn|application/ld\\+json" MoKus/index.html`
Expected: no matches or incomplete coverage before the edit.

**Step 2: Replace the head and top-level body shell**

Implement:
- modern meta tags
- Open Graph and Twitter metadata
- citation meta tags
- JSON-LD structured data
- scroll-to-top button
- floating `More Works` menu using the current `Other Works` links
- copy button in the existing BibTeX section

**Step 3: Run the same verification to confirm the new shell exists**

Run: `rg -n "scroll-to-top|more-works-container|copy-bibtex-btn|application/ld\\+json" MoKus/index.html`
Expected: all four patterns exist.

### Task 3: Replace page styling with the template look while preserving MoKus-specific rules

**Files:**
- Modify: `MoKus/static/css/index.css`

**Step 1: Write a failing verification check for template-style selectors**

Run: `rg -n -- "--primary-color|scroll-to-top|more-works-dropdown|copy-bibtex-btn" MoKus/static/css/index.css`
Expected: no matches before the edit.

**Step 2: Replace the stylesheet**

Implement:
- template-style CSS variables, spacing, button styling, and section presentation
- dropdown and scroll button styling
- BibTeX header/button styling
- mobile responsive rules
- preserved `#qualitative-comparison-carousel .qualitative-comparison-image` sizing rule

**Step 3: Run the same verification to confirm the new styles landed**

Run: `rg -n -- "--primary-color|scroll-to-top|more-works-dropdown|copy-bibtex-btn" MoKus/static/css/index.css`
Expected: all selectors exist.

### Task 4: Replace page JavaScript with the needed template interactions

**Files:**
- Modify: `MoKus/static/js/index.js`

**Step 1: Write a failing verification check for new interactive functions**

Run: `rg -n "toggleMoreWorks|copyBibTeX|scrollToTop|setupVideoCarouselAutoplay" MoKus/static/js/index.js`
Expected: only carousel bootstrap exists before the edit, not the new helper functions.

**Step 2: Replace the script**

Implement:
- `toggleMoreWorks`
- escape and outside-click closing logic
- `copyBibTeX`
- `scrollToTop`
- scroll-based button visibility
- carousel bootstrapping with guards for optional libraries

**Step 3: Run the same verification to confirm the script features exist**

Run: `rg -n "toggleMoreWorks|copyBibTeX|scrollToTop|setupVideoCarouselAutoplay" MoKus/static/js/index.js`
Expected: all functions exist.

### Task 5: Run final verification

**Files:**
- Verify: `MoKus/index.html`
- Verify: `MoKus/static/css/index.css`
- Verify: `MoKus/static/js/index.js`

**Step 1: Check that no external template placeholder strings remain**

Run: `rg -n "PAPER_TITLE|FIRST_AUTHOR|YOUR_DOMAIN|YOUR REPO HERE|Lorem ipsum|Paper Title 1" MoKus/index.html MoKus/static/css/index.css MoKus/static/js/index.js`
Expected: no matches.

**Step 2: Check that current MoKus content blocks still exist**

Run: `rg -n "Observation: Cross-modal Knowledge Transfer|Qualitative Results|Qualitative Comparison|Knowledge-Aware Applications" MoKus/index.html`
Expected: all section titles still exist.

**Step 3: Check local asset references**

Run: `rg -n "static/(css|js|images|videos|pdfs)/" MoKus/index.html`
Expected: all asset references remain local to `MoKus/static/`.
