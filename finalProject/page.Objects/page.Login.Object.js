const PageLoadsObject = require("./page.Loads.Object");
const TestEnv = require("../docs/test.env");

class PageLoginObject {
  constructor() {
    this.useremail = TestEnv.userEmail;
    this.password = TestEnv.password;
    this.user = TestEnv.user;
    this.loginUrl = TestEnv.loginUrl;
    this.portalUrl = TestEnv.portalUrl;
  }

  get btnSubmit() {
    return $("#login-form__login-button");
  }
  get btnSingIn() {
    return $(".c-button-save");
  }
  get inputEmail() {
    return $("#login-form__email");
  }
  get inputPassword() {
    return $("#login-form__password");
  }
  get feedbackEmail() {
    return $("#login-form__email-feedback");
  }
  get feedbackPassword() {
    return $("#login-form__password-feedback");
  }
  get feedbackLoginForm() {
    return $("h5");
  }

  openLoginPage() {
    return browser.url(this.loginUrl);
  }

  async login() {
    await browser.url(this.portalUrl);
    await this.btnSingIn.click();
    await this.inputEmail.setValue(this.useremail);
    await this.inputPassword.setValue(this.password);
    await this.btnSubmit.click();
    await PageLoadsObject.userName
      .waitForDisplayed({ timeout: 200000 })
      .then(
        await expect(PageLoadsObject.userName).toHaveTextContaining(this.user)
      );
  }

  async loginWithCredentials(email, password) {
    await browser.url(this.portalUrl);
    await this.btnSingIn.click();
    await this.inputEmail.click();
    await browser.keys(email);
    await browser.keys("Enter");
    await browser.keys(password);
    await browser.keys("Enter");
  }
}

module.exports = new PageLoginObject();
