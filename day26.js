//! Question 2693. Call Function with Custom Context


//* Solution

Function.prototype.callPolyfill = function(context, ...args) {

    //* Both works same..
    //return this.bind(context)(...args);
    return this.apply(context,args);
      
}
