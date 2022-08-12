const landingScreen = require("../../screenobjects/landingscreen")
const registrationScreen = require("../../screenobjects/registrationscreen")
const homeScreen = require("../../screenobjects/homescreen")
const ticketPriceScreen = require("../../screenobjects/ticketpricescreen")
const ticketPriceData = require("../../testdata/ticketpricedata.json")


describe('Verify Train Ticket Price Feature', () => {

    before(async()=>{
        await landingScreen.clickSkipBtn()
        await registrationScreen.clickSkipRegistrationBtn()
        await homeScreen.clickTicketPriceButton()
    })
    it('TC _021: Verify user can view Eastern Region train ticket price',async()=>{
        await ticketPriceScreen.clickEasternTicketPriceBtn()
        expect(await ticketPriceScreen.isStationListExist()).toBeTruthy()
        await ticketPriceScreen.enterFromStationName(ticketPriceData.easternRegion.fromStationName)
        await ticketPriceScreen.selectFromStation(ticketPriceData.easternRegion.fromStationName)
        await ticketPriceScreen.enterToStationName(ticketPriceData.easternRegion.ToStationName)
        await ticketPriceScreen.selectToStation(ticketPriceData.easternRegion.ToStationName)
        await ticketPriceScreen.clickFirstStation()
        expect(await ticketPriceScreen.getDistance()).toContain(ticketPriceData.easternRegion.distance)
        expect(await ticketPriceScreen.getShovonChairPrice()).toContain(ticketPriceData.easternRegion.shovonChairPrice)
    })

    it('TC _022: Verify user can view Western Region train ticket price',async()=>{
        await driver.back()
        await driver.back()
        await ticketPriceScreen.clickWasternTicketPriceBtn()
        await ticketPriceScreen.clickFirstWesternTrain()
        expect(await ticketPriceScreen.isStationListExist()).toBeTruthy()
        await ticketPriceScreen.enterFromStationName(ticketPriceData.weasternRegion.fromStationName)
        await ticketPriceScreen.selectFromStation(ticketPriceData.weasternRegion.fromStationName)
        await ticketPriceScreen.enterToStationName(ticketPriceData.weasternRegion.ToStationName)
        await ticketPriceScreen.selectToStation(ticketPriceData.weasternRegion.ToStationName)
        await ticketPriceScreen.clickFirstStation()
        expect(await ticketPriceScreen.getDistance()).toContain(ticketPriceData.weasternRegion.distance)
        expect(await ticketPriceScreen.getShovonChairPrice()).toContain(ticketPriceData.weasternRegion.shovonChairPrice)
    })


});