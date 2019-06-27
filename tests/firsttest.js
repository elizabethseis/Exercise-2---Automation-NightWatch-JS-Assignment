module.exports={
    'Excercise 1'(browser){    
        const windowsLink= '#shellmenu_1'
        const windowsDrp='#c-shellmenu_43'
        const buyWindowsLink='#c-shellmenu_45'
        const whyWindowsLink='#c-shellmenu_46'
        const featuresLink='#c-shellmenu_47'
        const text1='h1.c-heading'
        const searchBtn='#search'
        const inputSearch='#cli_shellHeaderSearchInput'
        const nextBtn1='//span[contains(text(),"Next")]'
        browser
        .url('https://www.microsoft.com/en-us/')
        browser.windowMaximize('current')
        browser.assert.containsText(windowsLink,'Windows')
        .waitForElementVisible('#shellmenu_1')
        .saveScreenshot('./reports/homepage.png')
        .click(windowsLink)
        .waitForElementVisible(windowsDrp)
        .click(windowsDrp)
        browser.verify.visible(buyWindowsLink)
        browser.verify.visible(whyWindowsLink)
        browser.verify.visible(featuresLink)
        .saveScreenshot('./reports/links.png')
       .click(featuresLink)
       .waitForElementVisible(text1)
        browser.assert.containsText(text1,'The best Windows keeps getting better')
        .saveScreenshot('./reports/Text1.png')
        .waitForElementVisible(searchBtn)
        .click(searchBtn)
         .setValue(inputSearch,'Visual Studio Community')
        .saveScreenshot('./reports/results.png')
        browser.useXpath()
        .click('//button[@id="search"]')
        .waitForElementVisible('//button[@id="R1MarketRedirect-close"]')
        .saveScreenshot('./reports/warning.png')
       .click('//button[@id="R1MarketRedirect-close"]')        
       .waitForElementVisible('//a[contains(text(),"Free IDE and Developer Tools | Visual Studio Commu")]', 1000)
        browser.elements('xpath', '//h3[@class="f-hyperlink"]', getInfo) 
      
     var i
        for(i=1; i<4; i++){
            
            if(nextBtn1.status !== -1){

                browser.verify.visible(nextBtn1,"The next button is displayed in page: "+ i )
                  .click(nextBtn1)
              } else {
                console.log('Next button is not displayed')
              }
        }

        function getInfo(elements) {
      
            if(elements.value.length==20){
                console.log('Number of results: ' + elements.value.length);
            }
            else{
                console.log('Number of results: ' + elements.value.length);
            }
      
            elements.value.forEach(function (element) {
              browser.elementIdText(element.ELEMENT, function (res) {
                console.log('RESULT ' + element.ELEMENT + '\n', res.value);
              });
            });
          }
            

    }
    

}

  
