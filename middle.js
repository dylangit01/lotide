const middle = arr => {
	if (!arr || arr.length < 3) return [];
	let left = 0, right = arr.length - 1;
	if (arr.length % 2 === 0) {
		return [arr[Math.floor((left + right) / 2)], arr[Math.floor((left + right) / 2) + 1]];
	} else {
		return [arr[Math.floor((left + right) / 2)]]
	}
}

module.exports = middle;
