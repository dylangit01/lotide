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
  // let flattenArr = nestedArr.join(',').split(',');
  // console.log(flattenArr);

  // return flattenArr.map(c => {
  //   if (!isNaN(parseInt(c))) {
  //     return (c = parseInt(c));
  //   } else return c;
  // });
  let arr = [];
  for (const a of nestedArr) {
    if (Array.isArray(a)) {
      const c = flatten(a);
      console.log(c);
      arr = arr.concat(c)
    } else {
      arr.push(a)
    }
  }
  return arr
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

// flatten([1, 2, [3, 4], 5, [6]]);
console.log(flatten([1, 2, [3, 4], 5, [6], [[[3, 4, 6]]]])); 
// console.log(flatten(['a', 'b', ['c', 'd', 'e', [['dsafefae']]], [1, 2, 3]]));



