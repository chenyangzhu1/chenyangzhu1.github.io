# MoKus Project Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a self-contained `MoKus` project page at `/MoKus/` in this repository by adapting the existing `InstantSwap` standalone template and replacing paper-specific content with explicit placeholders.

**Architecture:** The personal homepage remains a Jekyll site rooted at `/`. The `MoKus` page is added as an independent static subdirectory with its own `index.html` and `static/` assets, so the project page can closely mirror the `InstantSwap` template without refactoring it into Jekyll layouts.

**Tech Stack:** GitHub Pages, Jekyll, static HTML, Bulma CSS, vanilla JavaScript

---

### Task 1: Create the `MoKus` subsite scaffold

**Files:**
- Create: `MoKus/`
- Create: `MoKus/.nojekyll`
- Create: `MoKus/index.html`
- Create: `MoKus/static/`

**Step 1: Create the target directory**

Run:

```bash
mkdir -p MoKus
```

Expected: the `MoKus/` directory exists at the repository root.

**Step 2: Copy the template entry file**

Run:

```bash
cp /Users/zcaoyao/Documents/github-repo/InstantSwap.github.io/index.html MoKus/index.html
```

Expected: `MoKus/index.html` exists and matches the source template before edits.

**Step 3: Copy the template assets**

Run:

```bash
cp -R /Users/zcaoyao/Documents/github-repo/InstantSwap.github.io/static MoKus/static
```

Expected: `MoKus/static/` contains `css`, `js`, `images`, `videos`, and `pdfs`.

**Step 4: Add the Jekyll safety marker**

Run:

```bash
touch MoKus/.nojekyll
```

Expected: `MoKus/.nojekyll` exists.

**Step 5: Verify the scaffold**

Run:

```bash
find MoKus -maxdepth 2 -type f | sort
```

Expected: the output includes `MoKus/index.html`, `MoKus/.nojekyll`, and files under `MoKus/static/`.

**Step 6: Commit the scaffold**

Run:

```bash
git add MoKus
git commit -m "feat: scaffold MoKus project page"
```

Expected: a commit is created containing only the new `MoKus` subsite files.

### Task 2: Rebrand page metadata and hero content

**Files:**
- Modify: `MoKus/index.html`

**Step 1: Replace HTML title and social metadata**

Edit `MoKus/index.html` to replace `InstantSwap` title strings and placeholder meta tags with `MoKus` placeholder values.

Expected: the page title and metadata no longer mention `InstantSwap`.

**Step 2: Replace hero title and author block**

Edit `MoKus/index.html` to update:

- project title
- author names
- affiliation line
- venue line

Use explicit placeholder text where final content is not ready.

Expected: the hero section reads as a `MoKus` page, not an `InstantSwap` page.

**Step 3: Replace CTA links with `MoKus` placeholders**

Edit the hero button block so `Paper`, `Code`, `arXiv`, `Project`, and `BibTeX` use placeholder links such as `#`.

Expected: all visible call-to-action buttons are present and clickable.

**Step 4: Search for leftover hero branding**

Run:

```bash
rg -n "InstantSwap|2412.01197|chenyangzhu1/InstantSwap" MoKus/index.html
```

Expected: no matches related to the original template's paper branding remain in the head or hero section.

**Step 5: Commit the hero rebrand**

Run:

```bash
git add MoKus/index.html
git commit -m "feat: add MoKus hero and metadata placeholders"
```

Expected: a commit is created for the top-of-page rebrand only.

### Task 3: Convert main sections to `MoKus` placeholder content

**Files:**
- Modify: `MoKus/index.html`

**Step 1: Keep the approved section set**

Edit `MoKus/index.html` so the page contains exactly these paper-content sections:

1. `Teaser`
2. `Abstract`
3. `Method`
4. `Results`
5. `Gallery`
6. `BibTeX`

Expected: the content hierarchy matches the approved design.

**Step 2: Rename `Comparison` to `Results`**

Edit the original `Comparison` heading and captions accordingly.

Expected: the page no longer contains the label `Comparison`.

**Step 3: Replace section body text with readable placeholders**

Edit captions, paragraph text, and BibTeX text so they clearly indicate placeholder content.

Expected: a visitor can tell which content is temporary without seeing template paper text.

**Step 4: Search for leftover section text**

Run:

```bash
rg -n "Comparison|Overall pipeline of InstantSwap|More qualitative results|@article\\{zhu2024instantswap" MoKus/index.html
```

Expected: no original section copy remains.

**Step 5: Commit the section rewrite**

Run:

