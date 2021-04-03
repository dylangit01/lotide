const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 ${actual} and ${expected} are not equal`);
  } else console.log(`🟢🟢🟢 ${actual} and ${expected} are equal`);
};

// const eqArrays = (arr1, arr2) => {
// 	if (arr1.length !== arr2.length) return false;
// 	for (let i = 0; i < arr1.length; i++){
// 		if (arr1[i] !== arr2[i]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

const eqArrays = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;

	for (let i = 0; i < arr1.length; i++){
		if (Array.isArray(arr1[i]) && (eqArrays(arr1[i], arr2[i]) === false)) {
			return false;
    }
		if (arr1[i] !== arr2[i]) {
			console.log(arr1[i], arr2[i]);
      return false;
    }
	}
	return true;
}

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));  // => false
// console.log(eqArrays([[2, 3], [4]], [[2, 3], 4]) ); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
// assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);

// forEach() is not good here as it cannot stop the iteration
// const eqArrays = (arr1, arr2) => {
// 	if (arr1.length !== arr2.length) return false;
// 	let outcome = true;
// 	arr1.forEach((item, i) => {
// 		if (item !== arr2[i]) {
// 			outcome = false;
// 		}
// 	});
// 	return outcome;
// }










// const eqArrays = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i++) {
//     if (Array.isArray(arr1[i]) && eqArrays(arr1[i], arr2[i]) === false) {
//       return false;
//     }
//     if (arr1[i] !== arr2[i]) {
//       console.log(arr1[i], arr2[i]);
//       return false;
//     }
//   }
//   return true;
// };

// Wrong version:
// const eqArrays = (arr1, arr2) => {
// 	if (arr1.length !== arr2.length) return false;
// 	arr1.forEach((item, i) => {
// 		if (item !== arr2[i]) {
// 			return false;
// 		}
// 	});
// 	return true
// }