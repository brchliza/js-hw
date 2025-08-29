//1

function filterPositive(arr) {
  return arr.filter(num => num > 0);
}
console.log(filterPositive([-5, 3, 0, 7, -1, 10]));
//2

// function minMax(arr) {
//   return {
//     min: Math.min(...arr),
//     max: Math.max(...arr)
//   };
// }
// console.log(minMax([5, -2, 12, 0, 7]));

//3


// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


//4
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));