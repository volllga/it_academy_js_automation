const PageObject = require('./page.Object');
const ModalConfirmObject = require("../components.Objects/modal.Objects/modal.Confirm.Object");


class PageScheduledPaymentsObject extends PageObject {

    open() {return super.open(`accounting/scheduled-payments`)}

    get modalWrapper(){return $('.c-modal-sliding__wrapper')}

    get buttonNew() {return $('//*[@class="fa fa-file-text-o"]/..')}
    get buttonRunNow(){return $('//*[@class="fa fa-play"]/..')}
    get buttonsSortDesc(){return $$('.datatable__table-sort .datatable__table-sort-desc.icon-table-filters')}

    get tableHeaderID(){return $('#scheduledPayments-datatable thead th:nth-child(1)')}


    get firstTableCell(){return $('#scheduledPayments-datatable tbody tr:nth-child(2) td:nth-child(1)')}
    get allCaretDown(){return $$('//*[@class="d-flex gap-20"]//*[@class="fa fa-caret-down"]/..')}
    get dropdownDelete(){return $('.dropdown-actions__item--danger ')}


    async getTopCellID() {
        const topCellID = await this.firstTableCell.getProperty('innerText');
        return Number(topCellID);
    }

    async getLastID(firstTableCell, buttonsSortDesc) {
        const buttonSortIDDesc = buttonsSortDesc[0];
        expect(buttonSortIDDesc).toBeClickable();
        await buttonSortIDDesc.click();
        await browser.pause(2000);//we should wait because to update sort takes a time

        await buttonSortIDDesc.click();
        await browser.pause(3000);//we should wait because to update sort takes a time
        return  await this.firstTableCell.getProperty('innerText');

    }

    getStatusColor(status) {
        return $(`.loads-table-row__status=${status}`);
    }

    async deleteLastPayment() {
        await browser.pause(2000);
        const firstCaretDown = await this.allCaretDown[0];
        await firstCaretDown.click();
        await browser.waitUntil(this.dropdownDelete.isClickable);
        await  this.dropdownDelete.click();
        await browser.waitUntil(ModalConfirmObject.buttonDelete.isClickable);
        await ModalConfirmObject.buttonDelete.click();
        await browser.pause(2000);
        expect(await this.alert.getText()).toContain('Success');

        const topID = await this.getTopCellID();
        console.log(`New payment was deleted. TopID is stored after test: ${topID}`);
    }

}

module.exports = new PageScheduledPaymentsObject();
