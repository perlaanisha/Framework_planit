import { expect, Page } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) {}

    async verifySubtotal(product: string) {
        

        const row = this.page.locator(`tr:has-text("${product}")`);

        const price = Number((await row.locator('td').nth(1).textContent())?.replace('$',''));

        const quantity = Number(await row.locator('input').inputValue());

        const subtotal = Number((await row.locator('td').nth(3).textContent())?.replace('$',''));
       
        const priceText = await row.locator('td').nth(1).textContent();
const quantityText = await row.locator('input').inputValue();
const subtotalText = await row.locator('td').nth(3).textContent();

console.log("Price:", priceText);
console.log("Quantity:", quantityText);
console.log("Subtotal:", subtotalText);

        expect(subtotal).toBe(price * quantity);
    }

    async verifyTotal() {

        const subtotals = await this.page.locator('tbody tr td:nth-child(4)').allTextContents();

         let total = 0;

         for (const value of subtotals) {
             total += Number(value.replace('$',''));
           }
       const expecttotal = 'Total: '+ total ;

        //const cartTotal = Number((await this.page.locator('strong.total.ng-binding').textContent())?.replace('Total: $',''));


console.log(subtotals);

const totalText = await this.page.getByText('Total:').textContent();
console.log(totalText);

        expect(totalText).toBe(expecttotal);

    }

}