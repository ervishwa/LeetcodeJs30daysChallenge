//!Filter Elements from Array.

/**Question description
 * Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.

  The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

Please solve it without the built-in Array.filter method.
 * 
 */

//* Solution

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let ans = [];
    for(let i = 0 ; i < arr.length ; i++){
       let p = fn(arr[i],i);
       if(p){
           ans.push(arr[i]);
       }
    }
    return ans;
};