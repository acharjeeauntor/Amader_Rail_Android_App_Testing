
class SearchScreen {

    stationOrTrainNameSelector = `//*[@resource-id="com.decodelab.amaderrel:id/tvName"]`
    searchStationInputSelector = `//*[@resource-id="com.decodelab.amaderrel:id/etStation"]`
    searchTrainInputSelector = `//*[@resource-id="com.decodelab.amaderrel:id/etName"]`
    noResultMessageSelector=`//*[@resource-id="com.decodelab.amaderrel:id/tvNoResult"]`
    stationTextSelector=`//*[@resource-id="com.decodelab.amaderrel:id/txStation"]`
    trainTextSelector=`//*[@resource-id="com.decodelab.amaderrel:id/txName"]`
    toReachStationTextSelector=`//*[@resource-id="com.decodelab.amaderrel:id/tvTo"]`

    async getFirstStationName() {
        return await $(this.stationOrTrainNameSelector).getText()
    }
    async getFirstTrainName() {
        return await $(this.stationOrTrainNameSelector).getText()
    }
    async getTrainList() {
        let trainList = []
        let locatorList = await $$(this.stationOrTrainNameSelector)
        for (var name of locatorList) {
            trainList.push(await name.getText())
        }
        return trainList
    }
    async getToReachStationNameList() {
        let stationList = []
        let locatorList = await $$(this.toReachStationTextSelector)
        for (var name of locatorList) {
            stationList.push(await name.getText())
        }
        return stationList
    }
    async enterStationName(name) {
        await (await $(this.searchStationInputSelector)).setValue(name)
    }
    async enterTrainName(name) {
        await (await $(this.searchTrainInputSelector)).setValue(name)
    }
    async clickIntoFirstStationName() {
        await $(this.stationOrTrainNameSelector).click()
    }
    async clickIntoFirstTrainName() {
        await $(this.stationOrTrainNameSelector).click()
    }
    async getNoResultMessage() {
        return await $(this.noResultMessageSelector).getText()
    }
    async clickTrainNameTab() {
        await $(this.trainTextSelector).click()
    }


}

module.exports = new SearchScreen();
