import FourthBlock from '../objects/fourthBlock';
require('cypress-xpath');


describe('First component of /example-4 page', () => {


  before(() => {
    cy.visit('http://localhost:3000/example-4');
  });

  beforeEach(() => {
    cy.reload();
  });


  it('Title of four block should be ".trigger(\'mouseover\')"', () => {
    const title = FourthBlock.getBlockTitle(4);
    title.should('have.text', '.trigger(\'mouseover\')');
  });

  it('Nothing selected without selection in block four', () => {
    cy.get(FourthBlock.subtitle).should('have.text', 'Nothing selected');
  });

  it('Mouse Hover highlight Option One ', () => {
    cy.get(FourthBlock.getOption(1)).trigger('mouseover');
    cy.get(FourthBlock.getOption(1)).should('have.css', 'background-color', 'rgb(221, 221, 221)');
    cy.get(FourthBlock.subtitle).should('have.text', 'Option One');
  });

  it('Mouse Hover highlight Option Two ', () => {
    cy.get(FourthBlock.getOption(2)).trigger('mouseover');
    cy.get(FourthBlock.getOption(2)).should('have.css', 'background-color', 'rgb(221, 221, 221)');
    cy.get(FourthBlock.subtitle).should('have.text', 'Option Two');
  });

  it('Mouse Hover highlight Option Three ', () => {
    cy.get(FourthBlock.getOption(3)).trigger('mouseover');
    cy.get(FourthBlock.getOption(3)).should('have.css', 'background-color', 'rgb(221, 221, 221)');
    cy.get(FourthBlock.subtitle).should('have.text', 'Option Three');
  });

});