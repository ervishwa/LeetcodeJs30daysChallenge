//! Question  2631. Group By


//* Solution

Array.prototype.groupBy = function(fn) {
  const groupedArray = {};

  for (let i = 0; i < this.length; i++) {
    const key = fn(this[i]);

    if (!(key in groupedArray)) {
      groupedArray[key] = [];
    }

    groupedArray[key].push(this[i]);
  }

  return groupedArray;
};