const assertEqual = require('./assertEqual');

const head = arr => {
	if (arr.length < 1) return undefined;
	return arr[0];
}

module.exports = head;