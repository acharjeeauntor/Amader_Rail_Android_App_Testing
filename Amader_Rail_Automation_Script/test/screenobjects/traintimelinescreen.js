class TrainTimelineScreen{

    fromStationInputSelector=`//*[@resource-id="com.decodelab.amaderrel:id/etFrom"]`
    toStationInputSelector=`//*[@resource-id="com.decodelab.amaderrel:id/etTo"]`
    searchBoxInputSelector=`//*[@resource-id="com.decodelab.amaderrel:id/etSearch]`
    stationOrTrainTextSelector = `//*[@resource-id="com.decodelab.amaderrel:id/tvName"]`


    async selectFromStation(name){
        await (await $(this.fromStationInputSelector)).click()
        await (await $(`android= new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${name}")`)).click()

    }
    async selectToStation(name){
        await (await $(this.toStationInputSelector)).click()
        await (await $(`android= new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${name}")`)).click()
    }
    async getTrainList() {
        let trainList = []
        let locatorList = await $$(this.stationOrTrainTextSelector)
        for (var name of locatorList) {
            trainList.push(await name.getText())
        }
        return trainList
    }
}

module.exports = new TrainTimelineScreen()