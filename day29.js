//! Question Nested Array Generator


//* Solution

var inorderTraversal = function*(arr) {
    const inparray = arr.flat(Infinity);

    for(let num of inparray){
        yield num;
    }
};