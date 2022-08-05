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
    // const nameField = await page.$('#trial-form__name');
    const companyField = await page.$('#trial-form__company');
    const phoneField = await page.$('#trial-form__phone');
    const emailField = await page.$('#trial-form__email');

    // await nameField?.type('new user');
    await companyField?.type('Auto Test');
    await phoneField?.type('122 344-4443');
    await emailField?.type('auto@test.com');
    await page.locator('#trial-form__submit').click();
    const feedback = await page.locator('#trial-form__name-feedback.trial-form__message--visible');

    await expect(feedback).toHaveText('Wrong name');
});

test('Trial Form has mandatory field Your company"', async () => {

    const nameField = await page.$('#trial-form__name');
    const companyField = await page.$('#trial-form__company');
    const phoneField = await page.$('#trial-form__phone');
    const emailField = await page.$('#trial-form__email');

    // await nameField?.type('new user');
    await nameField?.fill('Auto Test');
    await companyField?.focus();
    await page.keyboard.press('Backspace');
    await phoneField?.type('122 344-4443');
    await emailField?.type('auto@test.com');
    await page.locator('#trial-form__submit').click();
    const feedback = await page.locator('#trial-form__company-feedback.trial-form__message--visible');

    await expect(feedback).toHaveText('Wrong company name');
});

test('Trial Form has mandatory field Phone number"', async () => {

    const nameField = await page.$('#trial-form__name');
    const companyField = await page.$('#trial-form__company');
    // const phoneField = await page.$('#trial-form__phone');
    const emailField = await page.$('#trial-form__email');

    // await nameField?.type('new user');
    await nameField?.fill('Auto Test');
    await companyField?.fill('Auto Test');
    await page.fill('#trial-form__phone', ''); // !!!!!!!!!!!!
    await emailField?.type('auto@test.com');
    await page.locator('#trial-form__submit').click();
    const feedback = await page.locator('#trial-form__phone-feedback.trial-form__message--visible');

    await expect(feedback).toHaveText('Wrong phone number');
});

test('Trial Form has mandatory field Email"', async () => {

    const nameField = await page.$('#trial-form__name');
    const companyField = await page.$('#trial-form__company');
    // const phoneField = await page.$('#trial-form__phone');
    // const emailField = await page.$('#trial-form__email');

    // await nameField?.type('new user');
    await nameField?.fill('Auto Test');
    await companyField?.fill('Auto Test Company');
    await page.fill('#trial-form__phone', '122 3444443'); // !!!!!!!!!!!!
    await page.fill('#trial-form__email', '');
    await page.locator('#trial-form__submit').click();
    const feedback = await page.locator('#trial-form__email-feedback.trial-form__message--visible');

    await expect(feedback).toHaveText('Wrong email address');
});

test('Contest form opens after clicking Sing in if all the fields have valid data', async () => {

    const nameField = await page.$('#trial-form__name');
    const companyField = await page.$('#trial-form__company');
    // const phoneField = await page.$('#trial-form__phone');
    // const emailField = await page.$('#trial-form__email');

    // await nameField?.type('new user');
    await nameField?.fill('Auto Test');
    await companyField?.fill('Auto Test Company');
    await page.fill('#trial-form__phone', '122 3444443'); // !!!!!!!!!!!!
    await page.fill('#trial-form__email', 'auto@test.com');
    await page.locator('#trial-form__submit').click();
    const contestFormTitle = await page.locator('#trial-confirmation__adds-questions-form h4');

    await expect(contestFormTitle).toHaveText('Please answer a few questions');
});

test('Captcha form opens after clicking Confirm if all options were chosen', async () => {

    const nameField = await page.$('#trial-form__name');
    const companyField = await page.$('#trial-form__company');
    // const phoneField = await page.$('#trial-form__phone');
    // const emailField = await page.$('#trial-form__email');

    // await nameField?.type('new user');
    await nameField?.fill('Auto Test');
    await companyField?.fill('Auto Test Company');
    await page.fill('#trial-form__phone', '122 3444443');
    await page.fill('#trial-form__email', 'auto@test.com');
    await page.locator('#trial-form__submit').click();
    const contestFormTitle = await page.locator('#trial-confirmation__adds-questions-form h4');

    // await expect(contestFormTitle).toHaveText('Please answer a few questions');

    const sizeCompany = await page.$('#adds-questions__0');
    const howHear = await page.$('#adds-questions__1');
    const buttonConfirm = await page.$('#confirm-trial_btn');
    const captchaTitle = await page.locator('.captcha-form__title'); //!!!!!!!!!!

    await sizeCompany?.selectOption('2');
    // if(sizeCompany) {
    //     console.log(await sizeCompany.textContent());
    //     expect(await sizeCompany.textContent()).toContain('10-20');
    // }
    await howHear?.selectOption('3');
    // if(howHear) {
        // expect(await howHear.textContent()).toContain('instagram');
    // }
    await buttonConfirm?.click();

    await expect(captchaTitle).toHaveText('Enter the folowing:'); //todo bug
    await page.pause();
});

test.afterEach(async () => {
    await page.reload();
});

test.afterAll(async () => {
    await page.close();
    await context.close();
    await browser.close();
});