```bash
git add MoKus/index.html
git commit -m "feat: replace MoKus content sections with placeholders"
```

Expected: a commit is created for the section-level placeholder conversion.

### Task 4: Replace template asset references with stable placeholder filenames

**Files:**
- Modify: `MoKus/index.html`
- Create: `MoKus/static/images/teaser-placeholder.jpg`
- Create: `MoKus/static/images/method-placeholder.jpg`
- Create: `MoKus/static/images/results-placeholder.jpg`
- Create: `MoKus/static/images/gallery-1-placeholder.jpg`
- Create: `MoKus/static/images/gallery-2-placeholder.jpg`
- Create: `MoKus/static/images/gallery-3-placeholder.jpg`
- Create: `MoKus/static/images/gallery-4-placeholder.jpg`
- Create: `MoKus/static/images/gallery-5-placeholder.jpg`
- Create: `MoKus/static/images/gallery-6-placeholder.jpg`

**Step 1: Pick placeholder source assets**

Decide whether to duplicate existing template images or create simple blank/label placeholder images.

Recommendation: duplicate the existing template images first so the page has no broken media while waiting for final assets.

Expected: there is a concrete source image for each placeholder target.

**Step 2: Create the placeholder asset files**

Run commands such as:

```bash
cp MoKus/static/images/title_case-small.jpg MoKus/static/images/teaser-placeholder.jpg
cp MoKus/static/images/Framework.jpg MoKus/static/images/method-placeholder.jpg
cp MoKus/static/images/quality_comparison-small.jpg MoKus/static/images/results-placeholder.jpg
```

Also create the `gallery-1-placeholder.jpg` through `gallery-6-placeholder.jpg` files.

Expected: every placeholder filename referenced by `index.html` exists on disk.

**Step 3: Update image references in `index.html`**

Edit `MoKus/index.html` so all teaser, method, results, and gallery image tags point to the new placeholder filenames.

Expected: content media references are decoupled from `InstantSwap`-specific filenames.

**Step 4: Verify placeholder references**

Run:

```bash
rg -n "title_case-small|Framework.jpg|quality_comparison-small|gallery_.*small" MoKus/index.html
```

Expected: no old content-specific image filenames remain.

**Step 5: Commit the placeholder assets**

Run:

```bash
git add MoKus/index.html MoKus/static/images
git commit -m "feat: add MoKus placeholder media assets"
```

Expected: a commit is created for media placeholder setup.

### Task 5: Adjust navigation and project links

**Files:**
- Modify: `MoKus/index.html`

**Step 1: Keep the homepage return path**

Ensure the navbar includes a clear path back to `https://chenyangzhu1.github.io/`.

Expected: the project page does not trap users in the subsite.

**Step 2: Simplify `Other works` if needed**

Remove any project links that should not appear, or keep only the links you want exposed.

Expected: the dropdown contains only intentional cross-links.

**Step 3: Keep footer attribution**

Preserve the template attribution footer unless there is a reason to rewrite it.

Expected: footer remains present and legally safe.

**Step 4: Verify link targets**

Run:

```bash
rg -n "href=" MoKus/index.html
```

Expected: visible navigation and action links point either to real destinations or to obvious placeholders.

**Step 5: Commit the navigation cleanup**

Run:

```bash
git add MoKus/index.html
git commit -m "feat: update MoKus navigation and footer links"
```

Expected: a commit is created for top-level navigation cleanup.

### Task 6: Build and manually verify the page locally

**Files:**
- Verify: `MoKus/index.html`
- Verify: `MoKus/static/**`

**Step 1: Run a local Jekyll build**

Run:

```bash
bundle exec jekyll build
```

Expected: the build succeeds and generates `_site/MoKus/index.html`.

**Step 2: Confirm the generated output exists**

Run:

```bash
find _site/MoKus -maxdepth 2 -type f | sort | head -n 20
```

Expected: generated HTML and copied assets are present under `_site/MoKus/`.

**Step 3: Start the local preview server**

Run:

```bash
bundle exec jekyll liveserve
```

Expected: a local server starts successfully.

**Step 4: Manually inspect `/MoKus/`**

Open `http://127.0.0.1:4000/MoKus/` and check:

- desktop layout
- mobile layout
- navbar behavior
- button rendering
- gallery carousel
- no broken images

Expected: the page looks like the approved `InstantSwap`-style project page with `MoKus` placeholders.

**Step 5: Commit any final polish**

Run:

```bash
git add MoKus
git commit -m "feat: finalize MoKus project page placeholders"
```

Expected: the working tree contains the finished placeholder project page.
