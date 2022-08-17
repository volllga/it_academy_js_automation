const PageObject = require('./page.Object');
const DatatableDriversObject = require("../components.Objects/datatables.Objects/datatable.Drivers.Object");
const ModalConfirmObject = require("../components.Objects/modal.Objects/modal.Confirm.Object");

class PageVendorsObject extends PageObject {

    open() {return super.open(`partners/vendors`)}

    async deleteVendor(firstName, lastName) {
        await this.open();
        await this.inputSearch.setValue(`${firstName} ${lastName}`);
        await  browser.pause(2000);
        await DatatableDriversObject.rowDropdown.click();
        await DatatableDriversObject.btnDelete.click();
        await ModalConfirmObject.buttonDelete.click();
    }

}

module.exports = new PageVendorsObject();