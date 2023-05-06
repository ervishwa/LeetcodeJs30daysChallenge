//* Problem Statement
//!Counter
//?Given an integer n, return a counter function. This counter function initially returns n 
//?and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

//* 1st approach

// var createCounter = function(n) {
//     let count = -1;
   
//     return function() {
//         count += 1;
//         console.log(count);
//         return n+count;
        
//     };
// };

//* 2nd approach

// var createCounter = function(n) {
 
//     return function() {
//         return n++;
        
//     };
// };

//* 3rd method (using arrow function.)

var createCounter = function(n) {
 
    return ()=>n++;
 };

