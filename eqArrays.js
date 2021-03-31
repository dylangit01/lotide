const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 ${actual} and ${expected} are not equal`);
  } else console.log(`🟢🟢🟢 ${actual} and ${expected} are equal`);
};

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

const eqArrays = (arr1, arr2) => {
	for (let i = 0; i < arr1.length; i++){
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}
	return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);