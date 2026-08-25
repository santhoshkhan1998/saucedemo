import { test, expect } from '@playwright/test'

test('first test', async ( { page }) => {
    await page.goto('https://www.saucedemo.com');

   // const username = await page.locator('[data-test="username"]');


     await page.locator('[data-test="username"]').fill("standard_user");

     await page.locator('[id="user-name"]').fill("secret_sauce");


    //expect(username).toBeEmpty();
    console.log('First');
});
