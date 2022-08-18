const Datatable = require("./datatable.Object");

class DatatableScheduledPaymentsObject extends Datatable {
  get allPausedBadges() {
    return $$('[class="badge badge-orange"]');
  }
  get allActiveBadges() {
    return $$('[class="badge badge-green"]');
  }
  get allInactiveBadges() {
    return $$('[class="badge badge-outline-orange"]');
  }
  get allFinishedBadges() {
    return $$('[class="badge badge-outline-green"]');
  }
  get idActivePayment() {
    return $('//*[@class="badge badge-green"]/../..//*[@class="c-link"]');
  }
  get idPausedPayment() {
    return $('//*[@class="badge badge-orange"]/../..//*[@class="c-link"]');
  }
}

module.exports = new DatatableScheduledPaymentsObject();
