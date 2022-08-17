class ModalNewLoadObject {

    get activeTab() {return $('.c-tabs-item--active strong');}
    get inputPickupZip() {return $('(//*[text()="Zip"])[1]/..//input');}
    get inputDeliveryZip(){return $('(//*[text()="Zip"])[2]/..//input');}
    get btnSave(){return $('.dispatch-board-modal-main__buttons .c-button-save');}

    async fillInput(element, data) {
        await element.waitForDisplayed();
        await element.click();
        await browser.keys(data);
        await browser.pause(2000);
        await browser.keys('Enter');
        expect(await element.getValue()).toContain(data);
    }
}

module.exports = new ModalNewLoadObject();
