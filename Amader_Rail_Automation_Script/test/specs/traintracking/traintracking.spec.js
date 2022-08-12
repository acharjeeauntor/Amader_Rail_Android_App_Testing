const landingScreen = require("../../screenobjects/landingscreen")
const registrationScreen = require("../../screenobjects/registrationscreen")
const homeScreen = require("../../screenobjects/homescreen")
const traintrackingScreen = require("../../screenobjects/traintrackingscreen")
const traintrackingData = require("../../testdata/traintrackingdata.json")


describe('Verify Train Tracking Feature', () => {

    before(async()=>{
        await landingScreen.clickSkipBtn()
        await registrationScreen.clickSkipRegistrationBtn()
        await homeScreen.clickTrainTackingButton()
    })
    it('TC _023: Verify user can view train tracking information',async()=>{
        await traintrackingScreen.clickInfoBtn()
        expect(await traintrackingScreen.getInfoText()).toContain(traintrackingData.info)
    })


});