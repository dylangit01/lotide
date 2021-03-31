const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let outcome = true;
  arr1.forEach((item, i) => {
    if (item !== arr2[i]) {
      return (outcome = false);
    }
  });
  return outcome;
};

const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1, arr2));
  if (eqArrays(arr1, arr2) === true) {
    console.log(`🟢🟢🟢 array:${arr1} and array:${arr2} are equal`);
  } else console.log(`🔴🔴🔴 array:${arr1} and array:${arr2} are not equal`);
};

const flatten = (nestedArr) => {
  let flattenArr = nestedArr.join(',').split(',');

  return flattenArr.map(c => {
    let num = parseInt(c);
    if (!isNaN(num)) {
      return	c = parseInt(c);
    } else return c;
  });

  // forEach() method:
  // let outcome = [];
  // flattenArr.forEach((c) => {
  //   let num = parseInt(c);
  //   if (!isNaN(num)) {
  //     c = parseInt(c);
  //   }
  //   outcome.push(c);
  // });
  // return outcome;
};

console.log(flatten([1, 2, [3, 4], 5, [6], [[[3, 4, 6]]]]));
console.log(flatten(['a', 'b', ['c', 'd', 'e', [['dsafefae']]], [1, 2, 3]]));
