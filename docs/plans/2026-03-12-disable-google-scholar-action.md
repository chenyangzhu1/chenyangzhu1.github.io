# Disable Automatic Google Scholar Action Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Stop the `Get Citation Data` GitHub Action from auto-running while preserving manual execution from the GitHub Actions page.

**Architecture:** Keep the existing workflow file and job steps, but change its trigger to `workflow_dispatch` so only manual runs remain. Update the README text to match the new trigger behavior.

**Tech Stack:** GitHub Actions YAML, Markdown documentation

---

### Task 1: Record the approved design

**Files:**
- Create: `docs/plans/2026-03-12-disable-google-scholar-action-design.md`
- Create: `docs/plans/2026-03-12-disable-google-scholar-action.md`

**Step 1: Confirm the design doc captures the manual-only workflow direction**

Run: `sed -n '1,220p' docs/plans/2026-03-12-disable-google-scholar-action-design.md`
Expected: the doc says the workflow should keep manual execution but drop `page_build` and `schedule`.

**Step 2: Confirm the implementation plan captures the execution steps**

Run: `sed -n '1,260p' docs/plans/2026-03-12-disable-google-scholar-action.md`
Expected: the plan references the workflow YAML and `docs/README-zh.md`.

### Task 2: Change the workflow trigger

**Files:**
- Modify: `.github/workflows/google_scholar_crawler.yaml`

**Step 1: Write a failing verification check**

Run: `rg -n "workflow_dispatch" .github/workflows/google_scholar_crawler.yaml`
Expected: no matches before the edit.

**Step 2: Verify the old auto triggers exist before the change**

Run: `rg -n "page_build|schedule" .github/workflows/google_scholar_crawler.yaml`
Expected: both `page_build` and `schedule` are present before the edit.

**Step 3: Write the minimal implementation**

Implement:
- replace the existing `on:` block with `workflow_dispatch`

**Step 4: Verify the new trigger**

Run: `rg -n "workflow_dispatch|page_build|schedule" .github/workflows/google_scholar_crawler.yaml`
Expected: `workflow_dispatch` exists and `page_build` / `schedule` do not.

### Task 3: Update the Chinese README note

**Files:**
- Modify: `docs/README-zh.md`

**Step 1: Write a failing verification check for the new manual wording**

Run: `rg -n "手动|workflow_dispatch" docs/README-zh.md`
Expected: no matching explanation before the edit.

**Step 2: Verify the old auto-trigger wording exists before the change**

Run: `rg -n "每次修改main分支的内容会触发|每天08:00 UTC定时触发" docs/README-zh.md`
Expected: both phrases are present before the edit.

**Step 3: Write the minimal implementation**

Implement:
- update the README note to say the action can be run manually from the Actions page
- remove references to push-triggered and scheduled automatic execution

**Step 4: Verify the updated wording**

Run: `rg -n "手动运行|每次修改main分支的内容会触发|每天08:00 UTC定时触发" docs/README-zh.md`
Expected: the manual wording exists and the old auto-trigger phrases do not.

### Task 4: Final verification

**Files:**
- Verify: `.github/workflows/google_scholar_crawler.yaml`
- Verify: `docs/README-zh.md`

**Step 1: Check the final workflow trigger state**

Run: `sed -n '1,80p' .github/workflows/google_scholar_crawler.yaml`
Expected: the trigger block only contains `workflow_dispatch`.

**Step 2: Check the final README snippet**

Run: `sed -n '34,48p' docs/README-zh.md`
Expected: the README says the action is run manually from the Actions page.
