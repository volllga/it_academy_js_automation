const ModalObject = require("./modal.Object");

class ModalConfirmObject extends ModalObject {
  get formTitle() {
    return $(".c-modal--red h5");
  }
  get buttonClose() {
    return $(".c-modal--red .c-modal__close");
  }
  get buttonCancel() {
    return $(".c-modal--red .c-button--black");
  }
  get buttonDelete() {
    return $(".c-modal--red .c-button--red");
  }
  get buttonYes() {
    return $('//*[text()="Yes"]');
  }
  get messageText() {
    return $(".c-modal--red .c-modal__body div");
  }
}

module.exports = new ModalConfirmObject();
