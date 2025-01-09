import { test, expect } from '@playwright/test';

test.describe('Set of tests for weboptimus webpage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://weboptimus.pl/');
    });
    test.afterEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.close();
    });
    test('Check if the page has a title', async ({ page }) => {
        await expect(page).toHaveTitle("Weboptimus – Tworzenie stron WWW");
    });
});