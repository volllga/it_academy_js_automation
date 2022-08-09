import Block from './block';

class SecondBlock extends Block{

  get blockSubtitle() {return  cy.get('[data-cy="box-2-selected-count"]');}
  getCheckBox(number) {return cy.xpath(`(//input[@type="checkbox"])[${number}]`);}

  checkOption(number) {
    cy.xpath(`(//input[@type="checkbox"])[${number}]`).check();
  }

  uncheckOption(number) {
    cy.xpath(`(//input[@type="checkbox"])[${number}]`).uncheck();
  }
  



}

module.exports = new SecondBlock();