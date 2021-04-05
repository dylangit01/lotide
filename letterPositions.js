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

module.exports = letterPositions;

// console.log(letterPositions('lighthouse in the house'));

// console.log(assertArraysEqual(letterPositions('hello').e, [1]));