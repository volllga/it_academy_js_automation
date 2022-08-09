require('cypress-xpath');
describe('First component of /example-4 page', () => {

  before( () => {
    cy.visit('http://localhost:3000/example-4');
  });

  beforeEach( () => {
    cy.reload();
  });


  it('Instruction of first block', () => {
    cy.xpath('(//*[@class="sc-htoDjs jiqlbg"]/p)[1]')
      .should('have.text', 'Click to highlight, double click to select');
  });

  it('There are not selected options in the First block after reloading page', () => {
    cy.get('.sc-htoDjs:nth-child(1) p:nth-child(3) span')
      .should('have.text', 'Nothing selected');
  });

  it('Click highlights Option One', () => {
    cy.xpath('(//*[@data-cy="box-1-items-list"])[1]/li[1]')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    cy.get('[data-cy="box-1-items-list"] > :nth-child(1)').click();
    cy.xpath('(//*[@data-cy="box-1-items-list"])[1]/li[1]')
      .should('have.css', 'background-color', 'rgb(221, 221, 221)');
  });

  it('Double click selects Option One', () => {
    cy.get('[data-cy="box-1-items-list"] > :nth-child(1)').dblclick();
    cy.get('.sc-htoDjs:nth-child(1) p:nth-child(3) span')
      .should('have.text', 'Option One');
  });

  it('Click highlights Option Two', () => {
    cy.xpath('(//*[@data-cy="box-1-items-list"])[1]/li[2]')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    cy.get('[data-cy="box-1-items-list"] > :nth-child(2)').click();
    cy.xpath('(//*[@data-cy="box-1-items-list"])[1]/li[2]')
      .should('have.css', 'background-color', 'rgb(221, 221, 221)');
  });

  it('Double click selects Option Two', () => {
    cy.get('[data-cy="box-1-items-list"] > :nth-child(2)').dblclick();
    cy.get('.sc-htoDjs:nth-child(1) p:nth-child(3) span')
      .should('have.text', 'Option Two');
  });

  it('Click highlights Option Three', () => {
    cy.xpath('(//*[@data-cy="box-1-items-list"])[1]/li[3]')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    cy.get('[data-cy="box-1-items-list"] > :nth-child(3)').click();
    cy.xpath('(//*[@data-cy="box-1-items-list"])[1]/li[3]')
      .should('have.css', 'background-color', 'rgb(221, 221, 221)');
  });

  it('Double click selects Option Three', () => {
    cy.get('[data-cy="box-1-items-list"] > :nth-child(3)').dblclick();
    cy.get('.sc-htoDjs:nth-child(1) p:nth-child(3) span')
      .should('have.text', 'Option Three');
  });

});