import { test, expect, Browser, BrowserContext, chromium, Page} from '@playwright/test';
import { cred } from '../cred';
import  HomePage  from '../pages/Home.page';

let browser: Browser;
let context: BrowserContext;
let page: Page;
let homePage: HomePage;


test.beforeAll(async () => {
    browser = await chromium.launch(({headless: true}));
    context = await browser.newContext();
    page = await context.newPage();
    homePage = new HomePage(page);
    await page.goto(cred.url);
});

test.beforeEach(async () => {
    await page.reload();
});

test('Home Page has Trial Form', async () => {
    const trialForm = await page.locator('#trial-form');

    await expect(trialForm).toBeVisible();
});

test('Trial Form has title "Get your Free 15-day trial now"', async () => {
    const trialHeader = await homePage.getTrialHeader();

    await expect(trialHeader).toBe('Get your Free 15-day trial now');
});

test('Trial Form has mandatory field Your name"', async () => {
    await homePage.fillTrialForm('', 'company', '9999999999', 'auto@test.com');
    const feedback = await page.locator('#trial-form__name-feedback.trial-form__message--visible');

    await expect(feedback).toHaveText('Wrong name');
});

test('Trial Form has mandatory field Your company"', async () => {
    await homePage.fillTrialForm('test', '', '9999999999', 'auto@test.com');
    const feedback = await page.locator('#trial-form__company-feedback.trial-form__message--visible');

    await expect(feedback).toHaveText('Wrong company name');
});

test('Trial Form has mandatory field Phone number"', async () => {
    await homePage.fillTrialForm('test', 'company', '', 'auto@test.com');
    const feedback = await page.locator('#trial-form__phone-feedback.trial-form__message--visible');

    await expect(feedback).toHaveText('Wrong phone number');
});

test('Trial Form has mandatory field Email"', async () => {
    await homePage.fillTrialForm('test', 'company', '9999999999', '');
    const feedback = await page.locator('#trial-form__email-feedback.trial-form__message--visible');

    await expect(feedback).toHaveText('Wrong email address');
});

// these two tests are skipped for No Spam reasons

test.skip('Contest form opens after clicking Sing in if all the fields have valid data', async () => {
    await homePage.fillTrialForm('test', 'company', '9999999999', 'auto@test.com');
    const contestFormTitle = await homePage.contestFormTitle();

    await expect(contestFormTitle?.innerText()).toContain('Please answer a few questions');
});

test.skip('Captcha form opens after clicking Confirm if all options were chosen', async () => {
    await homePage.fillTrialForm('test', 'company', '9999999999', 'auto@test.com');
    const sizeCompany = await page.$('#adds-questions__0');
    const howHear = await page.$('#adds-questions__1');
    const buttonConfirm = await page.$('#confirm-trial_btn');
    const captchaTitle = await page.locator('.captcha-form__title'); //!!!!!!!!!!
    await sizeCompany?.selectOption('2');
    // if(sizeCompany) {
    //     expect(await sizeCompany.textContent()).toContain('10-20');
    // }
    await howHear?.selectOption('3');
    // if(howHear) {
        // expect(await howHear.textContent()).toContain('instagram');tegretg
    // }
    await buttonConfirm?.click();

    await expect(captchaTitle).toHaveText('Enter the folowing:'); //todo bug
});

test.afterEach(async () => {
    await page.reload();
});