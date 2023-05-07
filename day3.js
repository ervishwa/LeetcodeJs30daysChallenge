//! Question
/** Counter II
 * Write a function createCounter. It should accept an initial integer init. It should return an object with 
 * three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 * 
 */

//* Solution

//? Approach 1
var createCounter = function(init) {
    let a = init;
    function increment(){
        return ++a;
    }
    function decrement(){
        return --a;
    }
    function reset(){
        a = init;
        return a;
    }
    return {
        increment,
        decrement,
        reset,
    }
};

