//! Question 2648. Generate Fibonacci Sequence

//* Solution

//*Method 1

function* anothergenerator(i, j) {
  yield i + j;
}
var fibGenerator = function* (n) {
  //let count = 0;
  let i = 0;
  let j = 1;
  if (n < 2) {
    yield i;
    yield j;
  }
  // console.log("dbsjds");
  // console.log(count,n);
  yield i;
  yield j;
  while (true) {
    yield* anothergenerator(i, j);
    let p = i;
    i = j;
    j = p + j;
  }
};

//* Method 2

let a = 0;
let b = 1;

while (true){
    yield a;
    [a,b] = [b,a+b];
}
