const PageObject = require('./page.Object');


class PageDriverPayrollObject extends PageObject {

    open() {return super.open(`driver-statements`)}
    get arrOfSettlementNumbers() {return $$('[title="double-click to edit"]')}

    async openSettlement(number) {
        // открываем number Settlement в таблице
        const settlementLinc = await $(`[title="double-click to edit"]:nth-child(${number}) td:nth-child(2) a`);
        await settlementLinc.click();
    }
}

module.exports = new PageDriverPayrollObject();
