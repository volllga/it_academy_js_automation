require('cypress-xpath');
import SecondBlock from '../objects/secondBlock';
describe('First component of /example-4 page', () => {

  before( () => {
    cy.visit('http://localhost:3000/example-4');
  });

  beforeEach( () => {
    cy.reload();
  });


  it('Title of second block should be ".check() and .uncheck()"', () => {
    const title = SecondBlock.getBlockTitle(2);
    title.should('have.text', '.check() and .uncheck()');
  });

  it('There are not selected options in the Second block after reloading page', () => {
    SecondBlock.blockSubtitle.should('have.text', '0');
  });

  it('Clicking checkbox One checked only checkbox One', () => {
    SecondBlock.checkOption(1);
    SecondBlock.getCheckBox(1).should('be.checked');
    SecondBlock.getCheckBox(2).should('not.be.checked');
    SecondBlock.getCheckBox(3).should('not.be.checked');
    SecondBlock.blockSubtitle.should('have.text', '1');
  });

  it('Clicking all checkboxes checks all boxes', () => {
    SecondBlock.checkOption(1);
    SecondBlock.checkOption(2);
    SecondBlock.checkOption(3);
    SecondBlock.getCheckBox(1).should('be.checked');
    SecondBlock.getCheckBox(2).should('be.checked');
    SecondBlock.getCheckBox(3).should('be.checked');
    SecondBlock.blockSubtitle.should('have.text', '3');
  });

  it('Clicking by checked box uncheck it', () => {
    SecondBlock.checkOption(2);
    SecondBlock.getCheckBox(2).should('be.checked');
    SecondBlock.uncheckOption(2);
    SecondBlock.getCheckBox(1).should('not.be.checked');
    SecondBlock.getCheckBox(2).should('not.be.checked');
    SecondBlock.getCheckBox(3).should('not.checked');
    SecondBlock.blockSubtitle.should('have.text', '0');
  });

});