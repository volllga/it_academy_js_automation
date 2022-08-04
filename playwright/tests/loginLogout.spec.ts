import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';
import { cred } from '../cred';


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
        await page.goto('https://ezloads.net');
        await expect(page).toHaveTitle(/ezLoads.net - Next generation transportation software/);
        await page.click('#header__burger-menu');
        await page.click('#header__signin-button');
        await page.fill('#login-form__email', cred.userEmail);
        await page.fill('#login-form__password', cred.password);
        await page.click('#login-form__login-button');
        await page.click('#header__burger-menu');
        await page.click('text=Log out');
        // await page.pause(); // open Playwright inspector
        await browser.close();



    });
});