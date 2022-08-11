import Block from './block';

class ThirdBlock extends Block{

  get subtitle(){return cy.get('[data-cy="box-3-selected-name"]');}

}

module.exports = new ThirdBlock();