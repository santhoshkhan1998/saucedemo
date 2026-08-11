import { test, expect } from '@playwright/test';

const POSTS_BASE = 'https://jsonplaceholder.typicode.com';

test.describe('Posts API', () => {
  test('retrieve posts list', async ({ request }) => {
    const response = await request.get(`${POSTS_BASE}/posts`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThanOrEqual(10);
  });

  test('create a new post', async ({ request }) => {
    const payload = { title: 'Playwright post', body: 'Test body', userId: 1 };
    const response = await request.post(`${POSTS_BASE}/posts`, { data: payload });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.title).toBe(payload.title);
  });
});
