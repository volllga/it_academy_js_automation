const Page = require('./page');

class GettingStartedPage extends Page {

  open () {
    return super.open('docs/gettingstarted');
  }

  get alertInfoBlock() {return $('.alert--info');}
}

module.exports = new GettingStartedPage();