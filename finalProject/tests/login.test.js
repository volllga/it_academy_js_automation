const PageLoginObject = require('../page.Objects/page.Login.Object');
const TestEnv = require('../documentation/test.env');


describe('Login tests.', () => {

  it('Login Page should have the title "ezLoads.net - login"', async () => {
    await PageLoginObject.openLoginPage();
    expect(await browser.getTitle()).toContain('ezLoads.net - login');
  });

  it('User can not login with Wrong email address', async () => {
    await PageLoginObject.loginWithCredentials('wrongEmail', TestEnv.password);
    expect(await PageLoginObject.feedbackEmail.getText()).toContain('Wrong email address');
  });

  it('User can not login with Incorrect password', async () => {
    await PageLoginObject.loginWithCredentials(TestEnv.userEmail, 'wrongPass');
    expect(await PageLoginObject.feedbackPassword.getText()).toContain('Incorrect Password');
  });

  it('User can not login Invalid email address and with Incorrect password', async () => {
    await  browser.url(PageLoginObject.portalUrl);
    await PageLoginObject.btnSingIn.click();
    await PageLoginObject.inputEmail.click();
    await browser.keys('invalid@mail.ezloads.net');
    await PageLoginObject.inputPassword.click();
    await browser.keys('wrong_password');
    await PageLoginObject.btnSubmit.click();
    await PageLoginObject.feedbackLoginForm.waitForDisplayed({timeout: 3000});
    expect(await PageLoginObject.feedbackLoginForm.getText()).toContain('Invalid username or password');
  });

  it('User can login with valid credentials', async () => {
    await PageLoginObject.login();
  });
});
