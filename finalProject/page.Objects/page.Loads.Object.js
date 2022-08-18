const PageObject = require("./page.Object");

class PageLoadsObject extends PageObject {
  open() {
    return super.open(`loads`);
  }
}

module.exports = new PageLoadsObject();
