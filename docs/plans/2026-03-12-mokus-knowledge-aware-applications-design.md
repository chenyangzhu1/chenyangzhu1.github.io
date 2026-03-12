# MoKus Knowledge-Aware Applications Design

**Date:** 2026-03-12

## Goal

Add a new `Knowledge-Aware Applications` section below `Qualitative Comparison` on the `MoKus` page.

## Context

- `Qualitative Comparison` currently sits directly above `BibTeX`.
- The user wants a new content block in between, with a title and a single image.
- The image file `MoKus/static/images/application.jpg` already exists.

## Selected Approach

Insert a new standalone section between `Qualitative Comparison` and `BibTeX`, using the existing page structure of title plus image.

The new block should:

- use the heading `Knowledge-Aware Applications`
- display `static/images/application.jpg`
- avoid extra caption text for now
- reuse the existing section/container layout

## Why This Approach

This is the smallest clean addition. It adds the requested content without introducing new styling or changing the structure of neighboring sections.

## Validation Criteria

1. The new section appears after `Qualitative Comparison` and before `BibTeX`.
2. The heading reads `Knowledge-Aware Applications`.
3. The section references `static/images/application.jpg`.
