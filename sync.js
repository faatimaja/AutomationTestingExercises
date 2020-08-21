describe('Protractor Synchronisation steps',function() {

    it('Open NonAngular js website Alerts',function() {
        browser.witForAngularEnabled(false);
        browser.get("http://www.itgeared.com/demo/1506-ayax-loading.html");

        element(by.css("a[href*='loadAyax']")).click();

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.invisibilityOf(element(by.id("loader"))),8000);

        element(by.id("result")).getText().then(function(text){
            console.log(text);
        })

    })
})
