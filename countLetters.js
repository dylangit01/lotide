const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 ${actual} !== ${expected}`);
  } else console.log(`🟢🟢🟢 ${actual} === ${expected}`);
};

const countLetters = str => {
	const result = {}
	const noSpaceStr = str.split(' ').join('')
	for (let letter of noSpaceStr) {
		if (result[letter]) {
			result[letter]++;
		} else {
			result[letter] = 1;
		}
	}
	return result;
}

console.log(countLetters('lighthouse in the house'));