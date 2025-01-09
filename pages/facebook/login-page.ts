import { Page } from 'playwright';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string) {
        await this.page.getByRole('button', { name: 'Allow all cookies' }).click();
        await this.page.fill('input[name="email"]', username);
        await this.page.fill('input[name="pass"]', password);
        await this.page.click('button[name="login"]');
    }
}