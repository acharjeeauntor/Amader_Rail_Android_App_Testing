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
});