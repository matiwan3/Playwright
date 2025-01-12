import { Page } from 'playwright';

export class MainPage {
    private page: Page;
    public heading: any;
    public uniqueValues: any;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByRole('heading', { name: 'Nowoczesne strony internetowe', exact: true });
        this.uniqueValues = page.getByRole('heading', { name: 'Co nas wyróżnia?' });
    }
}