const PageObject = require('./page.Object');

class PageLoadsObject extends PageObject {

    get loadsStatus() {return $('.loads__stats');}
    get quickTimeFilter() {return $('.quick-select__value');}

    open() {return super.open(`loads`);}
    getStatusColor(status) {return $(`.loads-table-row__status=${status}`);}




}

module.exports = new PageLoadsObject();
