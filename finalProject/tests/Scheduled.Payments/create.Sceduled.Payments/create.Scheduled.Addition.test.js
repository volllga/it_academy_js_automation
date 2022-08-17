const ModalFormNewPayment = require("../../../components.Objects/modal.Objects/modalFormNewPayment");
const ScheduledPaymentsPage = require('../../../page.Objects/scheduledPayments.page');
const LoginPage = require("../../../page.Objects/login.page");
const constants =  require('../../../documentation/constants');

const driver = ModalFormNewPayment.driver;
const vendor = ModalFormNewPayment.vendor;
const amount = ModalFormNewPayment.amount;
const category = constants.CATEGORY_ADD;

let lastPaymentID;
let newPaymentID;


describe ('Creation a new Scheduled ADDITION ',  async () => {

    before(async () => {

        await LoginPage.login();
        await ScheduledPaymentsPage.open();
        await ScheduledPaymentsPage.firstTableCell.waitForClickable();
        const firstTableCell = await ScheduledPaymentsPage.firstTableCell;
        const buttonsSortDesc = await ScheduledPaymentsPage.buttonsSortDesc;
        // get last payment ID and store it as let lastID
        lastPaymentID = await ScheduledPaymentsPage.getLastID(firstTableCell, buttonsSortDesc);
        console.log(`lastID is stored: ${lastPaymentID}`);
        await ScheduledPaymentsPage.buttonNew.click();
    });

    it(`User cah create new SCHEDULED ADDITION with driver, category, amount`, async () => {
        await browser.pause(2000);

        const inputDriver = await ModalFormNewPayment.fillInputDriver(driver);
        const inputVendor = await ModalFormNewPayment.inputVendor.getAttribute('placeholder');

        await ModalFormNewPayment.chooseRadioAdd(); // work only here!!! do not move!!!

        const inputAmount = await ModalFormNewPayment.fillInputAmount(amount);
        const inputCategory = await ModalFormNewPayment.fillInputCategory(category);

        console.log(`Driver name is ${inputDriver}`);
        console.log(`Vendor name is ${inputVendor}`);
        console.log(`Amount is ${inputAmount}`);
        console.log(`Category is`, await inputCategory);

        expect(inputDriver).toEqual(driver);
        expect(inputVendor).toEqual(vendor);
        expect(String(inputAmount)).toBe(amount);
        expect(inputCategory).toHaveTextContaining(category);

        await ModalFormNewPayment.saveAndClose();

        const firstTableCell = await ScheduledPaymentsPage.firstTableCell;
        const buttonsSortDesc = await ScheduledPaymentsPage.buttonsSortDesc;
        newPaymentID = await ScheduledPaymentsPage.getLastID(firstTableCell, buttonsSortDesc);
        console.log(`newLastID is stored:`, await newPaymentID);

        expect(Number(newPaymentID) > Number(lastPaymentID)).toBe(true);
    });

    after(async () => {
        await ScheduledPaymentsPage.deleteLastPayment();
    });
});