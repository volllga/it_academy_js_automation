const PageObject = require('./page.Object');

class PageAdditionDeductionObject extends PageObject {
    open(){return super.open(`accounting/vendor-adddeds`)}

}

module.exports = new PageAdditionDeductionObject();