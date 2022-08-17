const DatatableObject = require('./datatable.Object');

class DatatableVendorsObject extends DatatableObject {

    get btnDeleteDriver() {return $('//*[text()="Delete Driver"]')}

}

module.exports = new DatatableVendorsObject();