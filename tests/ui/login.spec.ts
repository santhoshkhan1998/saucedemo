
import { test, expect } from '../../fixtures/testFixtures.js';
import fs from 'fs';

const users = JSON.parse(fs.readFileSync(new URL('../../test-data/users.json', import.meta.url), 'utf8'));



test.describe('Login Scenarios', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('Successful Login', async ({ loginPage, page }) => {
    await loginPage.successfulLogin(users.validUser.username, users.validUser.password);
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('Invalid Login', async ({ loginPage }) => {
    const err = await loginPage.invalidLogin('invalid_user', 'bad_password');
    expect(err).toContain('Username and password do not match any user in this service');
  });

  test('Locked User Login Validation', async ({ loginPage }) => {
    const err = await loginPage.invalidLogin(users.lockedUser.username, users.lockedUser.password);
    expect(err).toContain('Sorry, this user has been locked out');
  });

  test('Empty Username and Password Validation', async ({ loginPage }) => {
    const err = await loginPage.invalidLogin('', '');
    expect(err).toContain('Username is required');
  });
});
