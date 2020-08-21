describe('Protractor Alerts steps', function(){
    function selectItem(product){

    }
    it('Open NonAngular js Website', function(){

        browser.get("http://qaclickacademy.github.io/protocommerce/");
        element(by.name("name")).sendKeys("faatimaja");
        element(by.css("input[name='email']")).sendKeys("faatimaja@gmail.com");
        element(by.id("exampleInputPassword1")).sendKeys("password2");
        element(by.css("input[type='checkbox']")).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
        element.all(by.name("inlineRadioOptions")).first().click();
        element(by.buttonText("Submit")).click().then(function(){
            element(by.css("div[class*='success']")).getText().then(function(text){
                console.log(text);
            })
        });
        element(by.name("name")).clear();
        element(by.name("name")).sendKeys("M").then(function() {
            element(by.css("[class='alert alert-danger']")).getText().then(function (text) {
                console.log(text);
            })

            element(by.linkText("Shop")).click();

            selectItem("Samsung Note 8");
            //selectItem("Iphone X");

        });
    })
})