const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  console.log(eqArrays(arr1, arr2));
  if (eqArrays(arr1, arr2) === true) {
    console.log(`🟢🟢🟢 array:${arr1} and array:${arr2} are equal`);
  } else console.log(`🔴🔴🔴 array:${arr1} and array:${arr2} are not equal`);
};

const middle = arr => {
	if (!arr || arr.length < 3) return [];
	let left = 0, right = arr.length - 1;
	if (arr.length % 2 === 0) {
		return [arr[Math.floor((left + right) / 2)], arr[Math.floor((left + right) / 2) + 1]];
	} else {
		return [arr[Math.floor((left + right) / 2)]]
	}
}

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

console.log(middle([1, 2, 3]));  // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1]));  // => []
console.log(middle([1, 2])); // => []

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]));