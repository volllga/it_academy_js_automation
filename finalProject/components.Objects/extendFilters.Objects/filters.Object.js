module.exports = class Filters {
  get listFilters() {
    return $(".list-filters");
  }
  get inputCategory() {
    return $(
      "//*[text()='Category'][1]/following::div[@class=\"c-select__selected-tag\"][1]"
    );
  }

  get buttonApply() {
    return $('//*[@class="fa fa-check"]/ancestor::button');
  }
  get badgeFilteredBy() {
    return $(".list-filtered-by__badge");
  }
  get badgeClearAll() {
    return $('[title="reset filters"]');
  }

  async sentKeys(element, value) {
    await element.waitForClickable();
    await element.click();
    await browser.keys(value);
    await browser.pause(500);
    await browser.keys("Enter");
  }
};
