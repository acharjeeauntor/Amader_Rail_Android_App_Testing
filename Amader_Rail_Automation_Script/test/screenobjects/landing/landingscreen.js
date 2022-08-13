class LandingScreen {
    skipBtnSelector=`//*[@resource-id="com.decodelab.amaderrel:id/btn_skip"]`
    nextBtnSelector=`//*[@resource-id="com.decodelab.amaderrel:id/btn_next"]`
    liveTrackingTextSelector=`//*[@text="লাইভ ট্র্যাকিং"]`
    noticeBoardTextSelector=`//*[@text="নোটিশ বোর্ড"]`

    
    async isLiveTrackingLandingPageExist(){
        return await (await $(this.liveTrackingTextSelector)).isExisting()
    }

    async isNoticeBoardLandingPageExist(){
       return await (await $(this.noticeBoardTextSelector)).isExisting()
    }

    async clickSkipBtn(){
        await $(this.skipBtnSelector).click()
    }

    async clickNextBtn(){
        await $(this.nextBtnSelector).click() 
    }
}

module.exports = new LandingScreen();