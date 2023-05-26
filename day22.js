//! Question Flatten Deeply Nested Array

//* Solution

//* Solution 1

// var flat = function (arr, n) {
//     function helper(arr,n){
//         if(n==0){
//             return arr;
//         }
//         n--;
//         let ans = [];

//         for(let i =0 ;i < arr.length ;i ++){
//             if(Array.isArray(arr[i])){
//              ans = ans.concat(helper(arr[i],n));
//         }else{
//             ans.push(arr[i]);
//         }
           
//         }
//         return ans;
//     }
//     return helper(arr,n);
// };

//* Solution 2

// var flat = function (arr, n) {
//     const ans = [];
//     function helper(arr,level){
      
//      for(let num of arr){
//         if(Array.isArray(num) && level < n){
            
//          helper(num , level+1);
//         }else{
//             ans.push(num);
//         }

//      }
//      return ans ;
//     }

//     return helper(arr,0);
// };