module.exports = class Page {
  get logo() {
    return $(".shell__logo");
  }
  get userName() {
    return $(".shell__account-info-name");
  }
  get pageHeader() {
    return $(".c-container-header strong");
  }
  get buttonNew() {
    return $('//button[contains(text(), "New")]');
  }
  get inputSearch() {
    return $('[placeholder="Search"]');
  }
  get buttonFilters() {
    return $('[title="Extended Filter"]');
  }
  get alert() {
    return $(".c-toastr__notify span");
  }

  open(path) {
    return browser.url(`/${path}`);
  }
};
