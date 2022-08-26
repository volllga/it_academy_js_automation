const DatatableObject = require("./datatable.Object");

class DatatableVendorsObject extends DatatableObject {
  get btnDeleteVendor() {
    return $('//*[text()="Delete"]');
  }
}

module.exports = new DatatableVendorsObject();
