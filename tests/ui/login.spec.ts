
import { test, expect } from '../../fixtures/testFixtures.js';
import fs from 'fs';

const users = JSON.parse(fs.readFileSync(new URL('../../test-data/users.json', import.meta.url), 'utf8'));



test.describe('Login Scenarios', () => {
  test('Successful Login', async ({ loginPage, page }) => {
    await page.goto('/');
    await loginPage.login(users.validUser.username, users.validUser.password);
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('Invalid Login', async ({ loginPage, page }) => {
    await page.goto('/');
    await loginPage.login('invalid_user', 'bad_password');
    const err = await loginPage.getError();
    expect(err).toContain('Username and password do not match any user in this service');
  });
});
