const PageObject = require("./page.Object");
const ModalConfirmObject = require("../components.Objects/modal.Objects/modal.Confirm.Object");
const ModalScheduledPaymentObject = require("../components.Objects/modal.Objects/modal.SheduledPayment.Object");

class PageScheduledPaymentsObject extends PageObject {
  open() {
    return super.open(`accounting/scheduled-payments`);
  }

  get modalWrapper() {
    return $(".c-modal-sliding__wrapper");
  }
  get buttonNew() {
    return $('//*[@class="fa fa-file-text-o"]/..');
  }
  get btnRunNow() {
    return $('//*[@class="fa fa-play"]/..');
  }
  get btnsSortDesc() {
    return $$(
      ".datatable__table-sort .datatable__table-sort-desc.icon-table-filters"
    );
  }

  get tableHeaderID() {
    return $("#scheduledPayments-datatable thead th:nth-child(1)");
  }
  get firstTableCell() {
    return $(
      "#scheduledPayments-datatable tbody tr:nth-child(2) td:nth-child(1)"
    );
  }
  get allCaretDown() {
    return $$('//*[@class="d-flex gap-20"]//*[@class="fa fa-caret-down"]/..');
  }
  get dropdownDelete() {
    return $(".dropdown-actions__item--danger ");
  }

  async getTopCellID() {
    const topCellID = await this.firstTableCell.getProperty("innerText");
    return Number(topCellID);
  }

  async getLastID(firstTableCell, buttonsSortDesc) {
    const buttonSortIDDesc = buttonsSortDesc[0];
    expect(buttonSortIDDesc).toBeClickable();
    await buttonSortIDDesc.click();
    await browser.pause(2000); //we should wait because to update sort takes a time

    await buttonSortIDDesc.click();
    await browser.pause(3000); //we should wait because to update sort takes a time
    return await this.firstTableCell.getProperty("innerText");
  }

  async deleteLastPayment() {
    await browser.pause(2000);
    const firstCaretDown = await this.allCaretDown[0];
    await firstCaretDown.click();
    await browser.waitUntil(this.dropdownDelete.isClickable);
    await this.dropdownDelete.click();
    await browser.waitUntil(ModalConfirmObject.buttonDelete.isClickable);
    await ModalConfirmObject.buttonDelete.click();
    await browser.pause(2000);
    expect(await this.alert.getText()).toContain("Success");

    const topID = await this.getTopCellID();
    console.log(
      `New payment was deleted. TopID is stored after test: ${topID}`
    );
  }

  async createScheduledAddDed(driver, vendor, amount, category, type) {
    await this.buttonNew.click();
    await browser.pause(2000);

    const inputDriver = await ModalScheduledPaymentObject.fillInputDriver(
      driver
    );
    const inputVendor =
      await ModalScheduledPaymentObject.inputVendor.getAttribute("placeholder");

    if (type === "addition") {
      // work only here!!! do not move!!!
      await ModalScheduledPaymentObject.radioAdd.click();
    } else if (type === "deduction") {
      await ModalScheduledPaymentObject.radioDeduct.click();
    } else {
      console.log("wrong payment type");
    }

    const inputAmount = await ModalScheduledPaymentObject.fillInputAmount(
      amount
    );
    const inputCategory = await ModalScheduledPaymentObject.fillInputCategory(
      category
    );

    expect(inputDriver).toEqual(driver);
    expect(inputVendor).toEqual(vendor);
    expect(String(inputAmount)).toBe(amount);
    expect(inputCategory).toHaveTextContaining(category);

    await ModalScheduledPaymentObject.saveAndClose();
  }

  async createScheduledLoanEscrow(
    driver,
    vendor,
    amount,
    deductBy,
    category,
    type
  ) {
    await this.buttonNew.click();
    await browser.pause(2000);

    const inputDriver = await ModalScheduledPaymentObject.fillInputDriver(
      driver
    );
    const inputVendor =
      await ModalScheduledPaymentObject.inputVendor.getAttribute("placeholder");

    if (type === "loan") {
      // work only here!!! do not move!!!
      await ModalScheduledPaymentObject.radioLoan.click();
    } else if (type === "escrow") {
      await ModalScheduledPaymentObject.radioEscrow.click();
    } else {
      console.log("wrong payment type");
    }

    const inputAmount = await ModalScheduledPaymentObject.fillInputAmount(
      amount
    );
    const inputDeduct = await ModalScheduledPaymentObject.fillInputDeductBy(
      deductBy
    );
    const inputCategory = await ModalScheduledPaymentObject.fillInputCategory(
      category
    );

    expect(inputDriver).toEqual(driver);
    expect(inputVendor).toEqual(vendor);
    expect(String(inputAmount)).toBe(amount);
    expect(String(inputDeduct)).toBe(deductBy);
    expect(inputCategory).toHaveTextContaining(category);

    await ModalScheduledPaymentObject.saveAndClose();
  }
}

module.exports = new PageScheduledPaymentsObject();
