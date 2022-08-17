const Datatable = require('./datatable.Object');

class DatatableLoadsObject extends Datatable{
  // get allPausedBadges(){return $$('[class="badge badge-orange"]')}
  // get allActiveBadges(){return $$('[class="badge badge-green"]')}
  // get allInactiveBadges(){return $$('[class="badge badge-outline-orange"]')}
  // get allFinishedBadges(){return $$('[class="badge badge-outline-green"]')}

  async getLoadLinc(id) {
    return $(`//*[@class="loads-table-number__number"]/a[text()=${id}]`);
  }
  async getLoadDropdown(id) {
    return $(`//*[@class="loads-table-number__number"]/a[text()="${id}"]/../../../..//i[@class="fa fa-caret-down"]`); //todo предок
  }

  async openEditLoadInlineForm(id) {
    const load = await this.getLoadLinc(id);
    await load.doubleClick();
    await browser.pause(3000);

  }


}

module.exports = new DatatableLoadsObject();