import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/weboptimus/main';

test.describe('Set of tests for weboptimus webpage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://weboptimus.pl/');
    });
    test.afterEach(async ({ page }) => {
        await page.context().clearCookies();
        await page.close();
    });
    test('Check if the page has a title', async ({ page }) => {
        const mainPage = new MainPage(page);
        await expect(page).toHaveTitle("Weboptimus – Tworzenie stron WWW");
        expect(await mainPage.heading.isVisible()).toBeTruthy();
    });
});