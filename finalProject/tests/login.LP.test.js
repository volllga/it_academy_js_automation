const LoginPage = require('../page.Objects/login.page');
const assert = require("assert");
const LoadsPage = require("../page.Objects/loads.page");


describe.skip('Login from LP ', () => {
    it('should have the right title', async () => {
        await browser.url('https://ezloads.net');
        const title = await browser.getTitle();
        assert.strictEqual(title, 'ezLoads.net - Next generation transportation software');
    });

    it('should login with valid credentials', async () => {
        await $('#header__signin-button').click();
        await LoginPage.inputEmail.setValue(this.useremail);
        await LoginPage.inputPassword.setValue(this.password);
        await LoginPage.btnSubmit.click();
        await (LoadsPage.userName).waitForDisplayed({ timeout: 200000 })
            .then(await expect(LoadsPage.userName).toHaveTextContaining(this.user));
        // await browser.pause(2000)
    });
});
