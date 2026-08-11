import { test, expect } from '@playwright/test';

test.describe('Playwright homepage', () => {
  test('has title and Get started navigates to Installation', async ({ page, baseURL }) => {
    await page.goto(baseURL || 'https://playwright.dev/');
    await expect(page).toHaveTitle(/Swag Labs/);
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
});
