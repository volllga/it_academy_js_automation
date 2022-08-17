const PageDriversObject = require('../../page.Objects/page.Drivers.Object');
const PageVendorsObject = require('../../page.Objects/page.Vendors.Object');
const PageLoginObject = require('../../page.Objects/page.Login.Object');
const ModalNewDriverObject = require('../../components.Objects/modal.Objects/modal.NewDriver.Object');

const firstName = 'JJPrescott';
const lastName = 'Oberon';
const coDriver = 'CO-Driver Auto';

//when you create driver, there are two instances: driver and vendor. So after tests you have to delete both

describe ('Create NEW DRIVER.',  async () => {
    before(async () => {
        await PageLoginObject.login();
        await PageDriversObject.open();
    });

    beforeEach(async () => {
        await PageDriversObject.open();
        await PageDriversObject.buttonNew.click();
        await (ModalNewDriverObject.formTitle).waitForExist({timeout: 30000});

        expect(await ModalNewDriverObject.formTitle.getText()).toContain('New driver');
    });

    it(`User can create New Driver with First Name and Last Name`, async () => {
        await ModalNewDriverObject.inputFirstName.setValue(firstName);
        await ModalNewDriverObject.inputLastName.setValue(lastName);
        await ModalNewDriverObject.buttonSave.click();

        expect(await ModalNewDriverObject.alertSuccess.getText()).toContain('Success');
    });

    it(`User can create New Driver with Co-Driver`, async () => {
        await ModalNewDriverObject.inputFirstName.setValue(firstName);
        await ModalNewDriverObject.inputLastName.setValue(lastName);
        await ModalNewDriverObject.inputCoDriver.setValue(coDriver);
        await browser.keys('Enter');
        await browser.pause(3000);

        expect(await ModalNewDriverObject.inputCoDriver.getProperty('placeholder')).toContain(coDriver);
        await ModalNewDriverObject.buttonSave.click();

        expect(await ModalNewDriverObject.alertSuccess.getText()).toContain('Success');
    });

    afterEach(async () => {
        await PageDriversObject.deleteDriver(firstName, lastName);
        await PageVendorsObject.deleteVendor(firstName, lastName);
    });
});