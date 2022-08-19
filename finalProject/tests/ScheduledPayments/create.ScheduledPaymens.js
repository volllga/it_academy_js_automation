const PageScheduledPaymentsObject = require("../../page.Objects/page.ScheduledPayments.Object");
const PageLoginObject = require("../../page.Objects/page.Login.Object");
const constants = require("../../docs/constants");

const driver = constants.DRIVER;
const vendor = constants.VENDOR;
const amount = constants.AMOUNT;
const deductBy = constants.DEDUCT_BY;
const categoryAdd = constants.CATEGORY_ADD;
const categoryDed = constants.CATEGORY_DEDUCT;
const categoryLoan = constants.CATEGORY_LOAN;
const categoryEscrow = constants.CATEGORY_ESCROW;

let lastPaymentID;
let newPaymentID;

describe("Creation a new Scheduled ADDITION ", async () => {
  before(async () => {
    await PageLoginObject.login();
    await PageScheduledPaymentsObject.open();
    await PageScheduledPaymentsObject.firstTableCell.waitForClickable();
    const firstTableCell = await PageScheduledPaymentsObject.firstTableCell;
    const buttonsSortDesc = await PageScheduledPaymentsObject.btnsSortDesc;
    // get last payment ID and store it as lastID
    lastPaymentID = await PageScheduledPaymentsObject.getLastID(
      firstTableCell,
      buttonsSortDesc
    );
    console.log(`lastID is stored before test: ${lastPaymentID}`);
  });

  it(`User cah create new SCHEDULED ADDITION with driver, category, amount`, async () => {
    await PageScheduledPaymentsObject.createScheduledAddDed(
      driver,
      vendor,
      amount,
      categoryAdd,
      "addition"
    );
    const firstTableCell = await PageScheduledPaymentsObject.firstTableCell;
    const buttonsSortDesc = await PageScheduledPaymentsObject.btnsSortDesc;
    newPaymentID = await PageScheduledPaymentsObject.getLastID(
      firstTableCell,
      buttonsSortDesc
    );
    console.log(`newLastID is stored:`, await newPaymentID);

    expect(Number(newPaymentID) > Number(lastPaymentID)).toBe(true);
  });

  it(`User cah create new SCHEDULED DEDUCTION with driver, category, amount`, async () => {
    await PageScheduledPaymentsObject.createScheduledAddDed(
      driver,
      vendor,
      amount,
      categoryDed,
      "deduction"
    );
    const firstTableCell = await PageScheduledPaymentsObject.firstTableCell;
    const buttonsSortDesc = await PageScheduledPaymentsObject.btnsSortDesc;
    newPaymentID = await PageScheduledPaymentsObject.getLastID(
      firstTableCell,
      buttonsSortDesc
    );
    console.log(`newLastID is stored:`, await newPaymentID);

    expect(Number(newPaymentID) > Number(lastPaymentID)).toBe(true);
  });

  it(`User cah create new SCHEDULED LOAN with driver, category, amount, deductBy`, async () => {
    await PageScheduledPaymentsObject.createScheduledLoanEscrow(
      driver,
      vendor,
      amount,
      deductBy,
      categoryLoan,
      "loan"
    );
    const firstTableCell = await PageScheduledPaymentsObject.firstTableCell;
    const buttonsSortDesc = await PageScheduledPaymentsObject.btnsSortDesc;
    newPaymentID = await PageScheduledPaymentsObject.getLastID(
      firstTableCell,
      buttonsSortDesc
    );
    console.log(`newLastID is stored:`, await newPaymentID);

    expect(Number(newPaymentID) > Number(lastPaymentID)).toBe(true);
  });

  it(`User cah create new SCHEDULED ESCROW with driver, category, amount, deductBy`, async () => {
    //todo bug
    await PageScheduledPaymentsObject.createScheduledLoanEscrow(
      driver,
      vendor,
      amount,
      deductBy,
      categoryEscrow,
      "escrow"
    );
    const firstTableCell = await PageScheduledPaymentsObject.firstTableCell;
    const buttonsSortDesc = await PageScheduledPaymentsObject.btnsSortDesc;
    newPaymentID = await PageScheduledPaymentsObject.getLastID(
      firstTableCell,
      buttonsSortDesc
    );
    console.log(`newLastID is stored:`, await newPaymentID);

    expect(Number(newPaymentID) > Number(lastPaymentID)).toBe(true);
  });

  afterEach(async () => {
    await PageScheduledPaymentsObject.deleteLastPayment();
  });
});
