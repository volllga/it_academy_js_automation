const GettingStartedPage = require('../pageobjects/gettingStarted.page');
// const ElementUtil = require('../helpers/elementUtil');


describe('Getting Started page tests', () => {
  before('Open Getting Started page', async () => {
    await browser.maximizeWindow();
    await GettingStartedPage.open();
  });

  it('Getting Started page has title header "Getting Started"\'', async () => {
    const title = await browser.getTitle();

    expect(title).toEqual('Getting Started | WebdriverIO');
  });

  it('Getting Started page has h1 header "Getting Started"', async () => {
    await expect(GettingStartedPage.pageHeader).toBeExisting();
    await expect(GettingStartedPage.pageHeader).toHaveTextContaining(
      'Getting Started');
  });

  it('Getting Started page has Alert block', async () => {
    expect(GettingStartedPage.alertInfoBlock).toExist();
  });

  it('Alert block has rgba(25,60,71,1) background-color', async () => {
    const color = await GettingStartedPage.alertInfoBlock.getCSSProperty('background-color');

    expect(color.value).toBe('rgba(25,60,71,1)');
  });

  // в этом тесте использован element API метод click()
  it('Breadcrumb Home page leads to https://webdriver.io/', async () => {
    const breadcrumbHome = await GettingStartedPage.breadcrumbsLinks[0];
    await breadcrumbHome.click();
    const pageUrl = await  browser.getUrl();

    expect(pageUrl).toEqual('https://webdriver.io/');
    await browser.back(); // тесты расположены в неверном порядке специально, чтобы потренировать browser.back()
  });

  // в этом тесте использован  метод click(element) из модуля elementUtil
  it('Alert block has link "old documentation websites" that lead to /versions', async () => {

    const link = await $('.admonition-content  a');
    const linkText = await GettingStartedPage.getText(link);

    expect(linkText).toBe('old documentation websites');

    await GettingStartedPage.click(link);
    const pageUrl = await browser.getUrl();

    expect(pageUrl).toEqual('https://webdriver.io/versions');
  });

});