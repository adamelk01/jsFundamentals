/*
    FOR OF LOOPS

        - where for in Loops look at enumerable, or countable properties - for of Loops look at iterable properties
            -iterable properties are properties that we can parse through with numbers, or indices

        - for in Loops: better suited for objects
        -for of Loops: better suited for arrays
*/

// using a for of Loop with an object will throw an error since for of Loops look at iterable properties, and object have what are known as enumerable, or countable, properties.
let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (let item of student) {
    console.log(item);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (let cat of catArray) {
    console.log(cat);
}

for (let i = 0; i < catArray.length; i++)  {
    console.log(catArray[i]);
}
   