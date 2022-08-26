class SearchComponent {

  get btnSearch() {return $("[class=\"DocSearch DocSearch-Button\"]");}
  get inputSearch() {return $(".DocSearch-Input");}

}

module.exports = new SearchComponent();