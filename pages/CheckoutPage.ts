import { Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async fillCheckout(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('input[data-test="firstName"]', firstName);
    await this.page.fill('input[data-test="lastName"]', lastName);
    await this.page.fill('input[data-test="postalCode"]', postalCode);
    await this.page.click('input[data-test="continue"]');
  }

  async finish() {
    await this.page.click('button[data-test="finish"]');
  }

  async getConfirmation() {
    return this.page.textContent('.complete-header');
  }
}
