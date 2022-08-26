const PageLoginObject = require("../../page.Objects/page.Login.Object");
const PageScheduledPaymentsObject = require("../../page.Objects/page.ScheduledPayments.Object");
const FiltersScheduledPaymentsObject = require("../../components.Objects/extendFilters.Objects/filters.ScheduledPayments.Object");
const constants = require("../../docs/constants");

describe("Scheduled Payments Page. Category filters tests.", () => {
  before(async () => {
    await PageLoginObject.login();
    await PageScheduledPaymentsObject.open();
    await PageScheduledPaymentsObject.buttonFilters.click();
  });

  it("Filters list should be displayed after clicking button Filters on Scheduled Payments Page", async () => {
    await browser.refresh();
    await PageScheduledPaymentsObject.buttonFilters.click();

    expect(await FiltersScheduledPaymentsObject.listFilters.isClickable()).toBe(
      true
    );
  });

  it("User can filter Scheduled Payments by Expense Category", async () => {
    const badgeFilter = await FiltersScheduledPaymentsObject.filterByCategory(
      constants.CATEGORY_EXPENSE
    );
    const badgeText = await badgeFilter.getText();
    await FiltersScheduledPaymentsObject.badgeClearAll.click();

    expect(badgeText).toContain(constants.CATEGORY_EXPENSE);
  });

  it("User can filter Scheduled Payments by Expense sub Category ", async () => {
    const badgeFilter = await FiltersScheduledPaymentsObject.filterByCategory(
      constants.CATEGORY_EXPENSE_SUB
    );
    const badgeText = await badgeFilter.getText();
    await FiltersScheduledPaymentsObject.badgeClearAll.click();

    expect(badgeText).toContain(
      constants.CATEGORY_EXPENSE_SUB + "          Sub-account of Internet"
    );
  });

  it("User can filter Scheduled Payments by Loan Category", async () => {
    const badgeFilter = await FiltersScheduledPaymentsObject.filterByCategory(
      constants.CATEGORY_LOAN
    );
    const badgeText = await badgeFilter.getText();
    await FiltersScheduledPaymentsObject.badgeClearAll.click();

    expect(badgeText).toContain(constants.CATEGORY_LOAN);
  });

  it("User can filter Scheduled Payments by Loan sub Category", async () => {
    const badgeFilter = await FiltersScheduledPaymentsObject.filterByCategory(
      constants.CATEGORY_LOAN_SUB
    );
    const badgeText = await badgeFilter.getText();
    await FiltersScheduledPaymentsObject.badgeClearAll.click();

    expect(badgeText).toContain(
      constants.CATEGORY_LOAN_SUB + "          Sub-account of Driver loan"
    );
  });

  it("User can filter Scheduled Payments by Escrow Category", async () => {
    const badgeFilter = await FiltersScheduledPaymentsObject.filterByCategory(
      constants.CATEGORY_ESCROW
    );
    const badgeText = await badgeFilter.getText();
    await FiltersScheduledPaymentsObject.badgeClearAll.click();

    expect(badgeText).toContain(constants.CATEGORY_ESCROW);
  });
});
