import { test as base, expect, APIRequestContext } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import * as fs from 'fs';

type TestFixtures = {
  loginPage: LoginPage;
  apiRequest: APIRequestContext;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  apiRequest: async ({ request }, use) => {
    await use(request);
  },
});

export { expect };
