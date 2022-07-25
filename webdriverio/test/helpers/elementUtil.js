class ElementUtil{

  async doClick(element) {
    await element.waitForDisplayed();
    element.click();
  }

}

module.exports = new ElementUtil();