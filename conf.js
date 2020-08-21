exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub', //iskomentarisem ako necu da pokrecem preko selenium servera
   // specs: ['todo-spec.js'],
   // specs: ['ElementBasics.js'],
   // specs: ['ChainLocators.js'],
   // specs: ['All.js'] ,
   // specs: ['DropDowns.js'],
   // spec: ['Actions.js'],
   // specs: ['Alerts.js'],
   // specs: ['Frames.js'],
    specs: ['PracticeExercise.js'],


    //To maxiise browser
    onPrepare:function(){
        browser.driver.manage().window().maximise();
    }


    /*capabilities: {
        'browserName': 'firefox'
    }*/
};