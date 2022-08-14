exports.config = {

    port: 4723,
    
    specs: [
        './test/specs/**/subscribe.spec.js'
    ],

    
    maxInstances: 10,
   
    capabilities: [{
        platformName:"Android",
        "appium:platformVersion": "10",
        "appium:deviceName":"Pixel-3a-test",
        "appium:automationName":"UIAutomator2",
        "appium:autoGrantPermissions":true,
        "appium:app":"./app/Amader Rail.apk",
        // "appium:noReset":true
        // "appium:appPackage":"com.decodelab.amaderrel",
        // "appium:appWaitActivity":".RegistrationActivity"
    }],
   
    logLevel: 'info',
    
    bail: 0,
    
    baseUrl: 'http://localhost',
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
    
    services: ['appium'],
   
    framework: 'mocha',
    
    reporters: ['spec'],


    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
