// Write a function that takes an array of values and moves all
// elements that are zero to the end of the array, otherwise preserving the
//order of the array. The zero elements must also maintain the order in which they occurred.

// For example, the following array
// [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

// is transformed into
// [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

let arr1 = [0, 1, 3, 4, 0, 0];

function zedsEdit(arr) {
  let nums = [],
    zeds = [];
  arr.forEach((el) => (el !== 0 ? nums.push(el) : zeds.push(el)));
  return nums.concat(zeds);
}
console.log(zedsEdit(arr1));
