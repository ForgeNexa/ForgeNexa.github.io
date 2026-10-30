import { describe, it, expect } from 'vitest';
import { PRODUCTS } from './data/products';

describe('ForgeNexa Website Data Integrity', () => {
  it('contains all 5 core products', () => {
    expect(PRODUCTS.length).toBe(5);
    const ids = PRODUCTS.map(p => p.id);
    expect(ids).toContain('ide');
    expect(ids).toContain('api');
    expect(ids).toContain('terminal');
    expect(ids).toContain('git');
    expect(ids).toContain('hub');
  });

  it('reflects accurate honest status', () => {
    const ide = PRODUCTS.find(p => p.id === 'ide');
    expect(ide?.status).toBe('Available');
    expect(ide?.version).toBe('0.2.1');

    const api = PRODUCTS.find(p => p.id === 'api');
    expect(api?.status).toBe('In Development');

    const term = PRODUCTS.find(p => p.id === 'terminal');
    expect(term?.status).toBe('In Development');

    const git = PRODUCTS.find(p => p.id === 'git');
    expect(git?.status).toBe('In Development');

    const hub = PRODUCTS.find(p => p.id === 'hub');
    expect(hub?.status).toBe('Planned');
  });

  it('provides downloads only for released products', () => {
    const ide = PRODUCTS.find(p => p.id === 'ide');
    expect(ide?.downloads?.length).toBeGreaterThan(0);

    const api = PRODUCTS.find(p => p.id === 'api');
    expect(api?.downloads).toBeUndefined();
  });
});
