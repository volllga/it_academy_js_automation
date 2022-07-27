const ContributePage = require('../pageobjects/contribute .page');


describe('Contribute page tests', () => {
  before('Open Contribute page', async () => {
    browser.maximizeWindow();
    await ContributePage.open();
  });

  it('Contribute page has title "Contribute | WebdriverIO"', async () => {
    const title = await browser.getTitle();

    expect(title).toEqual('Contribute | WebdriverIO');
  });

  it('Contribute page has header "Contribute"', async () => {
    const header = await ContributePage.getText(ContributePage.pageHeader);

    expect(header).toEqual('Contribute');
  });

  it('Footer should have the Logo save a screenshot of footer Logo', async () => {
    const footerLogo = await $('.footer__logo');
    await footerLogo.scrollIntoView();
    await footerLogo.saveScreenshot('./screenshots/footerLogo.png');
  });

  it('button ScrollBack should have a CSS Property visibility: "visible"', async () => {
    await ContributePage.open();
    const buttonScrollBack = await ContributePage.buttonScrollBack;
    await $('theme-edit-this-page').scrollIntoView();
    await $('iframe').scrollIntoView();
    const visibility = await buttonScrollBack.getCSSProperty('visibility');

    expect(visibility.value).toEqual('visible');
  });

});