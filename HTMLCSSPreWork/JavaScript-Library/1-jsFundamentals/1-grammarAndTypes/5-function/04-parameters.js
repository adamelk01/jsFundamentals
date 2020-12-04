/*
    PARAMETERS

        - parameters are placeholders for data that we pass into the function when the function is called
                       (1)
        function hello(name) {
            console.log('hello ${name} );
                                  (2)
        }

                 (3)
        hello('Adam');

        
        1. this is the parameter that the function is holding.  This is just a placeholder.
        2. by calling the parameter name, it will print the value given to 'name' when the function was called
        3. this is the data that we're passing into the function, and that the parameter 'name' will then hold.

        -paramters can be named anything, just like variables
*/
//      Let name = 'Adam'
function hello(name) {
    console.log(`hello ${name}` );
}

hello('Adam'); // when we call the function is where we need to pass in the data that we want to assign to the parameter

// -------------------
//          ticket = 'cheese pizza'
function adam(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`)
}

adam('cheese pizza'); // if you have no parameter (or placeholder), then your function will not be able to accept any data

// ----------------------
function counter(number) {
    console.log('the console.log from the function ran',number);
}

for (let i = 0; i<= 10; i++) {
     console.log(i);
    counter(i)
}

// Challenge: write a function that holds 2 parameters. One parameter is for a first name, the other is for a last name. Inside of the function, reference the two parameters in a console.log statement that prints off your full name.

function fullName(fName,lName) {
    let myFullName = fName + ' ' + lName
    //let myFullName = `${fName} ${myFullName}`;

    console.log(`Hello my name is ${myFullName}`);

}

//         (1)        (2)
fullName('Adam', 'ElKhalili');