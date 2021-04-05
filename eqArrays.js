// Regular:
// const eqArrays = (arr1, arr2) => {
// 	if (arr1.length !== arr2.length) return false;
// 	for (let i = 0; i < arr1.length; i++){
// 		if (arr1[i] !== arr2[i]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// With recursion:
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
		if (Array.isArray(arr1[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
      // cannot use "else {return arr1[i] !== arr2[i]}" directly as it will not go through looping rest of elements once reutrn true or false
      // cannot use "if(return arr1[i] !== arr2[i])" directly as cannot compare two arrays directly, has to loop over it
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;


// forEach() is not good here as it cannot stop the iteration
// const eqArrays = (arr1, arr2) => {
// 	if (arr1.length !== arr2.length) return false;
// 	let outcome = true;
// 	arr1.forEach((item, i) => {
// 		if (item !== arr2[i]) {
// 			outcome = false;
// 		}
// 	});
// 	return outcome;
// }










// const eqArrays = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i++) {
//     if (Array.isArray(arr1[i]) && eqArrays(arr1[i], arr2[i]) === false) {
//       return false;
//     }
//     if (arr1[i] !== arr2[i]) {
//       console.log(arr1[i], arr2[i]);
//       return false;
//     }
//   }
//   return true;
// };

// Wrong version:
// const eqArrays = (arr1, arr2) => {
// 	if (arr1.length !== arr2.length) return false;
// 	arr1.forEach((item, i) => {
// 		if (item !== arr2[i]) {
// 			return false;
// 		}
// 	});
// 	return true
// }