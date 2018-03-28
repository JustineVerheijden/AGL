describe("Integration testing of Cats", function() {
    beforeEach(function(){
        browser.waitForAngularEnabled(false);
        browser.get("http://localhost:3001/cats.html");
    
    });
    it("should display expected Male Cats", function() {
        let expectedMaleArray = ["Garfield","Jim","Max","Tom"];
        let maleArray =[];
        let male = element(by.id("male"));
        male.getText().then(function(text){
            maleArray = text.replace(/\n+/g," ").split(" ");
            expect(maleArray[1]).toEqual(expectedMaleArray[1]);
            expect(maleArray.length).toEqual(expectedMaleArray.length);
        });
    });

    it("should display expected Female Cats", function() {
        let expectedFemaleArray = ["Garfield","Simba","Tabby"];
        let femaleArray = [];
        let female = element(by.id("female"));
        female.getText().then(function(text){
            femaleArray = text.replace(/\n+/g," ").split(" ");
            expect(femaleArray[1]).toEqual(expectedFemaleArray[1]);
            expect(femaleArray.length).toEqual(expectedFemaleArray.length);
        });
    });
});