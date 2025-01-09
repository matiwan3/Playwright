import { test, expect } from "@playwright/test";

test.describe("basic test", () => {
  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("has title", async ({ page }) => {
    let x: number = 1;
    await page.goto("https://playwright.dev/");
    expect(x).toBe(1);

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test("get started link", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Click the get started link.
    await page.getByRole("link", { name: "Get started" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(
      page.getByRole("heading", { name: "Installation" })
    ).toBeVisible();
  });

  test("check navigation bar links", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Check if the navigation bar contains the expected links.
    const navLinks = ["Docs", "API", "Community", "Playwright Test"];
    for (const link of navLinks) {
      await expect(page.getByRole("link", { name: link })).toBeVisible();
    }
  });

  test("search functionality", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Click on the search button.
    await page.getByRole("button", { name: "Search" }).click();

    // Type in the search input.
    await page.getByPlaceholder("Search").fill("test");

    // Expect the search results to be visible.
    await expect(page.getByText("Playwright Test")).toBeVisible();
  });
});
