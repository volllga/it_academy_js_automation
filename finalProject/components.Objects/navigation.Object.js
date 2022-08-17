const  constants = require('../documentation/constants');
class NavigationObject {

  async getNavItem(item) {
    const element = $(`//*[@class="shell__nav-list"]//*[text()="${item}"]`);
    return await element;
  }

  get itemDispatchBoard(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_DISPATCH_BOARD}"]`)}
  get itemLoads(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_LOADS}"]`)}
  get itemDrivers(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_DRIVERS}"]`)}

  get itemPartners(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_PARTNERS}"]`)}
  get itemCustomers(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_CUSTOMERS}"]`)}
  get itemVendors(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_VENDORS}"]`)}

  get itemEquipment(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_EQUIPMENT}"]`)}
  get itemTrucks(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_TRUCKS}"]`)}
  get itemTrailers(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_TRAILERS}"]`)}

  get itemFuel(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_FUEL}"]`)}
  get itemFuelCards(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_FUEL_CARDS}"]`)}
  get itemFuelTransactions(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_FUEL_TRANSACTIONS}"]`)}
  get itemFuelImport(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_FUEL_IMPORT}"]`)}

  get itemDriverPayroll(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_DRIVER_PAYROLL}"]`)}

  get itemAccounting(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_ACCOUNTING}"]`)}
  get itemPayments(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_PAYMENTS}"]`)}
  get itemExpenses(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_EXPENSES}"]`)}
  get itemFactoringReport(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_FACTORING_REPORTS}"]`)}
  get itemChartOfAccounts(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_CHART_OF_ACCOUNTS}"]`)}
  get itemBillingEntries(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_BILLING_ENTRIES}"]`)}
  get itemVendorBalance(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_VENDOR_BALANCES}"]`)}
  get itemAdditionDeduction(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_ADDITION_DEDUCTION}"]`)}
  get itemScheduledPayments(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_SCHEDULED_PAYMENTS}"]`)}

  get itemReports(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_REPORTS}"]`)}
  get itemEmails(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_EMAILS}"]`)}
  get itemTotalRevenue(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_TOTAL_REVENUE}"]`)}
  get itemRatePerMile(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_RATE_PER_MILE}"]`)}
  get itemRevenueByDispatcher(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_REVENUE_BY_DISPATCHER}"]`)}
  get itemPaymentsSummary(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_PAYMENT_SUMMARY}"]`)}
  get itemReportExpenses(){return $(`//*[@class="shell__nav-list"]//*[@href="/reports/expenses-report"]/*[text()="${constants.NAV_REPORTS_EXPENSES}"]`)}
  get itemGrossProfit(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_GROSS_PROFIT}"]`)}
  get itemGrossProfitPerLoad(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_GROSS_PROFIT_PER_LOAD}"]`)}
  get itemProfitAndLoss(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_PROFIT_AND_LOSS}"]`)}
  get itemSafety(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_SAFETY}"]`)}
  get itemClaims(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_CLAIMS}"]`)}
  get itemIFTA(){return $(`//*[@class="fa fa-file-text"]/..`)}
  get itemIFTA_Sub(){return $(`//*[@href="/ifta/ifta"]`)}
  get itemKY_NM_OR_NY(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_KY_NM_OR_NY}"]`)}
  get itemMilesByState(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_MILES_BY_STATE}"]`)}

  get itemDataLibrary(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_DATA_LIBRARY}"]`)}
  get itemBrokers(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_BROKERS}"]`)}
  get itemShippersReceivers(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_SHIPPERS_RECEIVERS}"]`)}
  get itemFactoringCompanies(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_FACTORING_COMPANIES}"]`)}
  get itemTrailerTypes(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_TRAILER_TYPES}"]`)}

  get itemDocsExchange(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_DOCS_EXCHANGE}"]`)}
  get itemSettings(){return $(`//*[@class="shell__nav-list"]//*[text()="${constants.NAV_SETTINGS}"]`)}



  async visitMenuItem(item) {
    await item.scrollIntoView();
    await item.waitForClickable({ timeout: 3000 });
    await item.click();
    await browser.pause(2000)
    return browser.getUrl();
  }

  async visitSubMenuItem(item, subItem) {
    // await item.scrollIntoView();
    await item.waitForClickable({ timeout: 3000 });
    await item.click();
    await subItem.waitForClickable({ timeout: 3000 });
    await subItem.click();
    return browser.getUrl();
  }
}

module.exports = new NavigationObject()