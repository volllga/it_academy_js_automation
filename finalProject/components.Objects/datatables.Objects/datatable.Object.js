module.exports = class Datatable {
  get allTableRows() {
    return $$("#scheduledPayments-datatable tbody tr");
  }
  get allCellActions() {
    return $$('[class="c-table__td actions-col"]');
  }
  get allDropdownActions() {
    return $$(".dropdown-actions");
  }
  get allBtnEdit() {
    return $$(
      '[class="button-edit c-button c-button--success c-button--small"]'
    );
  }
  get btnDelete() {
    return $('//*[text()="Delete"]');
  }
  get rowDropdown() {
    return $('[class="fa fa-caret-down"]');
  }
  get pagesPagination() {
    return $$('[class="c-pagination__item"]');
  }

  async calculateAmountBadges(...args) {
    let sum = 0;
    args.forEach((badge) => {
      sum += badge.length;
    });
    return sum;
  }
};
