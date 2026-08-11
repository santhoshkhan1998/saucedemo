import * as fs from 'fs';

export function loadJson<T = any>(path: string): T {
  const raw = fs.readFileSync(path, 'utf-8');
  return JSON.parse(raw) as T;
}
