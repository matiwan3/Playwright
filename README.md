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

    By following these practices, you can ensure that your Playwright project remains organized, maintainable, and scalable.