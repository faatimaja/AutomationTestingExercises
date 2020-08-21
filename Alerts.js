describe('Protractor Alerts steps', function(){
    it('Open NonAngular js Website', function(){
        browser.waitForAngularEnabled(false);
        browser.get("http://qaclickacademy.com/AutomationPractice/");
        element(by.id("confirmbtn")).click();

        browser.switchTo().alert().accept().then(function(){
            browser.sleep(5000);
        })

    })
})

//dismiss instead of accept if we want to chose NO


//Ovo ne radi...