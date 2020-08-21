describe('Protractor Element Demo', function() {
    var obj= require("./jsobjesct.js");
    var d=requrie("./data.js");
    it('locators', function() {

        /*browser.waitForAngularEnabled(false); //for nonAngular applications
        browser.get("http://google.com");
        browser.sleep(1000);*/

        beforeEch(function(){
            obj.getURL();
        });

        it('Testing calculator functionlity', function(){

        })  //?

        obj.firstinput.sendKeys(d.datadrive.firstinput);
        obj.secondinput.sendKeys(d.datadrive.secondinput);
        obj.goButton.click();

        expect(obj.result.getText()).toBe("8");

        obj.result.getText().then(function(text){
            console.log(text);
        })
/*
       browser.get('http://juliemr.github.io/protractor-demo/');
       element(by.model("first")).sendKeys("3");
       element(by.model("second")).sendKeys("4");
       element(by.id("gobutton")).click();
       //CSS: tagname[attribute='value']

        //Jasmine takes care of promise resolve
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8"); //to know if it passed or not
*/
       /*element(by.css("h2[class='ng-binding']")).getText().then(function(text){  //promise resolve
           console.log(text);
       })*/

       //browser.sleep(5000); //just to see it visually

        //element(by.model("first")).sendKeys("3").then(function(){ browser.sleep(1000); }); - or like this to include it in protracotr and not run in JS since JS is asynchronus


    });
    afterEach(function(){
        console.log('Test is completed.');
    });
});