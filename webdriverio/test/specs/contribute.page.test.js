const ContributePage = require('../pageobjects/contribute .page');
const FooterComponent = require('../components/footer.component');


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

  it('Button ScrollBack should change a CSS Property visibility from "hidden" to "visible" after scroll up', async () => {
    await ContributePage.open();
    const buttonScrollBackHidden = await ContributePage.buttonScrollBackHidden;
    const visibilityHidden = await buttonScrollBackHidden.getCSSProperty('visibility');

    expect(visibilityHidden.value).toEqual('hidden');

    await FooterComponent.footer.scrollIntoView();
    await $('iframe').scrollIntoView();
    const buttonScrollBackVisible = await ContributePage.buttonScrollBackVisible;
    const visibilityVisible = await buttonScrollBackVisible.getCSSProperty('visibility');

    expect(visibilityVisible.value).toEqual('visible');
  });

});