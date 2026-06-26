import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ContactPage } from '../../pages/ContactPage';

for (let i = 1; i <= 5; i++) {

test(`Submit form - Run ${i}`, async ({ page }) => {

    const home = new HomePage(page);
    const contact = new ContactPage(page);

    await home.open();
    await home.clickContact();

    await contact.fillDetails();

    await contact.submit();

    await contact.verifySuccess();

});

}