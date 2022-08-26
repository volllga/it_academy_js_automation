import { test, expect } from '@playwright/test';
import { cred } from '../cred';
import  Header  from '../components/Header';
import  ModalForm  from '../components/Modal.Form';

let header: Header;
let modalForm: ModalForm;

test('User can open first portal from landing page', async ({ page }) => {

    header = new Header(page);
    modalForm = new ModalForm(page);

    await page.goto(cred.url);
    await header.openLogInForm();
    await modalForm.enterEmail(cred.userEmail);
    await modalForm.enterPassword(cred.password);
    await modalForm.clickSignIn();

    await expect(page).toHaveURL('https://ezloads.net/apps');

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('text=Open app').first().click()
    ]);
    await newPage.waitForNavigation();
    await expect(newPage.url()).toContain(cred.portal);
});