import { Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async addToCartByName(name: string) {
    await this.page.click(`text=${name} >> xpath=.. >> button:text("Add to cart")`, { timeout: 2000 }).catch(async () => {
      // fallback selector
      await this.page.click(`button[data-test="add-to-cart-${name}"]`).catch(() => {});
    });
  }

  async removeFromCartByName(name: string) {
    await this.page.click(`text=${name} >> xpath=.. >> button:text("Remove")`).catch(async () => {
      await this.page.click(`button[data-test="remove-${name}"]`).catch(() => {});
    });
  }

  async goToCart() {
    await this.page.click('a.shopping_cart_link');
  }
}
