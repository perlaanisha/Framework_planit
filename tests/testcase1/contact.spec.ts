import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ContactPage } from '../../pages/ContactPage';

test('Validate mandatory fields', async ({ page }) => {

    const home = new HomePage(page);
    const contact = new ContactPage(page);

    await home.open();
    await home.clickContact();

    await contact.submit();

    await contact.verifyErrors();

    await contact.fillDetails();

    await contact.verifyNoErrors();

});