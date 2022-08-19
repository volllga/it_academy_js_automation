const PageDriversObject = require("../../page.Objects/page.Drivers.Object");
const PageVendorsObject = require("../../page.Objects/page.Vendors.Object");
const PageLoginObject = require("../../page.Objects/page.Login.Object");
const ModalNewDriverObject = require("../../components.Objects/modal.Objects/modal.NewDriver.Object");

const firstName = "JJPrescott";
const lastName = "Oberon";
const coDriver = "CO-Driver Auto";

//when you create driver, there are two instances: driver and vendor. So after tests you have to delete both

describe("Create NEW DRIVER.", async () => {
  before(async () => {
    await PageLoginObject.login();
    await PageDriversObject.open();
  });

  beforeEach(async () => {
    await PageDriversObject.openModalNewDriver();
  });

  it(`User can create New Driver with First Name and Last Name`, async () => {
    await ModalNewDriverObject.inputFirstName.setValue(firstName);
    await ModalNewDriverObject.inputLastName.setValue(lastName);
    await ModalNewDriverObject.buttonSave.click();

    expect(await ModalNewDriverObject.alertSuccess).toExist();
    expect(await ModalNewDriverObject.alertSuccess.getText()).toContain(
      "Success"
    );
  });

  it(`User can create New Driver with Co-Driver`, async () => {
    //todo bug
    await ModalNewDriverObject.inputFirstName.setValue(firstName);
    await ModalNewDriverObject.inputLastName.setValue(lastName);
    await PageDriversObject.chooseCoDriver(coDriver);
    await ModalNewDriverObject.buttonSave.click();

    expect(await ModalNewDriverObject.alertSuccess).toExist();
    expect(await ModalNewDriverObject.alertSuccess.getText()).toContain(
      "Success"
    );
  });

  afterEach(async () => {
    await PageDriversObject.deleteDriver(firstName, lastName);
    await PageVendorsObject.deleteVendor(firstName, lastName); //todo bug
  });
});
