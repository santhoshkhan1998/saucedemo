# Playwright BDD Project

This repository contains Playwright Test-based UI and API tests.

## Structure

- `tests/ui` - Playwright UI tests
- `tests/api` - Playwright API tests
- `playwright.config.js` - Playwright Test configuration

## Scripts

Run all Playwright tests:

```bash
npm test
```

Run only UI tests:

```bash
npm run test:ui
```

Run only API tests:

```bash
npm run test:api
```

Open the HTML report after a run:

```bash
npm run test:report
```

## Notes

- UI tests use Playwright Test for browser automation. `baseURL` is set in `playwright.config.js`.
- API tests use Playwright's `request` fixture for HTTP requests.
- The older Cucumber BDD files remain under `features/` for reference and can be removed if not needed.
