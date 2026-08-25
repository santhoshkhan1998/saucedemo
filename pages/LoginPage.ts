import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.fill('input[data-test="username"]', username);
    await this.page.fill('input[data-test="password"]', password);
    await this.page.click('input[data-test="login-button"]');
  }

  async successfulLogin(username: string, password: string) {
    await this.login(username, password);
  }

  async invalidLogin(username: string, password: string) {
    await this.login(username, password);
    return this.getError();
  }

  async getError() {
    return this.page.textContent('[data-test="error"]');
  }
}
