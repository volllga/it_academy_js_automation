module.exports = class ModalForm {
  get inputDriver() {
    return $('//label[text()="Driver"]/..//input');
  }
  get inputVendor() {
    return $('//label[text()="Vendor"]/..//input');
  }
  get formTitle() {
    return $(".c-modal-sliding__title h5");
  }
  get buttonClose() {
    return $(".c-modal-sliding__footer .c-button--black");
  }
  get buttonSave() {
    return $('//*[@class="fa fa-check"]/../..');
  }
  get alertSuccess() {
    return $('[class="c-alert c-alert--success"]');
  }

  async setValue(element, value) {
    await element.waitForDisplayed();
    await element.setValue(value);
    await browser.keys("Enter");
  }

  async saveAndClose() {
    await this.buttonSave.click();
    await browser.pause(1000);
    await this.buttonClose.click();
  }
};
