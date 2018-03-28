"use strict"

function ajax() {
    const maleGender = "Male";
    const femaleGender= "Female";
    let outerIndex;
    let maleArray = [];
    let femaleArray = [];
    const catUrl = "http://agl-developer-test.azurewebsites.net/people.json";
    const $male = $("#male");
    const $female = $("#female");
    const petType = "Cat";

    return $.ajax({
        type:"GET",
        dataType:"jsonp",
        url: catUrl,
        contentType: "txt/plain"
    })
    .done(function (data){
        maleArray = findSortedCatNamesByGender(data, maleGender, petType);
        femaleArray = findSortedCatNamesByGender(data, femaleGender, petType);
        writeCatNamesToHTMLByGender(maleArray, $male);
        writeCatNamesToHTMLByGender(femaleArray, $female);
    })
    .fail(function(){
        ajaxFail();
    });
}
function findSortedCatNamesByGender (people, genderToFind, petType){
    let genderArray = [];
    $.each(people, (outerIndex) => {
        return findPetsForGender(people[outerIndex], genderToFind, petType, genderArray);
    });
    genderArray.sort();
    return genderArray;
}

function findPetsForGender (person, genderToFind, petType, genderArray){
    if (person.gender===genderToFind && person.pets){
        person.pets.map((pet)=>{
            populateArrayWithPetName(pet,petType,genderArray);
        });
    }
}

function populateArrayWithPetName(pet, petType, genderArray){
    if (pet.type ===petType){
        genderArray.push(pet.name);
    }
}

function writeCatNamesToHTMLByGender(genderArray, $genderId){
    genderArray.map((catName)=>{
        let $newCat= $("<li>"+catName+"</li>");
        $genderId.append($newCat);
    });
}

function ajaxFail(){
    throw "AJAX_Failed_Error";
};

ajax();