import { Page } from '@playwright/test';

export class ShopPage {

    constructor(private page: Page) {}

    async buyProduct(product: string, quantity: number) {

        for (let i = 0; i < quantity; i++) {
            await this.page.locator(`li:has-text("${product}") >> text=Buy`).click();
        }

    }

}
