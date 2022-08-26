require('cypress-xpath');
describe('First component of /example-4 page', () => {

  const instruction = '(//*[@class="sc-htoDjs jiqlbg"]/p)[1]';
  const subtitle = '.sc-htoDjs:nth-child(1) p:nth-child(3) span';
  const firstOption = '[data-cy="box-1-items-list"] > :nth-child(1)';
  const secondOption = '[data-cy="box-1-items-list"] > :nth-child(2)';
  const thirdOption = '[data-cy="box-1-items-list"] > :nth-child(3)';


  before( () => {
    cy.visit('http://localhost:3000/example-4');
  });

  beforeEach( () => {
    cy.reload();
  });


  it('Instruction of first block', () => {
    cy.xpath(instruction).should('have.text', 'Click to highlight, double click to select');
  });

  it('There are not selected options in the First block after reloading page', () => {
    cy.get(subtitle).should('have.text', 'Nothing selected');
  });

  it('Click highlights Option One', () => {
    cy.get(firstOption).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    cy.get(firstOption).click();
    cy.get(firstOption).should('have.css', 'background-color', 'rgb(221, 221, 221)');
  });

  it('Double click selects Option One', () => {
    cy.get(firstOption).dblclick();
    cy.get(subtitle).should('have.text', 'Option One');
  });

  it('Click highlights Option Two', () => {
    cy.get(secondOption)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    cy.get(secondOption).click();
    cy.get(secondOption).should('have.css', 'background-color', 'rgb(221, 221, 221)');
  });

  it('Double click selects Option Two', () => {
    cy.get(secondOption).dblclick();
    cy.get(subtitle).should('have.text', 'Option Two');
  });

  it('Click highlights Option Three', () => {
    cy.get(thirdOption)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    cy.get(thirdOption).click();
    cy.get(thirdOption).should('have.css', 'background-color', 'rgb(221, 221, 221)');
  });

  it('Double click selects Option Three', () => {
    cy.get(thirdOption).dblclick();
    cy.get(subtitle).should('have.text', 'Option Three');
  });

});