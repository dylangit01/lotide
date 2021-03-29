// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log('🔴🔴🔴 Arguments are not equal');
  } else console.log('🟢🟢🟢 Arguments are equal');
};

// TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
