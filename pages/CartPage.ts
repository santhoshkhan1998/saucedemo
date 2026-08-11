import { Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async getCartItems() {
    return this.page.$$eval('.cart_item', items => items.map(i => i.textContent?.trim()));
  }

  async checkout() {
    await this.page.click('button[data-test="checkout"]');
  }
}
