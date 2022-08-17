const DatatableObject = require('./datatable.Object');

class DatatableDriverPayrollObject extends DatatableObject {

    get btnDeleteDriver() {return $('//*[text()="Delete Driver"]')}
    get settlementID() {return $(`[title="double-click to edit"]:nth-child(1) td:nth-child(2) a`)}
    getLinkID(id) {return $(`//a[text()=${id}]`)}



}

module.exports = new DatatableDriverPayrollObject();