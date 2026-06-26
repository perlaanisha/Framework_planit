import { expect, Page } from '@playwright/test';

export class ContactPage {

    constructor(private page: Page) {}

    async submit() {
        await this.page.click('text=Submit');
    }

    async fillDetails() {
        await this.page.fill('#forename', 'John');
        await this.page.fill('#email', 'john@test.com');
        await this.page.fill('#message', 'Testing');
    }

    async verifyErrors() {
        await expect(this.page.locator('#forename-err')).toBeVisible();
        await expect(this.page.locator('#email-err')).toBeVisible();
        await expect(this.page.locator('#message-err')).toBeVisible();
    }

    async verifyNoErrors() {
        await expect(this.page.locator('#forename-err')).toBeHidden();
        await expect(this.page.locator('#email-err')).toBeHidden();
        await expect(this.page.locator('#message-err')).toBeHidden();
    }

    async verifySuccess() {
        await expect(this.page.locator('.alert-success')).toContainText('Thanks');
    }

}