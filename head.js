// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 ${actual} and ${expected} are not equal`);
  } else console.log(`🟢🟢🟢 ${actual} and ${expected} are equal`);
};

// TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);


const head = arr => {
	if (arr.length < 1) return undefined;
	return arr[0];
}

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
assertEqual(head([]), 4)