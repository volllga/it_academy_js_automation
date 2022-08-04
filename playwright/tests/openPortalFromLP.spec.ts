import { test, expect } from '@playwright/test';
import { cred } from '../cred';
import {chromium} from 'playwright';

test('test', async ({ page }) => {
    
    // Go to https://ezloads.net/
    await page.goto('https://ezloads.net/');

    // Click #header__burger-menu
    await page.locator('#header__burger-menu').click();

    // Click #header__signin-button
    await page.locator('#header__signin-button').click();

    // // Click text=Email Wrong email address >> [placeholder="Your e-mail"]
    // await page.locator('[placeholder="Your e-mail"]').click();

    // Fill text=Email Wrong email address >> [placeholder="Your e-mail"]
    await page.locator('#login-form__email').fill(cred.userEmail);

    // Fill [placeholder="Your password"]
    await page.locator('#login-form__password').fill(cred.password);

    // Click #login-form__login-button
    await page.locator('#login-form__login-button').click();
    await expect(page).toHaveURL('https://ezloads.net/apps');

    // Click text=Open app >> nth=0
    const [page1] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('text=Open app').first().click()
    ]);

    // // Go to https://s1-olgatest-llc.ezloads.net/welcome
    // await page1.goto('https://s1-olgatest-llc.ezloads.net/welcome');


    // // Click header:has-text("volga")
    // const user = await page1.locator('shell__account-info-name');
    // await expect(user) .toHaveText(cred.user);


});