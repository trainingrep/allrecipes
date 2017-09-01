
let Helper = function() {

    let EC = protractor.ExpectedConditions;
    
    this.setSettings = function(ignoreSync, waitForAng) {
        browser.ignoreSynchronization = ignoreSync;
        browser.waitForAngularEnabled(waitForAng);    
    };

    this.goToSite = function(url) {
        browser.get(url);        
    };

    this.waitForElementAppearance = function(element) {
        browser.driver.wait(EC.presenceOf(element, browser.elementTimeout));
    };
};

module.exports = Helper;