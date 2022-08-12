class TicketPriceScreen {

    easternTicketPriceBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/btnPrice"]`
    westernTicketPriceBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/btnPrice1"]`
    stationSelector = `//*[@resource-id="com.decodelab.amaderrel:id/card_view1"]`
    fromStationInputSelector = `//*[@resource-id="com.decodelab.amaderrel:id/etFrom"]`
    toStationInputSelector = `//*[@resource-id="com.decodelab.amaderrel:id/etTo"]`
    stationSearchInputSelector = `//*[@resource-id="com.decodelab.amaderrel:id/etSearch"]`
    distanceTextSelector = `//*[@resource-id="com.decodelab.amaderrel:id/txa"]`
    shovonChairPriceTextSelector = `//*[@resource-id="com.decodelab.amaderrel:id/txF"]`
    westernTrainNameSelector=`//*[@resource-id="com.decodelab.amaderrel:id/textView1"]`


    





    async clickEasternTicketPriceBtn() {
        await $(this.easternTicketPriceBtnSelector).click()
    }
    async clickWasternTicketPriceBtn() {
        await $(this.westernTicketPriceBtnSelector).click()
    }
    async isStationListExist() {
        return await $(this.stationSelector).isExisting()
    }
    async enterFromStationName(stationName) {
        await $(this.fromStationInputSelector).click()
        await $(this.stationSearchInputSelector).setValue(stationName)
    }
    async enterToStationName(stationName) {
        await $(this.toStationInputSelector).click()
        await $(this.stationSearchInputSelector).setValue(stationName)
    }
    async selectFromStation(stationName) {
        await $$(`//*[@text="${stationName}"]`)[1].click()
    }
    async selectToStation(stationName) {
        await $$(`//*[@text="${stationName}"]`)[1].click()
    }
    async clickFirstStation() {
      await $(this.stationSelector).click()
    }
    async getDistance() {
        return await $(this.distanceTextSelector).getText()
    }
    async getShovonChairPrice() {
        return await $(this.shovonChairPriceTextSelector).getText()
    }
    async clickFirstWesternTrain() {
       await $(this.westernTrainNameSelector).click()
    }


}

module.exports = new TicketPriceScreen()