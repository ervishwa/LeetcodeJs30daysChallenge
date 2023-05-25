//! Question  Chunk Array

//* Solution

//* Approach 1

var chunk = function(arr, size) {
    function helper(arr,size){
    if(arr.length>= size){
        const ans1 = [];
            let count = 0 ;
            while(count<size){
            ans1.push(arr[0]);
            console.log(arr.shift());
            count++;
            }
 
        return ans1;
    }else{
       const ans2 = [];
        //for(let i = 0 ; i < arr.length ;i++ ){
          let n = arr.length;
          let count = 0 ;
            while(count<n){
            ans2.push(arr[0]);
            console.log(arr.shift());
            count++;
            }
        //}
        return ans2;
    }
    }

 const ans = [];
    while(arr.length!=0){
         
    // console.log("hai");
     
       ans.push(helper(arr,size));

       console.log(ans);
    }

 return ans;
    
};