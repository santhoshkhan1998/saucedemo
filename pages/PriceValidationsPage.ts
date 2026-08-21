import { Locator, Page } from '@playwright/test';

export class PriceValidationsPage {
  readonly page: Page;
  readonly prices: Locator;

  constructor(page: Page) {
    this.page = page;
    this.prices = page.locator('[data-test="inventory-item-price"]');
  }

  async login(username: string, password: string) {
    await this.page.goto('/');
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();
  }

  priceByText(price: string) {
    return this.prices.filter({ hasText: price });
  }
}