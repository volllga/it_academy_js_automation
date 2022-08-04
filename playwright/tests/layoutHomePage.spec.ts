import { test, expect, Browser, BrowserContext, chromium, Page} from '@playwright/test';
import { cred } from '../cred';


let browser: Browser;
let context: BrowserContext;
let page: Page;

test.beforeAll(async () => {
    browser = await chromium.launch(({headless: true}));
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://ezloads.net');
});

test('Home Page has Trial Form', async () => {
    const trialForm = await page.locator('#trial-form');

    await expect(trialForm).toBeVisible();
});

test('Trial Form has title "Get your Free 15-day trial now"', async () => {
    const trialForm = await page.locator('#trial-form__server-message h5');

    await expect(trialForm).toHaveText('Get your Free 15-day trial now');
});

test('Trial Form has mandatory field Your name"', async () => {
    const nameField = await page.$('#trial-form__name');
    const companyField = await page.$('#trial-form__company');
    const phoneField = await page.$('#trial-form__phone');
    const emailField = await page.$('#trial-form__email');

    // await nameField?.type('new user');
    await companyField?.type('company A');
    await phoneField?.type('122 344-4443');
    await emailField?.type('newuser@test.com');
    await page.locator('#trial-form__submit').click();
    const feedback = await page.locator('#trial-form__name-feedback');

    await expect(feedback).toHaveText('Wrong name');
});
