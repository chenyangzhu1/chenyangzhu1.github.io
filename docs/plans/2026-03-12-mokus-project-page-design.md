# MoKus Project Page Design

**Date:** 2026-03-12

## Goal

Create a project homepage for the paper `MoKus` at `https://chenyangzhu1.github.io/MoKus/` inside the existing personal-site repository, while keeping the current homepage at `/` unchanged.

## Context

- The current repository is a Jekyll-based GitHub Pages site.
- The root homepage is driven by [`_pages/about.md`](/Users/zcaoyao/Documents/github-repo/chenyangzhu1.github.io/_pages/about.md).
- The desired `MoKus` page should reuse the structure of the existing standalone project site in `/Users/zcaoyao/Documents/github-repo/InstantSwap.github.io`.
- Real paper assets are not ready yet. The first version should use clear placeholders so content can be filled in manually later.

## Selected Approach

Use `MoKus/` as a self-contained static subsite inside the existing repository.

This means:

- Keep the Jekyll homepage and its layouts unchanged.
- Add a new directory `MoKus/` at the repository root.
- Copy the `InstantSwap` template structure into `MoKus/`.
- Serve the page at `/MoKus/` through GitHub Pages as a static subdirectory.

## Why This Approach

This approach was selected over embedding the page into Jekyll templates or creating a separate repository because it has the lowest migration cost and matches the desired URL exactly.

Benefits:

- Minimal interference with the existing personal homepage.
- Maximum reuse of the `InstantSwap` HTML, CSS, JS, and asset organization.
- Easy future editing: content changes stay localized to `MoKus/index.html` and `MoKus/static/`.
- No need to refactor the template into Jekyll includes or layouts.

## Information Architecture

The `MoKus` page should keep the same high-level structure as `InstantSwap`, with small adjustments for placeholder-first delivery.

### Navigation

- Fixed top navbar.
- Link back to the main homepage at `https://chenyangzhu1.github.io/`.
- Optional `Other works` dropdown can remain if useful for project cross-linking.

### Hero Section

- Paper title.
- Author list.
- Affiliation line.
- Venue line.
- Action buttons:
  - `Paper`
  - `Code`
  - `arXiv`
  - `Project`
  - `BibTeX`

All buttons can initially point to placeholder URLs.

### Main Content Sections

Keep these sections:

1. `Teaser`
2. `Abstract`
3. `Method`
4. `Results`
5. `Gallery`
6. `BibTeX`

Design note:

- The original `Comparison` section from `InstantSwap` is renamed to `Results` so the section remains valid even before final figures are decided.

## Directory Layout

The new subsite should use the following structure:

```text
MoKus/
  .nojekyll
  index.html
  static/
    css/
    js/
    images/
    videos/
    pdfs/
```

## Placeholder Strategy

All current content should be explicit placeholders, not hidden TODOs.

Recommended placeholder assets:

- `static/images/teaser-placeholder.jpg`
- `static/images/method-placeholder.jpg`
- `static/images/results-placeholder.jpg`
- `static/images/gallery-1-placeholder.jpg`
- `static/images/gallery-2-placeholder.jpg`
- `static/images/gallery-3-placeholder.jpg`
- `static/images/gallery-4-placeholder.jpg`
- `static/images/gallery-5-placeholder.jpg`
- `static/images/gallery-6-placeholder.jpg`

Recommended placeholder text:

- Title, author list, affiliations, and venue should be present with obvious temporary wording.
- Abstract should be a readable placeholder paragraph.
- Captions should explain that real figures will be inserted later.
- BibTeX should include a clearly marked temporary entry.

## Asset and Path Rules

- Keep all resource paths relative to `MoKus/index.html`, for example `static/css/...` and `static/images/...`.
- Do not depend on the root site's Jekyll asset pipeline.
- Keep all `MoKus` resources self-contained.

## Validation Criteria

The design is considered successful when:

1. `https://chenyangzhu1.github.io/MoKus/` loads correctly.
2. The page keeps the overall visual structure of the `InstantSwap` template.
3. No images, videos, stylesheets, scripts, or icons 404.
4. The page works on both desktop and mobile widths without major layout issues.
5. All unfinished paper-specific content is clearly marked as placeholder content.

## Risks and Mitigations

### Risk: Template leftovers remain visible

Mitigation:

- Search `MoKus/index.html` for `InstantSwap`-specific names, links, captions, and asset filenames after editing.

### Risk: Jekyll interferes with subsite files

Mitigation:

- Add `MoKus/.nojekyll` for safety.
- Keep the `MoKus` page independent from `_includes`, `_layouts`, and other Jekyll internals.

### Risk: Broken asset paths after copying

Mitigation:

- Use only relative paths from `MoKus/index.html`.
- Validate with a local Jekyll build before publishing.
