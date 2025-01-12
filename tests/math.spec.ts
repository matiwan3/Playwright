import { test, expect } from '@playwright/test';

test.describe('Math operations', () => {
    test('addition', async () => {
        const result = 2 + 3;
        expect(result).toBe(5);
    });

    test('subtraction', async () => {
        const result = 5 - 3;
        expect(result).toBe(2);
    });

    test('multiplication', async () => {
        const result = 2 * 3;
        expect(result).toBe(6);
    });

    test('division', async () => {
        const result = 6 / 3;
        expect(result).toBe(2);
    });
});