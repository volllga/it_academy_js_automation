require('cypress-xpath');
import ThirdBlock from '../objects/thirdBlock';

describe('First component of /example-4 page', () => {

  // Cypress.Commands.add('selectOption', (option) => {
  //   cy.get('data-cy="box-3-dropdown"').select(option);
  // });

  before( () => {
    cy.visit('http://localhost:3000/example-4');
  });

  beforeEach( () => {
    cy.reload();
  });


  it('Title of third block should be ".select()"', () => {
    const title = ThirdBlock.getBlockTitle(3);
    title.should('have.text', '.select()');
  });

  it('Nothing selected without selection', () => {
    ThirdBlock.subtitle.should('have.text', 'Nothing selected');
  });

  it('Can select Option One ', () => { //todo bug
    cy.chooseOption('Option One');
  });

  it('Can select Option Two ', () => {
    cy.chooseOption('Option Two');
  });

  it('Can select Option Three ', () => {
    cy.chooseOption('Option Three');
  });

  it('Can change Option Three to Option One', () => {
    cy.chooseOption('Option Three');
    cy.chooseOption('Option One');
  });

  it('Can change Option One to Option Two', () => { //todo bug
    cy.chooseOption('Option One');
    cy.chooseOption('Option Two');
  });
});