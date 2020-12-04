/*
    BOOLEAN

        -a booLean has two possible values of either true or false
*/

let lightIsOn = true;
console.log(lightIsOn)

let lightIsOff = false;
console.log(lightIsOff);

/*
    NULL

        -null is an empty value.  Think of it as an empty container:  nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty);

/*
    UNDEFINED

        - no value has been assigned, and it does not act as an empty container
*/

let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

/*
    NUMBERS

        - numbers or integers are literally just numbers
*/

let degrees = 40;
console.log(degrees);

let percise = 999999999999999;
console.log(percise);

let rounded = 9999999999999999;
console.log(rounded);

let a = Number('123');
console.log(a);

/*
    STRINGS

        -strings are datatypes used to represent text and are either wrapped in single or double quotes
*/

let stringOne = "double quotes";
let stringTwo = "single quotes";

console.log = (stringOne,stringTwo);

let first = 1050 + 100;
let second = '1050' + '100'; //string concatenation - takes two strings and combines them into one

console.log(first); //150
console.log(second); //1050100

console.log(typeof First); //number
console.log(typeof second); //string

let third = 1050 + '100'; //type coersion
/*
    - when javascript sees that we are trying to add together a number and a string, instead of using the built in math functionality, it will instead use concatenation to combine the values instead of trying to synthesize the values. 
*/
    console.log(third);
console.log(typeof third);

/*
    OBJECT

        -objects allow us to store multiple values instead of a single value
        - objects are denoted by {}
        -objects hold what are known as key/value pairs
*/

let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
}

console.log(frodo);

/*
    ARRAYS

        -arrays are containers that hold a list of items
        -arrays are denoted by []
*/

let burritos = ['large',4,true];
console.log(burritos);

let firstName = 'Adam';
let lastName = 'ElKhalili';
let houseNumber = '69420';
let street = 'sexWeed';
let city = 'depauwSwallows';
let state = 'wabashRules';
let zipcode = '66666';

console.log(firstName, lastName + ',',houseNumber, street + ',', city + ',', state, zipcode);