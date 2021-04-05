// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ passed: ${actual} === ${expected}`);
  };
};



module.exports = assertEqual;