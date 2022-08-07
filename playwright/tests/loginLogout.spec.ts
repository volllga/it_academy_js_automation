import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';
import { cred } from '../cred';
import  Header  from '../components/Header';
import  ModalForm  from '../components/Modal.Form';

let header: Header;
let modalForm: ModalForm;

test.describe('Home page tests', () => {

    test('Page "https://ezloads.net" has title "ezLoads.net - Next generation transportation software"', async () => {
        const browser = await chromium.launch({
            // headless: false
            headless: true
        });
        const context = await  browser.newContext({
            // recordVideo: {
            //     dir: './videos/',
            //     size: {
            //         width: 800,
            //         height: 600
            //     }
            // }
        });
        const page = await context.newPage();
        header = new Header(page);
        modalForm = new ModalForm(page);


        await page.goto(cred.url);
        await expect(page).toHaveTitle(/ezLoads.net - Next generation transportation software/);
        await header.openLogInForm();
        await modalForm.enterEmail(cred.userEmail);
        await modalForm.enterPassword(cred.password);
        await modalForm.clickSignIn();
        const userName = await header.getUserName();
        await expect(userName).toBe(cred.user);
        await header.logOut();
        await browser.close();
    });
});