import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/facebook/login-page";
import { credentials, searchKeyword } from "../constants/examples";

test.describe("Facebook", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.facebook.com/");
  });

  test.afterEach(async ({ page }) => {
    await page.context().clearCookies();
    await page.close();
  });

  test("login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(credentials.username, credentials.password);
    expect(searchKeyword).toBe("test");
  });
});
