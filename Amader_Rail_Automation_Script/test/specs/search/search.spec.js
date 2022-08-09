const landingScreen = require("../../screenobjects/landingscreen")
const registrationScreen = require("../../screenobjects/registrationscreen")
const homeScreen = require("../../screenobjects/homescreen")
const searchScreen = require("../../screenobjects/searchscreen")
const searchData = require("../../testdata/searchdata.json")

describe('Verify Search Station/Train Feature', () => {
    before(async () => {
        await landingScreen.clickSkipBtn()
        await registrationScreen.clickSkipRegistrationBtn()
        await homeScreen.clickSearchButton()
    })

    it('TC _011: Verify user can view "আক্কেলপুর স্টেশন" in first position when search entry is empty',async()=>{
        expect(await searchScreen.getFirstStationName()).toContain(searchData.searchByStation.firstStationName)
    })

    it("TC _012: Verify user can't found any station list after searching by invalid Station name", async () => {
        await searchScreen.enterStationName(searchData.searchByStation.invalidStationName)
        expect(await searchScreen.getNoResultMessage()).toContain(searchData.searchByStation.noResultMsg)
        
    })

    it('TC _013: Verify user can search train by valid Station name', async () => {
        await searchScreen.enterStationName(searchData.searchByStation.stationName)
        await searchScreen.clickIntoFirstStationName()
        expect(await searchScreen.getTrainList()).toStrictEqual(searchData.searchByStation.trainList)
    })
    it('TC _014: Verify user can view "অগ্নিবীনা এক্সপ্রেস" in first position when search entry is empty',async()=>{
        await driver.back()
        await homeScreen.clickSearchButton()
        await searchScreen.clickTrainNameTab()
        expect(await searchScreen.getFirstTrainName()).toContain(searchData.searchByTrain.firstTrainName)
    })

    it("TC _015: Verify user can't found any train list after searching by invalid train name", async () => {
        await searchScreen.enterTrainName(searchData.searchByTrain.invalidTrainName)
        expect(await searchScreen.getNoResultMessage()).toContain(searchData.searchByTrain.noResultMsg)
        
    })

    it('TC _016: Verify user can search train by valid train name', async () => {
        await searchScreen.enterTrainName(searchData.searchByTrain.trainName)
        await searchScreen.clickIntoFirstTrainName()
        expect(await searchScreen.getToReachStationNameList()).toStrictEqual(searchData.searchByTrain.stationList)
    })


    
});