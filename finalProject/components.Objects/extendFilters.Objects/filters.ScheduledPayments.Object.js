const FiltersObject = require('./filters.Object');


class FiltersScheduledPaymentsObject extends FiltersObject{

    get filterGroupActive(){return $('//label[text()="Active"]/ancestor::*[@class="c-input-group"]')}
    get arrowActiveDropdown(){return $('//label[text()="Active"]/ancestor::*[@class="c-input-group"]//*[@class="icon-arrow-down large c-select__dropdown-indicator"]')}
    get inputActive(){return $('//label[text()="Active"]/ancestor::*[@class="c-input-group"]//input')}


    async filterByCategory(category) {
        const input = await this.inputCategory;
        await input.waitForClickable();
        await super.sentKeys(this.inputCategory, category);
        await this.buttonApply.click();
        await browser.pause(2000);
        return this.badgeFilteredBy;
    }

    async filterByActive(status) {
        await this.arrowActiveDropdown.click();
        const input = await this.inputActive;
        await input.waitForClickable();
        await super.sentKeys(this.inputActive, status);
        await super.sentKeys(this.inputActive, 'Enter');
        await this.buttonApply.click();
        await browser.pause(2000);
        return this.badgeFilteredBy;
    }
}

module.exports = new FiltersScheduledPaymentsObject();