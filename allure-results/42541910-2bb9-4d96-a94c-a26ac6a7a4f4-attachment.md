# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\homepage.spec.js >> Playwright homepage >> has title and Get started navigates to Installation
- Location: tests\ui\homepage.spec.js:4:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Get started' })

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Playwright homepage', () => {
  4  |   test('has title and Get started navigates to Installation', async ({ page, baseURL }) => {
  5  |     await page.goto(baseURL || 'https://playwright.dev/');
  6  |     await expect(page).toHaveTitle(/Swag Labs/);
> 7  |     await page.getByRole('link', { name: 'Get started' }).click();
     |                                                           ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  8  |     await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  9  |   });
  10 | });
  11 | 
```