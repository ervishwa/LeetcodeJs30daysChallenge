//! problem statement
//? create hello world function
//? Write a function createHelloWorld. It should return a new function that always returns "Hello World".


//* Solution

var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
};