//! Questions Throttle

//*Solution

var throttle = function(fn, t) {
    let count = 0;
    let WaitArgs = null;
  return function(...args) {
      if(count==0){
        fn(...args);
        count = 1;
        setTimeout(helper,t);
      }else{
        WaitArgs = args;
      }
      function helper(){
        if(WaitArgs){
         fn(...WaitArgs);
         count = 1;
         WaitArgs = null;
         setTimeout(helper,t);
        
        }else{
          count = 0;
        }
        
      }
     
    }
}