const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 ${actual} and ${expected} are not equal`);
  } else console.log(`🟢🟢🟢 ${actual} and ${expected} are equal`);
};

// Original fn:
// const eqArrays = (arr1, arr2) => {
// 	if (arr1.length !== arr2.length) return false;
// 	for (let i = 0; i < arr1.length; i++){
// 		if (arr1[i] !== arr2[i]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// With recursion:
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
		if (Array.isArray(arr1[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
      // cannot use "else {return arr1[i] !== arr2[i]}" directly as it will not go through rest of elements once reutrn true or false
      // cannot use "if(return arr1[i] !== arr2[i])" directly as cannot compare two arrays directly, has to loop over it
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  };
  return true;
};

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));  // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4]) ); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);