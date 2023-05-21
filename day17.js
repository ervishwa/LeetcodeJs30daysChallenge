//! Question JSON Deep Equal

//* Solution

var areDeeplyEqual = function(o1, o2) {
    if(o1==null || o2==null){
        return o1===o2;
    }
    if(typeof(o1)!= typeof(o2)){
        return false;
    }
    if(typeof(o1)!= 'object'){
       return o1===o2;
    }

    //array
    
    if(Array.isArray(o1) || Array.isArray(o2)){
        if(String(o1)!=String(o2)){
            return false;
        }
        for( let i = 0 ; i < o1.length ;i++){
            if(!areDeeplyEqual(o1[i],o2[i])){
                return false;
            }
        }
    }else{
        for(let num in o1){
            if(num in o2){
                if(!areDeeplyEqual(o1[num],o2[num])){
                     return false;
                }
            }else{
                return false;
            }
        }
    }
  
   return true;
    //object

    

    
};