const FiltersObject = require("./filters.Object");

class FiltersScheduledPaymentsObject extends FiltersObject {
  get inputActive() {
    return $(
      '//label[text()="Active"]/ancestor::*[@class="c-input-group"]//input'
    );
  }

  async filterByCategory(category) {
    const input = await this.inputCategory;
    await input.waitForClickable();
    await super.sentKeys(this.inputCategory, category);
    await this.buttonApply.click();
    await browser.pause(2000);
    return this.badgeFilteredBy;
  }
}

module.exports = new FiltersScheduledPaymentsObject();
