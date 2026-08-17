import { test, expect } from '../../fixtures/testFixtures.js';

test('Add and Remove Product from Cart and Checkout', async ({ loginPage, page }) => {
  await page.goto('/');
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory.html/);
  // add first product
  await page.click('button[data-test^="add-to-cart-"]');
  await page.click('a.shopping_cart_link');
  await expect(page).toHaveURL(/cart.html/);
  // checkout
  await page.click('button[data-test="checkout"]');
  await page.fill('input[data-test="firstName"]', 'John');
  await page.fill('input[data-test="lastName"]', 'Doe');
  await page.fill('input[data-test="postalCode"]', '12345');
  await page.click('input[data-test="continue"]');
  await page.click('button[data-test="finish"]');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
