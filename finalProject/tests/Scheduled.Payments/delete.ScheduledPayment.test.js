const ModalFormNewPayment = require("../../components.Objects/modal.Objects/modalFormNewPayment");
const ScheduledPaymentsPage = require('../../page.Objects/scheduledPayments.page');
const LoginPage = require("../../page.Objects/login.page");
const ModalConfirm = require('../../components.Objects/modal.Objects/modalFormConfirm');

let lastPaymentID;

describe ('Delete a Scheduled Payment from Scheduled Payments//Deductions Page',  async () => {
  before(async () => {

    await LoginPage.login();
    await ScheduledPaymentsPage.open();
    await ScheduledPaymentsPage.firstTableCell.waitForClickable();
    const firstTableCell = await ScheduledPaymentsPage.firstTableCell;
    const buttonsSortDesc = await ScheduledPaymentsPage.buttonsSortDesc;
    // get last payment ID and store it as let lastID
    lastPaymentID = await ScheduledPaymentsPage.getLastID(firstTableCell, buttonsSortDesc);
    console.log(`LastID is stored before test: ${lastPaymentID}`)

  });

  it('There is alert Success after deleting newly created payment', async () => {
    //we must wait until the table will be sorted
    await browser.pause(2000);
    const firstCaretDown = await ScheduledPaymentsPage.allCaretDown[0];
    await firstCaretDown.click();
    await browser.waitUntil(ScheduledPaymentsPage.dropdownDelete.isClickable);
    await  ScheduledPaymentsPage.dropdownDelete.click();
    // await browser.waitUntil(ModalConfirm.buttonDelete.isDisplayedInViewport);
    await browser.waitUntil(ModalConfirm.buttonDelete.isClickable);
    await ModalConfirm.buttonDelete.click();
    await browser.pause(2000);
    expect(await ScheduledPaymentsPage.alert.getText()).toContain('Success');

    const topID = await ScheduledPaymentsPage.getTopCellID();
    console.log(`TopID is stored after test: ${topID}`)

    expect(Number(lastPaymentID) > topID).toBe(true);
  });
});