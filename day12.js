//! Question Promise Time Limit

/** Question description
 * Given an asyncronous function fn and a time t in milliseconds, return a new time limited 
 * version of the input function.

A time limited function is a function that is identical to the original unless it takes
 longer than t milliseconds to fullfill. In that case, it will reject with "Time Limit Exceeded".  
 Note that it should reject with a string, not an Error.
 * 
 */


 //* Solution

 var timeLimit = function(fn, t) {
	return async function(...args) {
    const prevPromise = new Promise((res,rej)=>{
        setTimeout(()=>{
           rej("Time Limit Exceeded");
        },t)
    })

    return Promise.race([fn(...args),prevPromise]);
    }
};
