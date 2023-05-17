//! Question Promise Pooln (2636)

//* Solution

var promisePool = async function(functions, n) {
  const result = [];

 async function callnextOne(){
     if(functions.length===0) return ;
     const fn = functions.shift();
     result.push(await fn());
     await callnextOne();
  }

  let npromise = Array(n).fill().map(callnextOne);

  console.log(npromise);

  await Promise.all(npromise);

  return [result,result[result.length-1]];
};
