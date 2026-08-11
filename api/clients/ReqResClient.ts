import { APIRequestContext } from '@playwright/test';

export class ReqResClient {
  readonly request: APIRequestContext;
  readonly base: string;
  constructor(request: APIRequestContext, base = process.env.API_BASE || 'https://reqres.in') {
    this.request = request;
    this.base = base;
  }

  async getUser(id: number) {
    return this.request.get(`${this.base}/api/users/${id}`);
  }

  async listUsers(page = 1) {
    return this.request.get(`${this.base}/api/users?page=${page}`);
  }

  async createUser(payload: any) {
    return this.request.post(`${this.base}/api/users`, { data: payload });
  }

  async updateUser(id: number, payload: any) {
    return this.request.put(`${this.base}/api/users/${id}`, { data: payload });
  }

  async deleteUser(id: number) {
    return this.request.delete(`${this.base}/api/users/${id}`);
  }
}
