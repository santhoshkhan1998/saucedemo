# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\reqres.spec.ts >> ReqRes API >> CREATE, UPDATE and DELETE user
- Location: tests\api\reqres.spec.ts:20:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 401
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/testFixtures.js';
  2  | import { ReqResClient } from '../../api/clients/ReqResClient.js';
  3  | import { createUserPayload } from '../../api/payloads/user.payload.js';
  4  | import Ajv from 'ajv';
  5  | import userSchema from '../../api/schemas/user.schema.json' with { type: 'json' };
  6  | 
  7  | const ajv = new Ajv();
  8  | 
  9  | test.describe('ReqRes API', () => {
  10 |   test('GET users list and validate schema', async ({ apiRequest }) => {
  11 |     const client = new ReqResClient(apiRequest);
  12 |     const res = await client.listUsers(1);
  13 |     expect(res.status()).toBe(200);
  14 |     const body = await res.json();
  15 |     const validate = ajv.compile(userSchema as any);
  16 |     const valid = validate(body);
  17 |     expect(valid).toBeTruthy();
  18 |   });
  19 | 
  20 |   test('CREATE, UPDATE and DELETE user', async ({ apiRequest }) => {
  21 |     const client = new ReqResClient(apiRequest);
  22 |     const payload = createUserPayload('TestUser', 'Tester');
  23 |     const createRes = await client.createUser(payload);
> 24 |     expect(createRes.status()).toBe(201);
     |                                ^ Error: expect(received).toBe(expected) // Object.is equality
  25 |     const created = await createRes.json();
  26 |     expect(created.name).toBe(payload.name);
  27 | 
  28 |     const updateRes = await client.updateUser(Number(created.id || 2), { name: 'Updated', job: 'Dev' });
  29 |     expect([200, 201]).toContain(updateRes.status());
  30 | 
  31 |     const deleteRes = await client.deleteUser(Number(created.id || 2));
  32 |     expect([200, 204]).toContain(deleteRes.status());
  33 |   });
  34 | });
  35 | 
```