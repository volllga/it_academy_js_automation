class HeaderObject {

    get subscribeButton () {return $('.warning-message-content > button')}
    get warningTitle () {return $('//*[@class="warning-message-content"]/span[1]')}

}

module.exports = new HeaderObject();