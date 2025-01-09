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

You now have a basic setup for running Playwright tests using TypeScript.