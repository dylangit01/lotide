const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 ${actual} !== ${expected}`);
  } else console.log(`🟢🟢🟢 ${actual} === ${expected}`);
};

const countOnly = (allItems, itemsToCount) => {
	let obj = {};
	for (const item of allItems) {
		if (itemsToCount[item]) {
			if (obj[item]) {
				obj[item] ++
			} else {
				obj[item] = 1
			}
		}
	}
	return obj
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);