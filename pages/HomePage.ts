import { Page } from '@playwright/test';

export class HomePage {

    constructor(private page: Page) {}

    async open() {
        await this.page.goto('/');
    }

    async clickContact() {
        await this.page.click('#nav-contact');
    }

    async clickShop() {
        await this.page.click('#nav-shop');
    }

    async clickCart() {
        await this.page.click('#nav-cart');
    }

}