const PageObject = require('./page.Object');
const DatatableDriversObject = require("../components.Objects/datatables.Objects/datatable.Drivers.Object");
const ModalConfirmObject = require("../components.Objects/modal.Objects/modal.Confirm.Object");

class PageDriversObject extends PageObject {

    open() {return super.open(`drivers`)}

    async deleteDriver(firstName, lastName) {
        await this.open();
        await this.inputSearch.setValue(`${firstName} ${lastName}`);
        await  browser.pause(2000);
        await DatatableDriversObject.rowDropdown.click();
        await DatatableDriversObject.btnDeleteDriver.click();
        await ModalConfirmObject.buttonDelete.click();
    }
}

module.exports = new PageDriversObject();
