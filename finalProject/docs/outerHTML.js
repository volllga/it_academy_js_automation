const assert = require("assert");
const ModalFormSettlement = require('../pageobjects/pageComponents/modalFormSettlement');
const DriverPayrollPage = require('../pageobjects/driverPayroll.page')
const LoginPage = require("../pageobjects/login.page");

describe ('Loads Page layout',  async () => {
    before(async () => {
        await LoginPage.login();
        await DriverPayrollPage.open('driver-statements');

    });
    it("arr", async () => {
        const arr =  await $('.badge-outline-green');
        console.log("********", await arr.getProperty("outerHTML"));

        console.log("****@@@@****", await arr.getWindowRect());

    })
});