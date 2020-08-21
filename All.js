describe('Protractor Element Demo', function() {

    //I will make one reusable function
    function Add(a,b){
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    }
    it('locators', function() {

        //I want to list all results/outputs

        browser.get('http://juliemr.github.io/protractor-demo/');

        //tree rows will be added because we need all tree results

        /*I will put this all in one function
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("4");
        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("7");
        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("8");
        element(by.id("gobutton")).click();
       */
        Add(2,3);
        Add(4,3);
        Add(8,3);
        Add(5,3);



       /* element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
            console.log(text);
        }) */
        //count
        element.all(by.repeater("result in memory")).count().then(function(text){
            console.log(text);
        })
        element.all(by.repeater("result in memory")).each(function(item) {
            item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
                console.log(text);
            })
        })

        //to get all result, complete array of elements

    });
});