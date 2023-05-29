//! Question 2618. Check if Object Instance of Class

//* Solution

var checkIfInstanceOf = function(obj, classFunction) {

    if(obj === null || obj === undefined || typeof classFunction !== 'function'){
        return false;
    }
    
    let currProtoType = Object.getPrototypeOf(obj);

    while(currProtoType !== null ){
        if(currProtoType === classFunction.prototype){
            return true;
        }
        currProtoType = Object.getPrototypeOf(currProtoType);
    }

   return false ;
       
};
