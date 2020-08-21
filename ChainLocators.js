describe('Chain Locators Demo', function() {
    it('should add a todo', function() {
        browser.get('https://juliemr.github.io/protractor-demo/');

        //locator repeater, chain locator, and css for identical text

        element(by.model("first")).sendKeys("3");
        element(by.model("operator")).element(by.css("option:nth-child(4)")).click();  //I choose multiplication operator
        element(by.model("second")).sendKeys("4");
        element(by.id("gobutton")).click();
        //parent and inside the child element -element....element

        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
            console.log(text);
        })

        /* element(by.css("td:nth-child(3)")).getText().then(function(text){
            console.log(text);
        })*/



    });
});