# MoKus Remove Gallery Design

**Date:** 2026-03-12

## Goal

Remove the `Gallery` section from the `MoKus` page and delete its unused placeholder image files.

## Context

- The current page still contains a `Gallery` section below `Qualitative Comparison`.
- The user asked to remove both the page section and the six placeholder images it uses.
- Shared carousel code should remain because `Qualitative Comparison` still depends on it.

## Selected Approach

Delete the entire `Gallery` section from `MoKus/index.html` and remove:

- `gallery-1-placeholder.jpg`
- `gallery-2-placeholder.jpg`
- `gallery-3-placeholder.jpg`
- `gallery-4-placeholder.jpg`
- `gallery-5-placeholder.jpg`
- `gallery-6-placeholder.jpg`

## Why This Approach

This is the smallest clean removal. It deletes only the unused section and its orphaned assets while preserving the carousel infrastructure needed elsewhere on the page.

## Validation Criteria

1. `MoKus/index.html` no longer contains the `Gallery` heading or any `gallery-*-placeholder.jpg` references.
2. The six gallery placeholder images no longer exist in `MoKus/static/images/`.
3. The remaining page structure stays intact, with `BibTeX` following `Qualitative Comparison`.
