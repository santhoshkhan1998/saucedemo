import { test, expect } from '../../fixtures/testFixtures.js';
import { ReqResClient } from '../../api/clients/ReqResClient.js';
import { createUserPayload } from '../../api/payloads/user.payload.js';
import Ajv from 'ajv';
import userSchema from '../../api/schemas/user.schema.json' with { type: 'json' };

const ajv = new Ajv();

test.describe('ReqRes API', () => {
  test('GET users list and validate schema', async ({ apiRequest }) => {
    const client = new ReqResClient(apiRequest);
    const res = await client.listUsers(1);
    expect(res.status()).toBe(200);
    const body = await res.json();
    const validate = ajv.compile(userSchema as any);
    const valid = validate(body);
    expect(valid).toBeTruthy();
  });

  test('CREATE, UPDATE and DELETE user', async ({ apiRequest }) => {
    const client = new ReqResClient(apiRequest);
    const payload = createUserPayload('TestUser', 'Tester');
    const createRes = await client.createUser(payload);
    expect(createRes.status()).toBe(201);
    const created = await createRes.json();
    expect(created.name).toBe(payload.name);

    const updateRes = await client.updateUser(Number(created.id || 2), { name: 'Updated', job: 'Dev' });
    expect([200, 201]).toContain(updateRes.status());

    const deleteRes = await client.deleteUser(Number(created.id || 2));
    expect([200, 204]).toContain(deleteRes.status());
  });
});
