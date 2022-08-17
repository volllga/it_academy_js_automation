const PageLoginObject = require('../../page.Objects/page.Login.Object');
const PageDispatchBoardObject = require('../../page.Objects/page.DispatchBoard.Object');
const ModalNewLoadObject = require('../../components.Objects/modal.Objects/modal.NewLoad.Object');
const constants =  require('../../documentation/constants');

const ModalEditLoadObject = require('../../components.Objects/modal.Objects/modal.EditLoad.Object');
const DatatableLoadsObject = require('../../components.Objects/datatables.Objects/datatable.Loads.Object');
const PageLoadsObject = require('../../page.Objects/page.Loads.Object');


describe ('Dispatch Board Page. Create Load',  () => {
    before(async () => {
        await PageLoginObject.login();
        await PageDispatchBoardObject.open();
    });


    it('Can create New Load by clicking Dispatch Board Cell and filling Zip inputs', async () => {
        await PageDispatchBoardObject.openModalNewLoad(1, 8);

        await ModalNewLoadObject.fillInput(await ModalNewLoadObject.inputPickupZip, constants.ZIP_PICKUP);
        await ModalNewLoadObject.fillInput(await ModalNewLoadObject.inputDeliveryZip, constants.ZIP_DELIVERY);
        await ModalNewLoadObject.btnSave.click();
    });

    after(async () => { //todo delete load
      await browser.pause(5000);
      await PageDispatchBoardObject.getCell(1, 8).click(); //todo
      let loadID = await ModalEditLoadObject.loadID.getText();
      loadID = loadID.slice(1);
      console.log("****************", loadID);
      await PageLoadsObject.open();

      await DatatableLoadsObject.openEditLoadInlineForm();
      // await PageDispatchBoardObject.getCell(1, 8).click(); //todo
      // let loadID = await ModalEditLoadObject.loadID.getText();
      // loadID = loadID.slice(1);
      // await PageLoadsObject.open();
      // console.log(loadID);
      // const load = await DatatableLoadsObject.getLoadDropdown(loadID);
      // await load.click();
      // await browser.pause(3000);
    });
});