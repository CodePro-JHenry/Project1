/*
var url = 'https://jsonplaceholder.typicode.com/posts'

$.get(url, function (response) {
    console.log(response)
    var rowEl = $('<div>')
    $("#main").append(rowEl)

    for (var i = 0; i < response.length; i++) {
        var colEl = $('<div>')
        colEl.addClass('three column')
        colEl.text(response.body)

        rowEl.append(colEl)
    }
})
*/

/*
function isPangram(strToCheck) {
    var retVal = true;
    // Check to see if sentence contains particular letter each for a-z
    // create string variable containing the alphabet
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    // Loop through alphabet string
    for(var i = 0; i < alpha.length; i++) {
        // Check to see if current letter exists in strToCheck
        // if letter exists in strToCheck, then console log true
        if (!strToCheck.includes(alpha[i])) {
            return false;
        }
    }

    return retVal;
}

console.log("String is a pangram: " + isPangram("The quick brown fox jumps over the lax dog."));
*/

/*
var a = 1;

function outer(){
	a = 2;

    function inner(){
        var a;
        a++;
        console.log(a);
		a = 5;
	}

    inner();
}

console.log(a); // log 1
outer();
console.log(a); // log 1
*/


var myName = "Jeremy";
localStorage.setItem("userName", myName);

var fromLS = localStorage.getItem("userName");
console.log("Hi, " + fromLS + "!");




var myObj = {
    name: "Jeremy",
    favFood: "chocolate",
    age: 44,
    petName: "Max"
};
var myArray = [
    myObj,
    {
        name: "Michael",
        favFood: "anchovies",
        age: 56,
        petName: "Fido"
    }
];

//var myObjStr = "[{name: 'Jeremy', favFood: 'chocolate', age: 44, petName: 'Max'},{name: 'Jeremy', favFood: 'chocolate', age: 44, petName: 'Max'}]";

localStorage.setItem("userObject", JSON.stringify(myObj));
var objStringFromLs = localStorage.getItem("userObject");
console.log(objStringFromLs);

var objFromString = JSON.parse(objStringFromLs);
console.log(objFromString.name);


localStorage.setItem("userArray", JSON.stringify(myArray));
var arrayStringFromLs = localStorage.getItem("userArray");
console.log(arrayStringFromLs);

var arrayFromString = JSON.parse(arrayStringFromLs);
for(var i = 0; i < arrayFromString.length; i++) {
    console.log(arrayFromString[i].name);
}



