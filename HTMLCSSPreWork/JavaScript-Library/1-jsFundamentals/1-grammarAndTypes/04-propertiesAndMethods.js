/*
    PROPERTIES AND METHODS

        -In most cases, properties are qualities related to the data we're working with, and methods are actions we can perform on the datat we're working with.  Using a method causes something to happen to the data, while using a property returns information about the data

        -.peroperty and .method()
            -methods have parentheses behind them, properties do not
*/

// STRING PROPERTIES

//Length
let myName = 'Adam';
console.log(myName.length);

// STRING METHODS

let myDogsName = 'Frank';
console.log(myDogsName.toUpperCase()); //change a string to upercase

let home = 'My home is West Lafayette';
console.log(home.includes('West Lafayette'));

//challenge: use google, find MDN documentation for string methods.  Research the string '.split()' method, and use and implement it to get an array back from a string.  

let sent = 'This sentence will be split into individual parts';
console.log(sent.split('')); //splits at each individual character
console.log(sent.split(' ')); //splits at each space in the original string
console.log(sent.split(',')); //split at comma