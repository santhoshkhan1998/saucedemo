
import { test, expect } from '@playwright/test';
import { PriceValidationsPage } from '../../../pages/PriceValidationsPage.js';

test.describe('Price validation tests', () => {
    test.beforeEach(async ({ page }) => {
        const pricePage = new PriceValidationsPage(page);
        await pricePage.login('standard_user', 'secret_sauce');
    });

    test('Login Test', async ({ page }) => {
        
        await expect(page).toHaveURL(/inventory.html/);
    });

    test('Price contains 29', async ({ page }) => {
        const pricePage = new PriceValidationsPage(page);
        const price = pricePage.prices.first();
        await expect(price).toBeVisible();

        const text = await price.textContent();
        expect(text).toContain('29');
    });

    test('Price contains 9', async ({ page }) => {
        const pricePage = new PriceValidationsPage(page);
        const price = pricePage.prices.nth(1);
        await expect(price).toBeVisible();

        const text = await price.textContent();
        expect(text).toContain('9');
    });

    test('Validating Total Number of Products',  async ({ page }) => {
        const pricePage = new PriceValidationsPage(page);
        const priceElements = pricePage.prices;
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
        const pricePage = new PriceValidationsPage(page);
        const price = pricePage.prices.nth(0);
        await expect(price).toBeVisible();

        const text: string | null = await price.textContent();
        console.log(text);
        expect(text).toBe('$29.99');
        
    });



    test('Asserting Second Element',{tag: '@price'}, async ({ page}) => {
        const pricePage = new PriceValidationsPage(page);
        const priceText = await pricePage.prices.nth(1).textContent();
        console.log('Second Price ' + priceText);
        expect(priceText).toBe('$9.99');

    })

    test('Asserting third Element', {tag:'@current'}, async ({ page }) => {
        const pricePage = new PriceValidationsPage(page);
        const priceText = await pricePage.prices.nth(2).textContent();
        console.log('Third Price'+ priceText);
        expect(priceText).toBe('$15.99');
   
    })




    // test('Validating fourth Elemet', async ({ page }) => {
//     const priceText = await page.locator('.inventory_item_price').nth(1).textContent();
//         console.log('Third Price'+ priceText);
//         expect(priceText).toBe('$15.99');
    
// })

test('Validating fourth Element', {tag: '@test00'}, async ({ page }) => {
    const pricePage = new PriceValidationsPage(page);
    await expect(pricePage.priceByText('$49.99')).toHaveText('$49.99');

})

test('Validating fifth Element', {tag: ['@test005','@regression'] }, async ({ page }) => {
    const pricePage = new PriceValidationsPage(page);
    await expect(pricePage.priceByText('$49.99')).toHaveText('$49.99');

})



test('Validating sixth Element', {tag: ['@test006','@regression'] }, async ({ page }) => {
    const pricePage = new PriceValidationsPage(page);
    const price = pricePage.priceByText('$49.99');
    await expect(price).toHaveCount(1);
    await expect(price).toHaveText('$49.99');
})



 
    
})





















