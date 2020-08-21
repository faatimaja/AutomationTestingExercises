// Frames - when we have one page inside existing page
// We know it is a frame when we see iframe or similar

describe('Protractor Alerts steps', function(){
    it('Open NonAngular js Website', function() {
        browser.waitForAngularEnabled(false);
        //to maximize selemium
        browser.driver.manage().window.maximize();

        browser.get("http://qaclickacademy.com/AutomationPractice/");

        browser.swithcTo().
        element(by.css("a[href*='sign_in")).getTest().then(function(text)
        {
            console.log(text);
        })
    });
})

//ni ovaj ne radi - greska 199