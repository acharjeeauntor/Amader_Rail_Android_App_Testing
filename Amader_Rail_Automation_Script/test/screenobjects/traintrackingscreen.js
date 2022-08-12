class TrainTrackingScreen{
infoBtnSelector=`//*[@resource-id="com.decodelab.amaderrel:id/button"]`
infoTextSelector=`//*[@resource-id="com.decodelab.amaderrel:id/textView2"]`



async clickInfoBtn(){
    await $(this.infoBtnSelector).click()
}

async getInfoText(){
    return await $(this.infoTextSelector).getText()
}




}

module.exports = new TrainTrackingScreen()