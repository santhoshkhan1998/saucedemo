import { test, expect } from '../../fixtures/testFixtures';
import users from '../../test-data/users.json';

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
