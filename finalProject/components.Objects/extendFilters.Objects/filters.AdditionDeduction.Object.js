const FiltersObject = require('./filters.Object')

class FiltersScheduledPaymentsObject extends FiltersObject {

    async filterByCategory(category) {
        const inputCategory = await this.inputCategory;
        await inputCategory.waitForClickable();
        await super.sentKeys(inputCategory, category);
        await this.buttonApply.click();
        return this.badgeFilteredBy;
    }
}

module.exports = new FiltersScheduledPaymentsObject();