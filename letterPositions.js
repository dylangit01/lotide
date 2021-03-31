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
  if (eqArrays(arr1, arr2) === true) {
    console.log(`🟢🟢🟢 array:${arr1} and array:${arr2} are equal`);
  } else console.log(`🔴🔴🔴 array:${arr1} and array:${arr2} are not equal`);
};

const letterPositions = function (sentence) {
	let result = {};
	for (let i = 0; i < sentence.length; i++){
		let arr = [];
		if (sentence[i] !== ' ') {
			if (!result[sentence[i]]) {
        arr.push(i);
        result[sentence[i]] = arr;
      } else {
        result[sentence[i]].push(i);
      }
		}
	}
  return result;
};

console.log(letterPositions('lighthouse in the house'));

console.log(assertArraysEqual(letterPositions('hello').e, [1]));