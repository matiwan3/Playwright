# Playwright Framework Quick Guide

## What is Playwright?

Playwright is a Node.js library to automate Chromium, Firefox, and WebKit with a single API. It enables reliable end-to-end testing for modern web apps. Playwright can be used to automate browser actions, test web applications, and capture screenshots.

## Resources

- [Playwright Official Documentation](https://playwright.dev/docs/intro)
- [Playwright GitHub Repository](https://github.com/microsoft/playwright)

## Setting Up Playwright with TypeScript

Follow these steps to set up Playwright in a TypeScript project:

1. **Initialize a new Node.js project:**
    ```bash
    mkdir playwright-project
    cd playwright-project
    npm init -y
    ```

2. **Install Playwright and TypeScript:**
    ```bash
    npm install playwright
    npm install typescript ts-node @types/node --save-dev
    ```

3. **Create a `tsconfig.json` file:**
    ```json
    {
      "compilerOptions": {
        "target": "ESNext",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
      }
    }
    ```

4. **Write a simple test in TypeScript:**

    Create a file named `example.spec.ts`:
    ```typescript
    import { chromium } from 'playwright';

    (async () => {
      const browser = await chromium.launch();
      const page = await browser.newPage();
      await page.goto('https://example.com');
      const title = await page.title();
      console.log(`Title: ${title}`);
      await browser.close();
    })();
    ```

5. **Run the test:**
    ```bash
    npx ts-node example.spec.ts
    ```

    ## Good Practices for File Organization

    ### Page Object Model (POM)

    Using the Page Object Model (POM) pattern helps in maintaining clean and reusable code. Here are some best practices for organizing your files using POM:

    1. **Create a `pages` directory:**
      - Store all your page objects in this directory.
      - Each page object should be a separate file.

    2. **Example structure:**
      ```
      /pages
        ├── loginPage.ts
        ├── dashboardPage.ts
        └── profilePage.ts
      ```

    3. **Page Object Example:**
      ```typescript
      // pages/loginPage.ts
      import { Page } from 'playwright';

      export class LoginPage {
        constructor(private page: Page) {}

        async navigate() {
        await this.page.goto('https://example.com/login');
        }

        async login(username: string, password: string) {
        await this.page.fill('#username', username);
        await this.page.fill('#password', password);
        await this.page.click('#loginButton');
        }
      }
      ```

    ### Tests Organization

    Organizing your tests properly ensures better maintainability and readability. Here are some tips:

    1. **Create a `tests` directory:**
      - Store all your test files in this directory.
      - Group related tests into subdirectories.

    2. **Example structure:**
      ```
      /tests
        ├── login.spec.ts
        ├── dashboard.spec.ts
        └── profile.spec.ts
      ```

    3. **Test File Example:**
      ```typescript
      // tests/login.spec.ts
      import { chromium } from 'playwright';
      import { LoginPage } from '../pages/loginPage';

      (async () => {
        const browser = await chromium.launch();
        const page = await browser.newPage();
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.login('user', 'password');

        // Add assertions here

        await browser.close();
      })();
      ```

    ### Structure Creation

    1. **Directory Structure:**
      - Keep a clear and consistent directory structure.
      - Separate configuration files, page objects, and tests.

    2. **Example structure:**
      ```
      /playwright-project
        ├── pages
        │   ├── loginPage.ts
        │   ├── dashboardPage.ts
        │   └── profilePage.ts
        ├── tests
        │   ├── login.spec.ts
        │   ├── dashboard.spec.ts
        │   └── profile.spec.ts
        ├── tsconfig.json
        └── package.json
      ```

      ## Playwright Features
      
      source https://playwright.dev/docs/intro  

      ### Fixtures

      Fixtures in Playwright are used to set up the environment for tests. They can be used to initialize objects, set up databases, or configure the browser context. Fixtures ensure that each test runs in a clean environment.

      ### Global Setup and Teardown

      Global setup and teardown functions are used to perform actions before and after the entire test suite runs. This can include tasks like starting a server, setting up a database, or cleaning up resources.

      ### Snapshots

      Playwright supports visual testing through snapshots. Snapshots capture the state of a web page at a specific point in time, allowing you to compare it against a baseline to detect visual regressions.

      ### Mock API Integration

      Playwright allows you to intercept and mock network requests. This is useful for testing how your application handles different API responses without relying on the actual backend.

      ### Reporters

      Reporters in Playwright are used to generate test reports in various formats. Playwright comes with several built-in reporters, such as list, dot, and JSON. You can also create custom reporters to fit your needs.

      ### Retries

      Playwright supports test retries to handle flaky tests. You can configure the number of retries for individual tests or the entire test suite. This helps in achieving more stable test runs.

      ### Sharding

      Sharding allows you to split your test suite into multiple shards and run them in parallel. This can significantly reduce the overall test execution time, especially for large test suites.

      ### Codegen

      Playwright's codegen feature helps you generate test scripts by recording your actions on a web page. This is a great way to quickly create tests without writing code manually.

      ### Trace Viewer

      Trace Viewer is a powerful tool in Playwright that allows you to record and visualize the execution of your tests. It captures screenshots, network requests, and other details, making it easier to debug test failures.