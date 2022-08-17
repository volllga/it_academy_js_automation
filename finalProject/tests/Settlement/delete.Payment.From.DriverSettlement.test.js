const PageLoginObject = require('../../page.Objects/page.Login.Object');
const ModalSettlementObject = require('../../components.Objects/modal.Objects/modal.Settlement.Object');
const ModalEditDeductionObject = require('../../components.Objects/modal.Objects/modal.Edit.Deduction.Object');
const ModalConfirmObject = require('../../components.Objects/modal.Objects/modal.Confirm.Object');
const PageDriverPayrollObject = require('../../page.Objects/page.DriverPayroll.Object');
const DatatableDriverPayrollObject = require("../../components.Objects/datatables.Objects/datatable.DriverPayroll.Object");

describe ('Driver settlement. Delete payment test',  () => {
    before(async () => {
        ///login
        await PageLoginObject.login();

        await PageDriverPayrollObject.open(); //todo
        await DatatableDriverPayrollObject.settlementID.click();
        await (ModalSettlementObject.formTitle).waitForClickable({timeout: 30000});
        await console.log(await ModalSettlementObject.formTitle.getText());
        await expect(ModalSettlementObject.formTitle).toHaveTextContaining('Edit settlement');

    });

    it('Settlement contains editable payments', async () => {
        //check if settlement has editable payments
        console.log(await ModalSettlementObject.allEditControls.length, 'Array.length of editable controls');
        const edit = await ModalSettlementObject.allEditControls[0];
        expect(await edit.isClickable()).toBe(true);
    })

    it('User can delete a payment from Settlement by clicking remove', async () => {
        //click [2] edit control from array controls
        console.log(await ModalSettlementObject.allEditControls.length, 'Edit controls before deleting');
        const edit = await ModalSettlementObject.allEditControls[2];
        expect(await edit.isClickable()).toBe(true);
        await edit.click();

        // click button remove and then confirm deletion
        expect(await ModalEditDeductionObject.buttonRemove).toBeClickable();
        await ModalEditDeductionObject.buttonRemove.click();
        expect(await ModalConfirmObject.formTitle).toBeClickable();
        await expect(ModalConfirmObject.formTitle).toHaveTextContaining('Delete?')
        await ModalConfirmObject.buttonDelete.click();

        await  browser.pause(2000);
        console.log(await ModalSettlementObject.allEditControls.length, 'Edit controls after deleting');
    });
});