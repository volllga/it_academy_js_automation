const PageObject = require("./page.Object");
const DatatableDriversObject = require("../components.Objects/datatables.Objects/datatable.Drivers.Object");
const ModalConfirmObject = require("../components.Objects/modal.Objects/modal.Confirm.Object");
const ModalNewDriverObject = require("../components.Objects/modal.Objects/modal.NewDriver.Object");

class PageDriversObject extends PageObject {
  open() {
    return super.open(`drivers`);
  }

  async openModalNewDriver() {
    await this.open();
    await this.buttonNew.click();
    await ModalNewDriverObject.formTitle.waitForClickable({ timeout: 30000 });

    expect(await ModalNewDriverObject.formTitle.getText()).toContain(
      "New driver"
    );
  }

  async deleteDriver(firstName, lastName) {
    await this.open();
    await this.inputSearch.setValue(`${firstName} ${lastName}`);
    await browser.pause(2000);
    await DatatableDriversObject.rowDropdown.click();
    await DatatableDriversObject.btnDeleteDriver.click();
    await ModalConfirmObject.buttonDelete.click();
  }

  async chooseCoDriver(coDriver) {
    await ModalNewDriverObject.inputCoDriver.setValue(coDriver);
    await browser.keys("Enter");
    await browser.pause(2000);

    expect(
      await ModalNewDriverObject.inputCoDriver.getProperty("placeholder")
    ).toContain(coDriver);
  }
}

module.exports = new PageDriversObject();
