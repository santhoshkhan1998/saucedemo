
import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test.describe('Price validation tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
    });

    test('Login Test', async ({ page }) => {
        
        await expect(page).toHaveURL(/inventory.html/);
    });

    test('Price contains 29', async ({ page }) => {
        const price = page.locator('.inventory_item_price').first();
        await expect(price).toBeVisible();

        const text = await price.textContent();
        expect(text).toContain('29');
    });

    test('Price contains 9', async ({ page }) => {
        const price = page.locator('.inventory_item_price').nth(1);
        await expect(price).toBeVisible();

        const text = await price.textContent();
        expect(text).toContain('9');
    });

    test('Validating Total Number of Products',  async ({ page }) => {
        const priceElements = page.locator('.inventory_item_price');
        const count = await priceElements.count();
        console.log(`Total price elements: ${count}`);
        expect(count).toBe(6);

        for (let i = 0; i < count; i++) {
            const price = await priceElements.nth(i).textContent();
            console.log(`Price ${i + 1}: ${price}`);       
        }
    });

    //Asserting First Element
    test('Validating first Element-Price:29.99',  async ({ page }) => {
        const price = page.locator('.inventory_item_price').nth(0);
        await expect(price).toBeVisible();

        const text: string | null = await price.textContent();
        console.log(text);
        expect(text).toBe('$29.99');
        
    });



    test('Asserting Second Element',{tag: '@price'}, async ({ page}) => {
        const priceText = await page.locator('.inventory_item_price').nth(1).textContent();
        console.log('Second Price ' + priceText);
        expect(priceText).toBe('$9.99');

    })

    test('Asserting third Element', {tag:'@current'}, async ({ page }) => {
        const priceText = await page.locator('.inventory_item_price').nth(2).textContent();
        console.log('Third Price'+ priceText);
        expect(priceText).toBe('$15.99');
   
    })




    // test('Validating fourth Elemet', async ({ page }) => {
//     const priceText = await page.locator('.inventory_item_price').nth(1).textContent();
//         console.log('Third Price'+ priceText);
//         expect(priceText).toBe('$15.99');
    
// })

test('Validating fourth Element', {tag: '@test00'}, async ({ page }) => {

    
    expect(await page.getByText('$49.99').textContent()).toBe('$49.99');

})

test('Validating fifth Element', {tag: ['@test005','@regression'] }, async ({ page }) => {

    
    expect(await page.getByText('$49.99').textContent()).toBe('$49.99');

})


test('Validating sixth Element', {tag: ['@test006','@regression'] }, async ({ page }) => {

    
   const price = page
    .locator('[data-test="inventory-item-price"]')
    .filter({ hasText: '$49.99' });

await expect(price).toHaveCount(1);
await expect(price).toHaveText('$49.99');
})



 
    
})





















