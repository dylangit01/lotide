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
      arr = arr.concat(flatten(a));
    } else {
      arr.push(a);
    }
  }
  return arr;
};

module.exports = flatten;

flatten([1, 2, [3, 4], 5, [6]]);
console.log(flatten([1, 2, [3, 4], 5, [6], [[[3, 4, 6]]]])); 
console.log(flatten(['a', 'b', ['c', 'd', 'e', [['dsafefae']]], [1, 2, 3]]));



