import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ShopPage } from '../../pages/ShopPage';
import { CartPage } from '../../pages/CartPage';

test('Verify Cart', async ({ page }) => {

    const home = new HomePage(page);
    const shop = new ShopPage(page);
    const cart = new CartPage(page);

    await home.open();

    await home.clickShop();
    
    await shop.buyProduct('Stuffed Frog', 2);
    await shop.buyProduct('Fluffy Bunny', 5);
    await shop.buyProduct('Valentine Bear', 3);

    await home.clickCart();

    await cart.verifySubtotal('Stuffed Frog');
    await cart.verifySubtotal('Fluffy Bunny');
    await cart.verifySubtotal('Valentine Bear');

    await page.waitForTimeout(2000);

    await cart.verifyTotal();

});