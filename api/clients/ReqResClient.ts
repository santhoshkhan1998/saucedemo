import { APIRequestContext } from '@playwright/test';

export class ReqResClient {
  readonly request: APIRequestContext;
  readonly base: string;
  readonly apiKey: string;

  constructor(request: APIRequestContext, base = process.env.API_BASE || 'https://reqres.in') {
    this.request = request;
    this.base = base;
    this.apiKey = process.env.X_API_KEY || 'reqres_4e8071c6ddab4a8881ca90676b4caf58';
  }

  private headers() {
    return {
      'x-api-key': this.apiKey,
    };
  }

  async getUser(id: number) {
    return this.request.get(`${this.base}/api/users/${id}`, { headers: this.headers() });
  }

  async listUsers(page = 1) {
    return this.request.get(`${this.base}/api/users?page=${page}`, { headers: this.headers() });
  }

  async createUser(payload: any) {
    return this.request.post(`${this.base}/api/users`, { headers: this.headers(), data: payload });
  }

  async updateUser(id: number, payload: any) {
    return this.request.put(`${this.base}/api/users/${id}`, { headers: this.headers(), data: payload });
  }

  async deleteUser(id: number) {
    return this.request.delete(`${this.base}/api/users/${id}`, { headers: this.headers() });
  }
}
