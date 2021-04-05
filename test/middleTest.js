const assert = require('chai').assert;
const expect = require('chai').expect;
const middle = require('../middle');

describe('#middle.js', () => {
	it ('should return [2, 3]', () => {
		input = middle([1, 2, 3, 4]);
		expected = [2, 3];
		assert.deepEqual(input, expected)
	});

	it ('should return [3, 4]', () => {
		input = middle([1, 2, 3, 4, 5, 6]);
		expected = [3, 4];
		assert.deepEqual(input, expected)
	});

		it ('should return [2]', () => {
		input = middle([1, 2, 3]);
		expected = [2];
		assert.deepEqual(input, expected)
		});
	
	it ('should return [3]', () => {
		input = middle([1, 2, 3, 4, 5]);
		expected = [3];
		assert.deepEqual(input, expected)
		});
	
	it ('should return []', () => {
		input = middle([1]);
		expected = [];
		assert.deepEqual(input, expected)
		});
	
		it ('should return []', () => {
		input = middle([1,2]);
		expected = [];
		assert.deepEqual(input, expected)
		});
	
	it ('should return [5] if the length is odd', () => {
		input = middle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
		expected = [5];
		assert.deepEqual(input, expected)
		});
	
})



// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]

// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []

// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);