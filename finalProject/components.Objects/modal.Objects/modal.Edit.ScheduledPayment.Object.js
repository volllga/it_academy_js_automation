const ModalFormNewPayment = require("./modalFormNewPayment");

class ModalEditScheduledPaymentObject extends ModalFormNewPayment {

    get btnPause(){return $('[class="c-button-save c-button c-button--warning c-button--normal sched-payments-pause-btn"]')}
    get btnResume(){return $('.sched-payments-pause-btn--paused')}
    get notificationOnPause(){return $('.sched-payments-paused-at')}
    get notificationNext(){return $('.scheduled-payments-form__main > div:nth-child(3) > span')}

}

module.exports = new ModalEditScheduledPaymentObject();