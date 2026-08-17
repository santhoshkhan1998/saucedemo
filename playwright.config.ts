import { PlaywrightTestConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

// Load environment-specific .env if present
const env = process.env.ENV || 'dev';
const envFile = `.env.${env}`;
if (fs.existsSync(envFile)) dotenv.config({ path: envFile });
else dotenv.config();

const config: PlaywrightTestConfig = {
  testDir: 'tests',
  timeout: 50 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 1,
  reporter: [ ['list'], ['html', { outputFolder: 'reports/html-report' }], ['allure-playwright'] ],
  use: {
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10 * 1000,
    launchOptions: {
      slowMo: 0,
    },
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
    // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
};

export default config;
