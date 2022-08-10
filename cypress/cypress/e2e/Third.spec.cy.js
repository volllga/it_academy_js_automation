require('cypress-xpath');
import SecondBlock from '../objects/secondBlock';

describe('First component of /example-4 page', () => {

  Cypress.Commands.add('selectOption', (option) => {
    cy.get('data-cy="box-3-dropdown"').select(option);
  });

  before( () => {
    cy.visit('http://localhost:3000/example-4');
  });

  beforeEach( () => {
    cy.reload();
  });


  it('Title of third block should be ".select()"', () => {
    const title = SecondBlock.getBlockTitle(3);
    title.should('have.text', '.select()');
  });

  it('Nothing selected without selection', () => {
    cy.get('[data-cy="box-3-selected-name"]').should('have.text', 'Nothing selected');
  });

  it('Can select Option One ', () => {
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

  it('Can change Option One to Option Two', () => {
    cy.chooseOption('Option One');
    cy.chooseOption('Option Two');
  });

});