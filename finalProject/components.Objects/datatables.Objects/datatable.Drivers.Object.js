const DatatableObject = require("./datatable.Object");

class DatatableDriversObject extends DatatableObject {
  get btnDeleteDriver() {
    return $('//*[text()="Delete Driver"]');
  }
}

module.exports = new DatatableDriversObject();
