const ModalObject = require("./modal.Object");

class ModalSheduledPaymentObject extends ModalObject {
  get radioAdd() {
    return $('.c-input-radio-group [for="payments-type__1"]');
  }
  get radioDeduct() {
    return $('.c-input-radio-group [for="payments-type__2"]');
  }
  get radioLoan() {
    return $('.c-input-radio-group [for="payments-type__3"]');
  }
  get radioEscrow() {
    return $('.c-input-radio-group [for="payments-type__4"]');
  }

  get inputAmount() {
    return $("#payments-amount");
  }
  get inputDeductBy() {
    return $("#deduct-by");
  }
  get inputCategory() {
    return $('//label[text()="Category"]/..//input');
  }
  get selectCategory() {
    return $(
      '//label[text()="Category"]/..//*[@class="c-select__input c-select__input--default"]'
    );
  }

  get btnPause() {
    return $(
      '[class="c-button-save c-button c-button--warning c-button--normal sched-payments-pause-btn"]'
    );
  }
  get btnResume() {
    return $(".sched-payments-pause-btn--paused");
  }
  get notificationOnPause() {
    return $(".sched-payments-paused-at");
  }
  get notificationNext() {
    return $(".scheduled-payments-form__main > div:nth-child(3) > span");
  }

  async fillInputDriver(driver) {
    await this.inputDriver.setValue(driver);
    await browser.keys("Enter");

    return await this.inputDriver.getAttribute("placeholder");
  }

  async fillInputAmount(amount) {
    await this.inputAmount.setValue(amount);
    await browser.keys("Enter");

    return await this.inputAmount.getProperty("valueAsNumber");
  }

  async fillInputDeductBy(deduct) {
    await this.inputDeductBy.setValue(deduct);
    await browser.keys("Enter");

    return await this.inputDeductBy.getProperty("valueAsNumber");
  }

  async fillInputCategory(category) {
    await this.inputCategory.click();
    await browser.keys(category);
    await browser.keys("Enter");
    await browser.pause(2000);

    return await this.selectCategory.getProperty("innerText");
  }
}

module.exports = new ModalSheduledPaymentObject();
