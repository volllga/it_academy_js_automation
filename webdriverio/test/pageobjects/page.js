module.exports = class Page {
  
  open (path) {
    return browser.url(`https://webdriver.io/${path}`);
  }

  // get pageTitle() {return browser.getTitle;}
  get pageHeader() {return $('h1');}
  get breadcrumbsLinks(){return $$('.breadcrumbs__link');}

};