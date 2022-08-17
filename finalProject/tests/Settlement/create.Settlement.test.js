const ModalFormSettlement = require('../../components.Objects/modal.Objects/modalFormSettlement');
const DriverPayrollPage = require("../../page.Objects/page.DriverPayroll.Object");
const LoginPage = require("../../page.Objects/login.page");

describe ('Create New Settlement test',  async () => {
    before(async () => {
        await LoginPage.login();
        await DriverPayrollPage.open('driver-statements');
    });

    it('Click button "New" opens "New Settlement" Form', async () => {
        await (DriverPayrollPage.buttonNew).click();
        expect(ModalFormSettlement.formTitle).toHaveTextContaining('New settlement');
    });

    it('User cah fill Driver input by typing part of name and pressing Enter', async () => {
      await ModalFormSettlement.inputDriver.setValue('Auto');
      await browser.keys('Enter');
      const placeholderDriver = ModalFormSettlement.inputDriver.getAttribute('placeholder');
      expect(placeholderDriver).toHaveTextContaining('Auto');
      console.log(await placeholderDriver);

    });

    // it('Input Partner auto fills when user fills Driver input ', async () => {
    //   await ModalFormSettlement.inputDriver.setValue('Auto');
    //   await browser.keys('Enter');
    //   const placeholderPartner = ModalFormSettlement.inputPartner.getAttribute('placeholder');
    //   expect(placeholderPartner).toHaveTextContaining('Au2to');
    //   console.log(await placeholderPartner);
    // });
});