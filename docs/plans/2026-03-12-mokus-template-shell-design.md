# MoKus Template Shell Migration Design

**Date:** 2026-03-12

## Goal

Restyle the existing `MoKus` project page to follow the visual shell and interaction patterns of `eliahuhorwitz/Academic-project-page-template`, while preserving the current MoKus paper content, section order, media assets, and copy.

## Scope

- Keep the current `MoKus/index.html` content blocks and their ordering.
- Replace the page shell with the new template style:
  - richer SEO and social metadata
  - floating `More Works` menu
  - scroll-to-top button
  - modernized typography and spacing
  - copyable BibTeX block
- Reuse existing MoKus media files under `MoKus/static/`.
- Update only files inside `MoKus/` and new planning docs under `docs/plans/`.

## Non-Goals

- Do not rewrite the paper abstract, captions, or section text.
- Do not add new scientific content such as poster, supplementary PDF, or video presentation sections.
- Do not move the page into Jekyll layouts or refactor it into reusable site components.

## Selected Approach

Use the academic template as a presentation layer, not as a content schema.

This means:

- `MoKus/index.html` keeps the existing research sections and text.
- The `<head>` adopts the template's metadata structure and performance-oriented asset loading where it fits the current page.
- The body adopts the template's utility elements and interaction affordances, but only for features that map cleanly onto the current MoKus page.
- `MoKus/static/css/index.css` is replaced with a template-style stylesheet, then extended with MoKus-specific rules such as the qualitative comparison image sizing.
- `MoKus/static/js/index.js` is replaced with template-style behavior implemented against the current page structure.

## Content Mapping

### Template features to keep

- Modern metadata and structured data
- Floating `More Works` dropdown
- Scroll-to-top button
- Button styling, card-like sections, mobile responsiveness
- BibTeX copy button

### Template features to omit

- Teaser video section
- YouTube presentation section
- Poster iframe section
- Extra video carousel section
- Supplementary button unless a real asset exists

### Existing MoKus content to preserve

- Hero title, authors, affiliations, and existing link buttons
- Teaser figure and caption
- Abstract
- Observation section
- Method section
- Qualitative Results
- Qualitative Comparison carousel
- Knowledge-Aware Applications
- Footer attribution

## Risks and Mitigations

### Risk: Template-only JavaScript assumes missing sections

Mitigation:

- Guard all DOM lookups.
- Keep JS limited to features that exist on the page.

### Risk: Styling regression for MoKus-specific figures

Mitigation:

- Preserve and reapply the custom qualitative comparison width rule after importing the template style direction.

### Risk: Overwriting useful navigation

Mitigation:

- Migrate the old `Other Works` links into the template-style floating menu so the about-page navigation remains available.

## Validation Criteria

The migration is successful when:

1. The current MoKus paper content still appears, in the same order, without placeholder text from the external template.
2. The page includes the new template-style shell and interactions.
3. All local CSS, JS, image, video, and PDF asset references remain valid.
4. The page remains usable on mobile widths.
