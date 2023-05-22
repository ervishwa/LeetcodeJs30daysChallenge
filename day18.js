//!  Question  Convert Object to JSON Stringn (question no 2633 !)

//* Solution

var jsonStringify = function(object) {

    if(object===null || object === undefined){
        return String(object);
    }

    //Array

    if(Array.isArray(object)){
        const values = object.map((key)=> jsonStringify(key));
        return `[${values.join(",")}]`;
    }
    
    //object
    if(typeof object === 'object'){
        const keys = Object.keys(object);

        const keyVlaues = keys.map((key)=> `"${key}":${jsonStringify(object[key])}`);

        return `{${keyVlaues.join(",")}}`;
    }
    
    //Strings
    
    if(typeof object === 'string'){
        return `"${String(object)}"`;
    }

    return String(object);
};