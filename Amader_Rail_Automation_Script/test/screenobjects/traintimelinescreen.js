class TrainTimelineScreen {

    fromStationInputSelector = `//*[@resource-id="com.decodelab.amaderrel:id/etFrom"]`
    toStationInputSelector = `//*[@resource-id="com.decodelab.amaderrel:id/etTo"]`
    searchBoxInputSelector = `//*[@resource-id="com.decodelab.amaderrel:id/etSearch]`
    stationOrTrainTextSelector = `//*[@resource-id="com.decodelab.amaderrel:id/tvName"]`
    trainNameTextSelector = `//*[@resource-id="com.decodelab.amaderrel:id/txName"]`
    fromStationTextSelector = `//*[@resource-id="com.decodelab.amaderrel:id/txFrom"]`
    toStationTextSelector = `//*[@resource-id="com.decodelab.amaderrel:id/txTo"]`
    trainOffdayTextSelector = `//*[@resource-id="com.decodelab.amaderrel:id/txOff"]`
    trainStopageBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/txDetails"]`
    ticketpriceBtnSelector = `//*[@resource-id="com.decodelab.amaderrel:id/btnTicketPrice"]`
    trainStopageStationTextSelector = `//*[@resource-id="com.decodelab.amaderrel:id/txBangla"]`
    firstTransectionXpath = `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout`
    shovonChairPriceTextSelector = `//*[@resource-id="com.decodelab.amaderrel:id/txF"]`
    stopageTitleTextSelector=`//*[@text="যাত্রা বিরতির স্টেশন"]`

    



    async selectFromStation(name) {
        await $(this.fromStationInputSelector).click()
        await $(`android= new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${name}")`).click()

    }
    async selectToStation(name) {
        await $(this.toStationInputSelector).click()
        await $(`android= new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${name}")`).click()
    }
    async getTrainList() {
        let trainList = []
        let locatorList = await $$(this.stationOrTrainTextSelector)
        for (var name of locatorList) {
            trainList.push(await name.getText())
        }
        return trainList
    }

    async getfirstTrainInfo(trainName) {
        var trainInfo = {}
        await $(`//*[@text='${trainName}']`).click()
        trainInfo.trainName = await $(this.trainNameTextSelector).getText()
        trainInfo.trainFromStationName = await $(this.fromStationTextSelector).getText()
        trainInfo.trainToStationName = await $(this.toStationTextSelector).getText()
        trainInfo.trainOffday = await $(this.trainOffdayTextSelector).getText()
        return trainInfo
    }

    async clickStopageBtn() {
        await $(this.trainStopageBtnSelector).click()
    }

    async clickTicketPriceBtn() {
        await $(this.ticketpriceBtnSelector).click()
    }

    async clickFirstStationsTransection() {
        await $(this.firstTransectionXpath).click()
    }

    async getShovonChairPrice(){
        return await $(this.shovonChairPriceTextSelector).getText()
    }

    async isStopageTitleExist(){
        return await $(this.stopageTitleTextSelector).isExisting()
    }


}

module.exports = new TrainTimelineScreen()