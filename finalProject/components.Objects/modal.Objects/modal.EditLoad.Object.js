
const ModalObject = require("./modal.Object");

class ModalEditLoadObject extends ModalObject {

  get loadID() {return $('.loads-form-number h4:nth-child(2)');}



}

module.exports = new ModalEditLoadObject();