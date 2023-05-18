//! Question Cache With Time Limit (2622)

//* Solution

class TimeLimitedCache {
    constructor(){
        this.cache = new Map();
    }
    set(key,value,duration){
        const keyExist = this.cache.get(key);
        if(keyExist){
            clearTimeout(keyExist.timer);
        }
            const timer = setTimeout(()=>this.cache.delete(key),duration);
            this.cache.set(key,{value,timer});
        
        return Boolean(keyExist);
        
    }

    get(key){
    // const keyExist = this.cache.get(key);
    // if(keyExist){
    //     return this.cache.get(key).value;
    // }else{
    //     return -1;
    // }
    return this.cache.has(key) ? this.cache.get(key).value : -1;
    }

    count(){
        return this.cache.size;
    }
}


//*-----------------

var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
     const keyExist = this.cache.get(key);
        if(keyExist){
            clearTimeout(keyExist.timer);
        }
            const timer = setTimeout(()=>this.cache.delete(key),duration);
            this.cache.set(key,{value,timer});
        
        return Boolean(keyExist);
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
return this.cache.has(key) ? this.cache.get(key).value : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
     return this.cache.size;
};

