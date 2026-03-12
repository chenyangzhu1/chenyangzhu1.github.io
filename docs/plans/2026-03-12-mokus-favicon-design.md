# MoKus Favicon Design

**Date:** 2026-03-12

## Goal

Create a new favicon for the `MoKus` project page that is readable at small sizes and visually aligned with the paper theme of knowledge transfer.

## Approved Direction

Use the `M + knowledge transfer track` concept.

This means:

- A bold geometric `M` is the main recognizable shape.
- Small circular nodes suggest knowledge points.
- A colored directional bridge between the nodes suggests transfer across modalities.

## Visual Rules

- Prioritize recognizability at `16x16` and `32x32`.
- Use a simple flat design with no tiny text.
- Keep the background light so the icon remains visible in common browser tabs.
- Use the existing page palette:
  - deep navy for the `M`
  - orange-red for the transfer track and destination emphasis
  - blue accent for the source node

## Deliverables

- `MoKus/static/images/favicon.svg` as the editable source favicon
- `MoKus/static/images/apple-touch-icon.png` for touch devices
- updated references in `MoKus/index.html`

## Non-Goals

- Do not redesign the whole page branding system.
- Do not add long text, paper title, or complex scientific diagrams into the favicon.
- Do not change existing page content outside favicon references.

## Validation Criteria

The work is successful when:

1. The icon files exist under `MoKus/static/images/`.
2. `MoKus/index.html` references the new favicon assets.
3. The icon concept still reads clearly as a simple `M` plus transfer motif at small scale.
