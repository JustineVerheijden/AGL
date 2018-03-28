describe("Pets filter",function(){
    let maleArray;
    let femaleArray;
    const petType = "Cat";
    const maleGender = "Male";
    const femaleGender= "Female";
    
    beforeEach(function(){
        maleArray = [];
        femaleArray = [];
    });
    describe("Cat data",function(){
        
        it("adds name to array when pet type is Cat", function(){
            let pet = {"name":"Garfield","type":"Cat"};
            populateArrayWithPetName(pet, petType, maleArray);
            expect(maleArray.length).toBe(1);
        });
        it("does not add name to array when pet type is not Cat", function(){
            let pet = {"name":"Garfield","type":"Dog"};
            populateArrayWithPetName(pet, petType, maleArray);
            expect(maleArray.length).toBe(0);
        });
    });
    describe("Gender filter",function(){
    
        it("populates array for gender that was passed in", function(){
            let person = {"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"}]};
            findPetsForGender(person, maleGender, petType, maleArray)
            expect(maleArray.length).toBe(1);
        });

        it("does not populate array for person with a different gender to that which was passed in", function(){
            let person = {"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"}]};
            findPetsForGender(person, femaleGender, petType, maleArray)
            expect(maleArray.length).toBe(0);
        });

        it("does not populate array if no pets exist against the person", function(){
            let person = {"name":"Bob","gender":"Male","age":23,"pets":null};
            findPetsForGender(person, maleGender, petType, maleArray)
            expect(maleArray.length).toBe(0);
        });

        it("populates array for gender if more than one Cat exists for person", function(){
            let person = {"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Garfield2","type":"Cat"},{"name":"Garfield3","type":"Cat"},{"name":"Garfield4","type":"Cat"},{"name":"Garfield5","type":"Cat"}]};
            findPetsForGender(person, maleGender, petType, maleArray)
            expect(maleArray.length).toBe(5);
        });
    });
    
    describe("Populates array with Cat data for Gender",function(){
        it("can have no males present", function(){
            const femalesOnly = [{"name":"Bob","gender":"Female","age":23,"pets":[{"name":"Garfield","type":"Cat"}]},{"name":"Jennifer","gender":"Female","age":18,"pets":[{"name":"Garfield","type":"Cat"}]},{"name":"Steve","gender":"Female","age":45,"pets":null},{"name":"Fred","gender":"Female","age":40,"pets":[{"name":"Tom","type":"Cat"}]},{"name":"Samantha","gender":"Female","age":40,"pets":[{"name":"Tabby","type":"Cat"}]},{"name":"Alice","gender":"Female","age":64,"pets":[{"name":"Simba","type":"Cat"}]}];
            let noMales = [];
            noMales = findSortedCatNamesByGender (femalesOnly, maleGender, petType);
            expect(noMales.length).toBe(0);
        });
        it("can have no females present", function(){
            const malesOnly = [{}];
            let noFemales = [];
            noMales = findSortedCatNamesByGender (malesOnly, femaleGender, petType);
            expect(noFemales.length).toBe(0);
        });
        it("can have one male present", function(){
            const oneMale =[{"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"}]}];
            let oneMaleArray = [];
            oneMaleArray = findSortedCatNamesByGender (oneMale, maleGender, petType);
            expect(oneMaleArray.length).toBe(1);
        });
        it("can have many females present", function(){
            const manyFemales = [{"name":"Bob","gender":"Female","age":23,"pets":[{"name":"Garfield","type":"Cat"}]},{"name":"Jennifer","gender":"Female","age":18,"pets":[{"name":"Garfield","type":"Cat"}]},{"name":"Steve","gender":"Female","age":45,"pets":null},{"name":"Fred","gender":"Female","age":40,"pets":[{"name":"Tom","type":"Cat"}]},{"name":"Samantha","gender":"Female","age":40,"pets":[{"name":"Tabby","type":"Cat"}]},{"name":"Alice","gender":"Female","age":64,"pets":[{"name":"Simba","type":"Cat"}]}];
            let allFemales = [];
            allFemales = findSortedCatNamesByGender (manyFemales, femaleGender, petType);
            expect(allFemales.length).toBe(5);
        });
        it("can have more than one cat associated with person", function(){
            let manyFemalesWithManyCats = [{"name":"Bob","gender":"Female","age":23,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Garfield2","type":"Cat"},{"name":"Garfield3","type":"Cat"},{"name":"Garfield4","type":"Cat"},{"name":"Garfield5","type":"Cat"}]},{"name":"Jennifer","gender":"Female","age":18,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Garfield2","type":"Cat"},{"name":"Garfield3","type":"Cat"},{"name":"Garfield4","type":"Cat"},{"name":"Garfield5","type":"Cat"}]},{"name":"Steve","gender":"Female","age":45,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Garfield2","type":"Cat"},{"name":"Garfield3","type":"Cat"},{"name":"Garfield4","type":"Cat"},{"name":"Garfield5","type":"Cat"}]},{"name":"Fred","gender":"Female","age":40,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Garfield2","type":"Cat"},{"name":"Garfield3","type":"Cat"},{"name":"Garfield4","type":"Cat"},{"name":"Garfield5","type":"Cat"}]},{"name":"Samantha","gender":"Female","age":40,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Garfield2","type":"Cat"},{"name":"Garfield3","type":"Cat"},{"name":"Garfield4","type":"Cat"},{"name":"Garfield5","type":"Cat"}]},{"name":"Alice","gender":"Female","age":64,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Garfield2","type":"Cat"},{"name":"Garfield3","type":"Cat"},{"name":"Garfield4","type":"Cat"},{"name":"Garfield5","type":"Cat"}]}];
            let femalesWithManyCats = [];
            femalesWithManyCats = findSortedCatNamesByGender (manyFemalesWithManyCats, femaleGender, petType);
            expect(femalesWithManyCats.length).toBe(30);
        });
    });

    describe("AJAX",function(){
        it("throws error if AJAX call fails", function(){
            expect(ajaxFail).toThrow("AJAX_Failed_Error");
        });
    });
});