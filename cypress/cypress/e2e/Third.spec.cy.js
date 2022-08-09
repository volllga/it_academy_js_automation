require('cypress-xpath');
import SecondBlock from '../objects/secondBlock';
describe('First component of /example-4 page', () => {

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

  Cypress.Commands.add('selectOption', (option) => {
    cy.get('data-cy="box-3-dropdown"').select(option);
  });

  cy.selectOption('');


});