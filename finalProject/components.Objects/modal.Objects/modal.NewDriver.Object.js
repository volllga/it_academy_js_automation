const ModalObject = require("./modal.Object");

class ModalNewDriverObject extends ModalObject {

    get inputFirstName() {return $('#driver-firstname')}
    get inputLastName() {return $('#driver-lastname')}
    get inputCoDriver() {return $('//*[text()="Co-Driver"]/..//input')}

}

module.exports = new ModalNewDriverObject();