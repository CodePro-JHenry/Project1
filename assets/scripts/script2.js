//Function generator Function : understanding "closures" in JavaScript
function generateFunction(numToAdd) {
    //This creates a "closure" that "captures" the original value of numToAdd when
    //the parent is called.
    function adderFunction(num) {
        return num + numToAdd;
    }
    //The returned function definition now has a hard-set value internally for numToAdd.
    return adderFunction;
}

function generatePowerFunc(power) {
    return function(num) {
        return num ** power;
    }
}

var squareIt = generatePowerFunc(2);
var cubeIt = generatePowerFunc(3);

console.log(squareIt(2));
console.log(cubeIt(2));


var addTwoFunc = generateFunction(2);
var addFiveFunc = generateFunction(5);
var result1 = addTwoFunc(2);
var result2 = addFiveFunc(2);
console.log(result1);  // should log 4
console.log(result2);  // should log 7 (i.e. the function returned and assigned to addFiveFunc, should add 5 to whatever number is passed. (edited) 

console.log(addTwoFunc(40)); //will log 42 because it "remembers" the value 2 originally supplied when the returned function was created.
