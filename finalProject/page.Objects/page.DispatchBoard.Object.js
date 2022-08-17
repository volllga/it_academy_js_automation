const PageObject = require('./page.Object');
const ModalNewLoadObject = require("../components.Objects/modal.Objects/modal.NewLoad.Object");


class PageDispatchBoardObject extends PageObject {
    open() {return super.open(`dispatch-board`);}
    
    get allLoads() {return $$('.dispatch-board-box-load')}

    async getCell(row, column) {return await $(`tr:nth-child(${row}) > td:nth-child(${column})`)}
    
    async openModalNewLoad(row, column) {
        const cell = await this.getCell(row, column);
        await cell.click();
        const activeTab = await ModalNewLoadObject.activeTab;
        expect(await activeTab.getText()).toContain('New load');
    }

    async openModalLoad(row, column) {
        const cell = await this.getCell(row, column);
        await cell.click();
        const activeTab = await ModalNewLoadObject.activeTab;
        expect(await activeTab.getText()).toContain('New load');
    }
}

module.exports = new PageDispatchBoardObject();
