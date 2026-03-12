# Disable Automatic Google Scholar Action Design

**Date:** 2026-03-12

## Goal

Stop the `Get Citation Data` GitHub Action from running automatically on GitHub Pages builds or on a daily schedule, while keeping the workflow available for manual execution from the Actions UI.

## Selected Approach

Convert the workflow trigger in `.github/workflows/google_scholar_crawler.yaml` from:

- `page_build`
- `schedule`

to:

- `workflow_dispatch`

This keeps the workflow file in the repository but removes the unwanted automatic runs after pushes and the daily cron run.

## Scope

- Modify the workflow trigger in `.github/workflows/google_scholar_crawler.yaml`
- Update the Chinese README note in `docs/README-zh.md` so it no longer claims that pushes to `main` or the daily schedule will trigger the workflow

## Non-Goals

- Do not remove the Google Scholar crawler code
- Do not remove the `GOOGLE_SCHOLAR_ID` secret usage
- Do not remove Google Scholar display features from the site

## Validation Criteria

The change is successful when:

1. The workflow file contains `workflow_dispatch`
2. The workflow file no longer contains `page_build`
3. The workflow file no longer contains `schedule`
4. The Chinese README describes the workflow as a manual action instead of an automatic one
