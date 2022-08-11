const landingScreen = require("../../screenobjects/landingscreen")
const registrationScreen = require("../../screenobjects/registrationscreen")
const homeScreen = require("../../screenobjects/homescreen")
const ticketPriceScreen = require("../../screenobjects/ticketpricescreen")
//const traintimelineData = require("../../testdata/traintimelinedata.json")


describe('Verify Train Ticket Price Feature', () => {

    before(async()=>{
        await landingScreen.clickSkipBtn()
        await registrationScreen.clickSkipRegistrationBtn()
        await homeScreen.clickTicketPriceButton()
    })
    it('TC _021: Verify user can view Eastern Region train ticket price',async()=>{
        await ticketPriceScreen.clickEasternTicketPriceBtn()
    })

    // it('TC _022: Verify user can view Western Region train ticket price',async()=>{
    //     await ticketPriceScreen.clickEasternTicketPriceBtn()
    // })


});