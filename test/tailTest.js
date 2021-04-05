const assert = require('chai').assert;
const expect = require('chai').expect;
const tail = require('../tail');

describe('#tail', () => {
	it('returned value not equals to original array', () => {
		const actual = tail(['Hello', 'Lighthouse', 'Labs']);
		const expected = ['Hello', 'Lighthouse', 'Labs'];
		assert.notEqual(actual, expected);
		// compare two arrays using "deepEqual"
		assert.deepEqual(actual, ['Lighthouse', 'Labs'])
	});

	it('orignial array length wont be changed', () => {
    const actual = tail(['Yo Yo', 'Lighthouse', 'Labs']);
    const expected = ['Yo Yo', 'Lighthouse', 'Labs'];
		assert.notEqual(actual.length, expected.length);
		assert.deepEqual(actual, ['Lighthouse', 'Labs']);
		expect(expected.length).to.equal(3)
  });


})
