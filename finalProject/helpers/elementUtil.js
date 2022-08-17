
class ElementUtil {

    constructor() {
        this.driver = 'Auto Test [Drv]';
        this.vendor = 'Auto Test';
        this.amount = '1000';
        this.deductBy = '10';
        this.category = 'Auto Category';
    }

    async doSetValue(element, value) {
        await element.waitForDisplayed();
        await element.setValue(value);
        await browser.keys('Enter');
    }

}

module.exports = new ElementUtil()