import Block from './block';

class FourthBlock extends Block{

  get subtitle() {return '[data-cy="box-4-selected-name"]';}
  getOption(number) {return `[data-cy="box-4-items-list"] > li:nth-child(${number})`;}

}

module.exports = new FourthBlock();