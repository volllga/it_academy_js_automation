const ElementUtil = require('../helpers/elementUtil');

module.exports = class Page {
  get buttonScrollBack() {return $('.backToTopButtonShow_ssHd');}

  
  open (path) {
    return browser.url(`https://webdriver.io/${path}`);
  }

  get pageHeader() {return $('h1');}
  get breadcrumbsLinks(){return $$('.breadcrumbs__link');}
  get footerLogo(){return('.footer__logo');}

  async click(element) {
    await ElementUtil.doClick(element);
  }

  getText(element) {
    return ElementUtil.doGetText(element);
  }


};