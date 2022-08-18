const PageLoginObject = require("../../page.Objects/page.Login.Object");
const PageScheduledPaymentsObject = require("../../page.Objects/page.ScheduledPayments.Object");
const DataTableScheduledPaymentsObject = require("../../components.Objects/datatables.Objects/datatable.ScheduledPayments.Object");
const ModalScheduledPaymentObject = require("../../components.Objects/modal.Objects/modal.SheduledPayment.Object");

describe("Scheduled Payments. Pause.", async () => {
  before(async () => {
    await PageLoginObject.login();
  });

  beforeEach(async () => {
    await PageScheduledPaymentsObject.open();
  });

  it(`Modal form Edit Scheduled Payment of Active Payment has button Pause and notification "Next transaction will be created on"`, async () => {
    await DataTableScheduledPaymentsObject.idActivePayment.click();
    await ModalScheduledPaymentObject.btnPause.waitForDisplayed({
      timeout: 2000,
    });
    await browser.pause(2000);
    const next = await ModalScheduledPaymentObject.notificationNext.getText();

    expect(next).toContain("Next transaction will be created on");
  });

  it(`There is a notification "On pause from" after User paused Scheduled Payment`, async () => {
    await DataTableScheduledPaymentsObject.idActivePayment.click();
    await ModalScheduledPaymentObject.btnPause.waitForClickable({
      timeout: 2000,
    });
    await ModalScheduledPaymentObject.btnPause.click();
    await ModalScheduledPaymentObject.notificationOnPause.waitForDisplayed({
      timeout: 2000,
    });

    expect(
      await ModalScheduledPaymentObject.notificationOnPause.getText()
    ).toContain("On pause from");
  });

  it(`User can Resume Scheduled Payments`, async () => {
    await DataTableScheduledPaymentsObject.idPausedPayment.click();
    await ModalScheduledPaymentObject.btnResume.waitForClickable({
      timeout: 2000,
    });
    await ModalScheduledPaymentObject.btnResume.click();
    await ModalScheduledPaymentObject.btnPause.waitForDisplayed({
      timeout: 2000,
    });
    await browser.pause(2000);

    expect(
      await ModalScheduledPaymentObject.notificationNext.getText()
    ).toContain("Next transaction will be created on");
  });
});
