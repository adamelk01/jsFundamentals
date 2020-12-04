/*
    - Loops offer us a quick and easy way to do something repeatedly, or loop over something

    - there are many different kinds of Loops, but they all do roughly the same thing;
        -the Loop will repeat untill a specified condtion evaluates to false

        - for Loop
        -do while Loop
        -while Loop
        -for in
        -for of

        -for loop takes in 3 parameters
            1. initial expression
            2. condition
            3. increment expression

            *** separated by semi colon
*/


for (let i = 0; i < 10; i ++) { // i += i + 1  
    console.log(i);
}

// Challenge: using a for Loop, count to 20 by 2

/*
    1. set variable
    2. condition to be met. The loop will continue to run until this condition evaluates as false
    3. body of the for loop: code to be ran as long as condtion evaluates as true
    4. incremeter: the number in which we want to increase the value of our variable by

        -these steps will continue to repeat until the condition evaluates as false
*/

for (let i = 0; i < 21; i += 2) { // i += i + 2
    console.log(i);
}

// Challenge: using a for loop, cound from 10 to 0, going down by 1

for (let i = 10; i >= 0; i -= 1) { // i -= i - 1
    console.log(i);
}
// Challenge: using a for Loop, count from 0, going down by 2 to -24

for (let i = 0; i >= -24; i -= 2) { 
    console.log(i);
}
// Challenge: using a for loop, go through a name and display each letter individually
let name = 'Spongebob';
console.log(name.length);

//                 0  <     9
for (let num = 0; num < name.length; num++) {
    console.log(name.charAt(num));
    //console.log(name[num]);
}

// Challenge: write a for Loop that adds up all number from 1-50 (should equal 1275)

let sum = 0; // ?

for(let i = 1; i<=50; i++) {
    sum += i;
    console.log(sum);
}