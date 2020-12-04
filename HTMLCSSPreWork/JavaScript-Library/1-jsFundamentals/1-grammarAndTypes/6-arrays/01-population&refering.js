/*
    -arrays are containers that hold a list of items 
        -arrays can hold numerous data types
    -denoted by square brackets
*/

let list = ['orange', 'banana', 'apple'];

console.log(list[1]);

/*
    -when we call an array, we can append square brackets on to the end of our array with the index number that we want to reference.
    -javascript starts counting at 0
*/

let students = ['Anruta', 'Marco', 'Nick', 'Carolina', 4, true, ['Adam', 'Alexandra', 'Alexia', 'Alyson']];

console.log(typeof students); // object
console.log(students instanceof Array); // the instance of operator is used to chek the type of an object at run time.  WILL return a true or false value
console.log(students[2]); // Nick
console.log(students[1]); // Marco

// CHALLENGE: dive into the nested array in the students array, and pull out one of the values

console.log(students[6][0]);  // Adam

let name = students[6][0];
console.log(name); // Adam