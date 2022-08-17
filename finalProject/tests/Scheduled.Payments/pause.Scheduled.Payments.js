const LoginPage = require('../../page.Objects/login.page');
const ModalFormNewPayment = require('../../components.Objects/modal.Objects/modalFormNewPayment');
const ScheduledPaymentsPage = require('../../page.Objects/scheduledPayments.page');
const DataTableScheduledPayments = require("../../components.Objects/datatables.Objects/datatable.ScheduledPayments");
const ModalFormEditScheduledPayment = require('../../components.Objects/modal.Objects/modalForm.Edit.Scheduled.Payment');


describe ('Creation a new Scheduled DEDUCTION.',  async () => {

    before(async () => {
        await LoginPage.login();

    });

    beforeEach(async () => {
        await ScheduledPaymentsPage.open();
    })

    it(`Modal form Edit Scheduled Payment of Active Payment has button Pause and notification "Next transaction will be created on"`, async () => {
        await DataTableScheduledPayments.idActivePayment.click();
        await ModalFormEditScheduledPayment.btnPause.waitForDisplayed({timeout: 2000});
        await browser.pause(2000);
        const next = await ModalFormEditScheduledPayment.notificationNext.getText();
        expect(next).toContain('Next transaction will be created on');
    });

    it(`There is notification "On paue from" after user paused Scheduled Payment`, async () => {
        await DataTableScheduledPayments.idActivePayment.click();
        await ModalFormEditScheduledPayment.btnPause.waitForClickable({timeout: 2000});
        await ModalFormEditScheduledPayment.btnPause.click();
        await ModalFormEditScheduledPayment.notificationOnPause.waitForDisplayed({timeout: 2000});
        expect(await ModalFormEditScheduledPayment.notificationOnPause.getText()).toContain('On pause from');
    });

    it(`User can Resume Scheduled Payments`, async () => {
        await DataTableScheduledPayments.idPausedPayment.click();
        await ModalFormEditScheduledPayment.btnResume.waitForClickable({timeout: 2000});
        await ModalFormEditScheduledPayment.btnResume.click();
        await ModalFormEditScheduledPayment.btnPause.waitForDisplayed({timeout: 2000});
        await browser.pause(2000);
        expect(await ModalFormEditScheduledPayment.notificationNext.getText()).toContain('Next transaction will be created on');
    });
});