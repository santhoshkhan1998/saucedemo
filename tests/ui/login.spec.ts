
import { test, expect } from '../../fixtures/testFixtures.js';
import fs from 'fs';

const users = JSON.parse(fs.readFileSync(new URL('../../test-data/users.json', import.meta.url), 'utf8'));



test.describe('Login Scenarios ', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('LGN-001 - Successful Login', async ({ loginPage, page }) => {
    await loginPage.successfulLogin(users.validUser.username, users.validUser.password);
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('LGN-002 - Invalid Login', async ({ loginPage }) => {
    const err = await loginPage.invalidLogin('invalid_user', 'bad_password');
    expect(err).toContain('Username and password do not match any user in this service');
  });

  test('LGN-007 - Locked User Login Validation', async ({ loginPage }) => {
    const err = await loginPage.invalidLogin(users.lockedUser.username, users.lockedUser.password);
    expect(err).toContain('Sorry, this user has been locked out');
  });

  test('LGN-003 - Empty Username and Password Validation', async ({ loginPage }) => {
    const err = await loginPage.invalidLogin('', '');
    expect(err).toContain('Username is required');
  });

  test('LGN-004 - Invalid Email Format Validation', async ({ loginPage }) => {
    const err = await loginPage.invalidLogin('invalid-email', users.validUser.password);
    expect(err).toContain('Username and password do not match any user in this service');
  });

  test('LGN-005 - Password Is Masked', async ({ page }) => {
    await expect(page.locator('[data-test="password"]')).toHaveAttribute('type', 'password');
  });

  test.skip('LGN-006 - Remember Me Behavior', async ({ page }) => {
    await expect(page.getByLabel('Remember me')).toBeVisible();
  });

  test.skip('LGN-008 - Forgot Password Link', async ({ page }) => {
    await expect(page.getByRole('link', { name: /forgot password/i })).toBeVisible();
  });
});
