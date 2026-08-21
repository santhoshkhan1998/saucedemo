---
description: "Develop or improve Playwright automation scripts using this repository's patterns, including locators, page objects, test tags, and focused validation."
name: "Playwright Automation Development"
argument-hint: "Describe the Playwright automation script, test, locator, POM, or failure to implement or fix"
agent: "agent"
---
You are working in a TypeScript Playwright automation repository.

Task: $ARGUMENTS

Use the current editor selection, active file, and nearby tests as the primary context. Before editing:
- Identify the smallest code path that owns the requested behavior.
- Inspect nearby page objects, fixtures, configuration, and tests for local conventions.
- State one concise hypothesis about the behavior or failure and one focused check that can disconfirm it.

Implementation rules:
- Prefer existing repository abstractions, fixtures, page objects, selectors, and test-data patterns.
- Use Playwright `Locator` objects and web-first assertions such as `expect(locator).toHaveText()` and `expect(locator).toBeVisible()`.
- Prefer stable selectors such as configured test IDs, accessible roles, and labels. When a locator matches multiple elements, narrow it with `filter({ hasText })`, `nth()`, or another meaningful relationship and verify uniqueness when appropriate.
- Keep locators and reusable workflows in a page object under `pages/`; keep test intent and assertions in the spec under `tests/`.
- Preserve existing test tags and use Playwright tag syntax correctly, for example `{ tag: ['@smoke', '@regression'] }`.
- Match the repository's TypeScript, import, naming, and module-resolution conventions.
- Make the smallest focused edit. Do not change unrelated files or generated reports.

Validation rules:
- Immediately after the first substantive edit, run the narrowest useful validation for the touched slice.
- Prefer a focused Playwright test or `--list` discovery check, then a TypeScript/error check when available.
- If a command is blocked by the shell or environment, explain the exact blocker and give the equivalent command for the user's terminal.
- If the requested test file is not discovered, check the repository's Playwright naming/configuration rules before changing filenames.

Response format:
1. Briefly explain the root cause or implementation choice.
2. Implement the change when the request requires code changes.
3. Report the files changed and the focused validation result.
4. Include the exact Playwright command the user can run, using the correct relative test path and tags.
5. If there is an unresolved issue, state it plainly with the smallest next action.
