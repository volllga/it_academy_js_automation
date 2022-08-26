const FiltersObject = require("./filters.Object");

class FiltersScheduledPaymentsObject extends FiltersObject {
  async filterByCategory(category) {
    await this.inputCategory.waitForClickable({ timeout: 3000 });
    await super.sentKeys(this.inputCategory, category);
    await this.buttonApply.click();
    await browser.pause(2000);
    return this.badgeFilteredBy;
  }
}

module.exports = new FiltersScheduledPaymentsObject();
