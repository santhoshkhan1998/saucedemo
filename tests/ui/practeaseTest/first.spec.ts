
import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.pause();
    await page.getByRole('combobox', { name: 'Search' }).fill('santhosh');
    //await page.getByRole('button', { name: 'Google Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await page.waitForLoadState('networkidle');
})