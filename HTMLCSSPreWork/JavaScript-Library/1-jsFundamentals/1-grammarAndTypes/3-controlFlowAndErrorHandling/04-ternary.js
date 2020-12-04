// Ternary basically acts as a shortcut for writing if & if/else statements

let num = 6;

//Ternary:
(num > 0) ? console.log('yes') : console.log('no')
// (condition) ? code to run if condition true : code to run if condition not true

// Instead of:
if (num > 0) {
    console.log('yes');
} else {
    console.log('no');
}

// Conditional with if & else if
if (num > 10) {
    console.log('a first statement');
} else if (num < 0)  {
    console.log("another statement");
} else {
    console.log('yet another, man');
}

// Same as above but a ternary:
(num > 10) ? console.log('a first statement') : (num < 0) ? console.log("another statement") : console.log('yet another, man');

// Can also rewrite out ternary to make more readible:
(num > 10) ? console.log('a first statement') 
: (num < 0) ? console.log("another statement") 
: console.log('yet another, man');

/*
CHALLENGE
************
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/
let age = 19;

(age >= 25) ? console.log('Yay, You can rent a car')
: (age >=21) ? console.log('Yay, you can drink')
: (age >= 18) ? console.log('Yay, you can vote')
: console.log('Sorry, you are too young to do anything, kiddo') 
