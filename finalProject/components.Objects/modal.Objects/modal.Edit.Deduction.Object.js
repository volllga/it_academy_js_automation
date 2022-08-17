const ModalObject = require("./modal.Object");

class ModalEditDeductionObject extends ModalObject {

    get buttonRemove () {
        return $('.driver-statements-modal-payment__footer a');
    }
}

module.exports = new ModalEditDeductionObject();
