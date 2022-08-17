const PageLoginObject = require('../page.Objects/page.Login.Object');
const NavigationObject = require('../components.Objects/navigation.Object');
const constants = require('../documentation/constants');

describe(`Navigation test`, () => {
  before(async () => {
    await PageLoginObject.login();
    await browser.url('/');
  })

  beforeEach(async () => {
    await browser.refresh();
  })

  it(`Nav item ${constants.NAV_DISPATCH_BOARD} leads to the page ${constants.URL_DISPATCH_BOARD}`, async () => {
    const element = await NavigationObject.getNavItem(constants.NAV_DISPATCH_BOARD);
    const url = await NavigationObject.visitMenuItem(element);

    expect(url).toContain(constants.URL_DISPATCH_BOARD);
  });

  it(`Nav item ${constants.NAV_LOADS} leads to the page ${constants.URL_LOADS}`, async () => {
    const element = await NavigationObject.getNavItem(constants.NAV_LOADS);
    const url = await NavigationObject.visitMenuItem(element);

    expect(url).toContain(constants.URL_LOADS);
  });

  it(`Nav item ${constants.NAV_DRIVERS} leads to the page ${constants.URL_DRIVERS}`, async () => {
    const url = await NavigationObject.visitMenuItem(NavigationObject.itemDrivers);

    expect(url).toContain(constants.URL_DRIVERS);
  });

  it(`Nav item ${constants.NAV_PARTNERS} opens sub menu ${constants.NAV_CUSTOMERS} and ${constants.NAV_VENDORS}`, async () => {
    await NavigationObject.itemPartners.click();
    const itemCustomers = await NavigationObject.itemCustomers;
    const itemVendors = await NavigationObject.itemVendors;

    expect(await itemCustomers.isClickable()).toBe(true);
    expect(await itemVendors.isClickable()).toBe(true);
  });

  it(`Nav item ${constants.NAV_CUSTOMERS} leads to the page ${constants.URL_CUSTOMERS}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemPartners, NavigationObject.itemCustomers);

    expect(url).toContain(constants.URL_CUSTOMERS);
  });

  it(`Nav item ${constants.NAV_VENDORS} leads to the page ${constants.URL_VENDORS}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemPartners, NavigationObject.itemVendors);

    expect(url).toContain(constants.URL_VENDORS);
  });

  it(`Nav item ${constants.NAV_EQUIPMENT} opens sub menu ${constants.NAV_TRUCKS} and ${constants.NAV_TRAILERS}`, async () => {
    await NavigationObject.itemEquipment.click();
    const itemTrucks = await NavigationObject.itemTrucks;
    const itemTrailers = await NavigationObject.itemTrailers;

    expect(await itemTrucks.isClickable()).toBe(true);
    expect(await itemTrailers.isClickable()).toBe(true);
  });

  it(`Nav item ${constants.NAV_TRUCKS} leads to the page ${constants.URL_TRUCKS}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemEquipment, NavigationObject.itemTrucks);

    expect(url).toContain(constants.URL_TRUCKS);
  });

  it(`Nav item ${constants.NAV_TRAILERS} leads to the page ${constants.URL_TRAILERS}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemEquipment, NavigationObject.itemTrailers);

    expect(url).toContain(constants.URL_TRAILERS);
  });

  it(`Nav item ${constants.NAV_FUEL} opens sub menu ${constants.NAV_FUEL_CARDS}, ${constants.NAV_FUEL_TRANSACTIONS} and ${constants.NAV_FUEL_IMPORT}`, async () => {
    await NavigationObject.itemFuel.click();
    const itemFuelCards = await NavigationObject.itemFuelCards;
    const itemFuelTransactions = await NavigationObject.itemFuelTransactions;
    const itemFuelImport = await NavigationObject.itemFuelImport;

    expect(await itemFuelCards.isClickable()).toBe(true);
    expect(await itemFuelTransactions.isClickable()).toBe(true);
    expect(await itemFuelImport.isClickable()).toBe(true);
  });

  it(`Nav item ${constants.NAV_FUEL_CARDS} leads to the page ${constants.URL_FUEL_CARDS}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemFuel, NavigationObject.itemFuelCards);

    expect(url).toContain(constants.URL_FUEL_CARDS);
  });

  it(`Nav item ${constants.NAV_FUEL_TRANSACTIONS} leads to the page ${constants.URL_FUEL_TRANSACTIONS}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemFuel, NavigationObject.itemFuelTransactions);

    expect(url).toContain(constants.URL_FUEL_TRANSACTIONS);
  });

  it(`Nav item ${constants.NAV_FUEL_IMPORT} leads to the page ${constants.URL_FUEL_IMPORT}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemFuel, NavigationObject.itemFuelImport);

    expect(url).toContain(constants.URL_FUEL_IMPORT);
  });

  it(`Nav item ${constants.NAV_DRIVER_PAYROLL} leads to the page ${constants.URL_DRIVER_PAYROLL}`, async () => {
    const url = await NavigationObject.visitMenuItem(NavigationObject.itemDriverPayroll);

    expect(url).toContain(constants.URL_DRIVER_PAYROLL);
  });

  it(`Nav item ${constants.NAV_ACCOUNTING} opens sub menu ${constants.NAV_PAYMENTS},
                                                          ${constants.NAV_EXPENSES},
                                                          ${constants.NAV_FACTORING_REPORTS},
                                                          ${constants.NAV_CHART_OF_ACCOUNTS},
                                                          ${constants.NAV_BILLING_ENTRIES},
                                                          ${constants.NAV_ADDITION_DEDUCTION},
                                                          ${constants.NAV_SCHEDULED_PAYMENTS}
                                                          `, async () => {
    await NavigationObject.itemAccounting.click();
    const itemPayments = await NavigationObject.itemPayments;
    const itemExpenses = await NavigationObject.itemExpenses;
    const itemFactoringReport = await NavigationObject.itemFactoringReport;
    const itemChartOfAccounts = await NavigationObject.itemChartOfAccounts;
    const itemBillingEntries = await NavigationObject.itemBillingEntries;
    const itemAdditionsDeductions = await NavigationObject.itemAdditionDeduction;
    const itemScheduledPayments = await NavigationObject.itemScheduledPayments;

    expect(await itemPayments.isClickable()).toBe(true);
    expect(await itemExpenses.isClickable()).toBe(true);
    expect(await itemFactoringReport.isClickable()).toBe(true);
    expect(await itemChartOfAccounts.isClickable()).toBe(true);
    expect(await itemBillingEntries.isClickable()).toBe(true);
    expect(await itemAdditionsDeductions.isClickable()).toBe(true);
    expect(await itemScheduledPayments.isClickable()).toBe(true);
  });

  it(`Nav item ${constants.NAV_PAYMENTS} leads to the page ${constants.URL_PAYMENTS}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemAccounting, NavigationObject.itemPayments);

    expect(url).toContain(constants.URL_PAYMENTS);
  });

  it(`Nav item ${constants.NAV_EXPENSES} leads to the page ${constants.URL_EXPENSES}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemAccounting, NavigationObject.itemExpenses);

    expect(url).toContain(constants.URL_EXPENSES);
  });

  it(`Nav item ${constants.NAV_FACTORING_REPORTS} leads to the page ${constants.URL_FACTORING_REPORTS}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemAccounting, NavigationObject.itemFactoringReport);

    expect(url).toContain(constants.URL_FACTORING_REPORTS);
  });

  it(`Nav item ${constants.NAV_CHART_OF_ACCOUNTS} leads to the page ${constants.URL_CHART_OF_ACCOUNTS}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemAccounting, NavigationObject.itemChartOfAccounts);

    expect(url).toContain(constants.URL_CHART_OF_ACCOUNTS);
  });

  it(`Nav item ${constants.NAV_BILLING_ENTRIES} leads to the page ${constants.URL_BILLING_ENTRIES}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemAccounting, NavigationObject.itemBillingEntries);

    expect(url).toContain(constants.URL_BILLING_ENTRIES);
  });

  it(`Nav item ${constants.NAV_ADDITION_DEDUCTION} leads to the page ${constants.URL_ADDITION_DEDUCTION}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemAccounting, NavigationObject.itemAdditionDeduction);

    expect(url).toContain(constants.URL_ADDITION_DEDUCTION);
  });

  it(`Nav item ${constants.NAV_SCHEDULED_PAYMENTS} leads to the page ${constants.URL_SCHEDULED_PAYMENTS}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemAccounting, NavigationObject.itemScheduledPayments);

    expect(url).toContain(constants.URL_SCHEDULED_PAYMENTS);
  });

  it(`Nav item ${constants.NAV_REPORTS} opens sub menu ${constants.NAV_EMAILS},
                                                          ${constants.NAV_TOTAL_REVENUE},
                                                          ${constants.NAV_RATE_PER_MILE},
                                                          ${constants.NAV_REVENUE_BY_DISPATCHER},
                                                          ${constants.NAV_REPORTS_EXPENSES},
                                                          ${constants.NAV_GROSS_PROFIT},
                                                          ${constants.NAV_GROSS_PROFIT_PER_LOAD},
                                                          ${constants.NAV_PROFIT_AND_LOSS}
                                                          `, async () => {
    await NavigationObject.itemReports.click();
    const itemEmails = await NavigationObject.itemEmails;
    const itemTotalRevenue = await NavigationObject.itemTotalRevenue;
    const itemRatePerMile = await NavigationObject.itemRatePerMile;
    const itemRevenueByDispatcher = await NavigationObject.itemRevenueByDispatcher;
    const itemReportExpenses = await NavigationObject.itemReportExpenses;
    const itemGrossProfit = await NavigationObject.itemGrossProfit;
    const itemGrossProfitPerLoad = await NavigationObject.itemGrossProfitPerLoad;
    const itemProfitAndLoss = await NavigationObject.itemProfitAndLoss;
    await itemProfitAndLoss.waitForClickable({ timeout: 3000 });

    expect(await itemEmails.isClickable()).toBe(true);
    expect(await itemTotalRevenue.isClickable()).toBe(true);
    expect(await itemRatePerMile.isClickable()).toBe(true);
    expect(await itemRevenueByDispatcher.isClickable()).toBe(true);
    expect(await itemReportExpenses.isClickable()).toBe(true);
    expect(await itemGrossProfit.isClickable()).toBe(true);
    expect(await itemGrossProfitPerLoad.isClickable()).toBe(true);
    expect(await itemProfitAndLoss.isClickable()).toBe(true);
  });

  it(`Nav item ${constants.NAV_EMAILS} leads to the page ${constants.URL_EMAILS}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemReports, NavigationObject.itemEmails);

    expect(url).toContain(constants.URL_EMAILS);
  });

  it(`Nav item ${constants.NAV_TOTAL_REVENUE} leads to the page ${constants.URL_TOTAL_REVENUE}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemReports, NavigationObject.itemTotalRevenue);

    expect(url).toContain(constants.URL_TOTAL_REVENUE);
  });

  it(`Nav item ${constants.NAV_RATE_PER_MILE} leads to the page ${constants.URL_RATE_PER_MILE}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemReports, NavigationObject.itemRatePerMile);

    expect(url).toContain(constants.URL_RATE_PER_MILE);
  });

  it(`Nav item ${constants.NAV_REVENUE_BY_DISPATCHER} leads to the page ${constants.URL_REVENUE_BY_DISPATCHER}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemReports, NavigationObject.itemRevenueByDispatcher);

    expect(url).toContain(constants.URL_REVENUE_BY_DISPATCHER);
  });

  it(`Nav item ${constants.NAV_REPORTS_EXPENSES} leads to the page ${constants.URL_REPORTS_EXPENSES}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemReports, NavigationObject.itemReportExpenses);

    expect(url).toContain(constants.URL_REPORTS_EXPENSES);
  });

  it(`Nav item ${constants.NAV_GROSS_PROFIT} leads to the page ${constants.URL_GROSS_PROFIT}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemReports, NavigationObject.itemGrossProfit);

    expect(url).toContain(constants.URL_GROSS_PROFIT);
  });

  it(`Nav item ${constants.NAV_GROSS_PROFIT_PER_LOAD} leads to the page ${constants.URL_GROSS_PROFIT_PER_LOAD}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemReports, NavigationObject.itemGrossProfitPerLoad);

    expect(url).toContain(constants.URL_GROSS_PROFIT_PER_LOAD);
  });

  it(`Nav item ${constants.NAV_PROFIT_AND_LOSS} leads to the page ${constants.URL_PROFIT_AND_LOSS}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemReports, NavigationObject.itemProfitAndLoss);

    expect(url).toContain(constants.URL_PROFIT_AND_LOSS);
  });

  it(`Nav item ${constants.NAV_SAFETY} opens sub menu ${constants.NAV_CLAIMS}`, async () => {
    await NavigationObject.itemSafety.click();
    const itemClaims = await NavigationObject.itemClaims;

    expect(await itemClaims.isClickable()).toBe(true);
  });

  it(`Nav item ${constants.NAV_CLAIMS} leads to the page ${constants.URL_CLAIMS}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemSafety, NavigationObject.itemClaims);

    expect(url).toContain(constants.URL_CLAIMS);
  });

  it(`Nav item ${constants.NAV_DATA_LIBRARY} opens sub menu ${constants.NAV_BROKERS},
                                                            ${constants.NAV_SHIPPERS_RECEIVERS},
                                                            ${constants.NAV_FACTORING_COMPANIES}
                                                            ${constants.NAV_TRAILER_TYPES}`, async () => {

    await NavigationObject.itemDataLibrary.click();
    const itemBrokers = await NavigationObject.itemBrokers;
    const itemShippersReceivers = await NavigationObject.itemShippersReceivers;
    const itemFactoringCompanies = await NavigationObject.itemFactoringCompanies;
    const itemTrailerTypes = await NavigationObject.itemTrailerTypes;

    expect(await itemBrokers.isClickable()).toBe(true);
    expect(await itemShippersReceivers.isClickable()).toBe(true);
    expect(await itemFactoringCompanies.isClickable()).toBe(true);
    expect(await itemTrailerTypes.isClickable()).toBe(true);
  });



  it(`Nav item ${constants.NAV_DOCS_EXCHANGE} leads to the page ${constants.URL_DOCS_EXCHANGE}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemSafety, NavigationObject.itemDocsExchange);

    expect(url).toContain(constants.URL_DOCS_EXCHANGE);
  });

  it(`Nav item ${constants.NAV_SETTINGS} leads to the page ${constants.URL_SETTINGS}`, async () => {
    const url = await NavigationObject.visitSubMenuItem(NavigationObject.itemSafety, NavigationObject.itemSettings);

    expect(url).toContain(constants.URL_SETTINGS);
  });






})
