const ModalObject = require("./modal.Object");


class ModalSettlementObject extends ModalObject {
    get tableRows(){return $$('[class="driver-statements-edit__tables"] [class="c-table__tdrow c-table__tdrow--striped"]');}
    get inputDriver(){return $('//label[text()="Driver"]/following-sibling::div[1]//input');}
    get inputPartner(){return $('//label[text()="Partner"]/following-sibling::div[1]//input');}

    get inputSettlementStatus() {
        return $('//label[text()="Settlement status"]/following-sibling::div[1]//input');
    }

    get inputDate() {
        return $('//label[text()="Date"]/following-sibling::div[1]//input');
    }

    get allEditControls() { // зеленый карандашик
        return $$('.statement-table__control svg');
    }

    get controlMove() { // плюсик/минусик
        return $('.fa-plus');
    }

    get buttonReportHoS(){return $('//*[@class="fa fa-clock-o"]/..')}
    get buttonAddition(){return $('//*[@class="fa fa-plus-square"]/..')}
    get buttonDeduction(){return $('//*[@class="fa fa-minus-square"]/..')}
    get buttonNewPayment(){return $('//*[@class="fa fa-pencil"]/..')}
    get buttonClose(){return $('//*[@class="fa fa-times"]/..')}
    get btnEdit() {return $('.statement-table:nth-child(1) .c-table__tdrow:nth-child(3) .statement-table__control svg');}

    get linkPDF(){return $('.driver-statements-edit__control a[target="_blank"]')}
    get linkEmail(){return $('.driver-statements-edit__control a:not([target="_blank"])')}

    get totalSettlement() {
        return $('[class="statement-table__col-total statement-table__col-total_amount"] span');
    }

    get paymentsAmounts() {
        return $$('//h4[contains (text(), "Driver Settlement")]/ancestor::div[@class="statement-table"]//td[@class="c-table__td driver-statements-edit__col-display-amount"]')
    }


    async getBlockTitles(index) {return  await $$(`.c-modal-sliding__wrapper h4`)[index]}
    get textareaNotes() {return $('#statements-notes')}
}

module.exports = new ModalSettlementObject();