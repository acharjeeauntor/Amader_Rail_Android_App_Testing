const landingScreen = require("../../screenobjects/landingscreen")
const registrationScreen = require("../../screenobjects/registrationscreen")
const homeScreen = require("../../screenobjects/homescreen")
const traintimelineScreen = require("../../screenobjects/traintimelinescreen")
const traintimelineData = require("../../testdata/traintimelinedata.json")


describe('Verify Train Timeline Feature', () => {

    before(async()=>{
        await landingScreen.clickSkipBtn()
        await registrationScreen.clickSkipRegistrationBtn()
        await homeScreen.clickTrainTimeButton()
    })
    it('TC _017: Verify User can view train list when search train by start and stop station name',async()=>{
        await traintimelineScreen.selectFromStation(traintimelineData.fromStationName)
        await traintimelineScreen.selectToStation(traintimelineData.toStationName)
        expect(await traintimelineScreen.getTrainList()).toStrictEqual(traintimelineData.trainList)
    })

    it('TC _018: Verify User can view train details information when search train by start and stop station name',async()=>{
        let firstTrainName= traintimelineData.trainList[0]
        let trainInfo = await traintimelineScreen.getfirstTrainInfo(firstTrainName)
        expect(trainInfo.trainName).toBe(firstTrainName)
        expect(trainInfo.trainFromStationName).toBe(traintimelineData.fromStationName)
        expect(trainInfo.trainToStationName).toBe(traintimelineData.toStationName)
        expect(trainInfo.trainOffday).toBe(traintimelineData.firstTrainOffDay)
    })

    it('TC _019: Verify User can view train stopage station name',async()=>{
        await traintimelineScreen.clickStopageBtn()
        expect(await traintimelineScreen.isStopageTitleExist()).toBeTruthy()
    })

    it('TC _020: Verify User can view train ticket price details information',async()=>{
        await driver.back()
        await traintimelineScreen.clickTicketPriceBtn()
        await traintimelineScreen.clickFirstStationsTransection()
        expect(await traintimelineScreen.getShovonChairPrice()).toBe(traintimelineData.shovonChairPrice)
    })


});