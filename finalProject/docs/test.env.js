const config = require("./config");
// const env = config.qa;
// const env = config.stable;
// const env = config.prod;
const env = config.prodSCT;

class TestEnv {
  get portalUrl() {
    return env.portalUrl;
  }
  get userEmail() {
    return env.useremail;
  }
  get password() {
    return env.password;
  }
  get user() {
    return env.user;
  }
  get loginUrl() {
    return env.loginUrl;
  }
}

module.exports = new TestEnv();
