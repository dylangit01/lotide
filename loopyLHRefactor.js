const loopyLighthouseDylan = (range, multiples, words) => {
  for (let i = range[0]; i <= range[1]; i++) {
    let output = '';
    i % multiples[0] === 0 ? output += words[0] : output;
    i % multiples[1] === 0 ? output += words[1] : output;
    output === '' ? output = i : output;
    console.log(output);
  }
};

loopyLighthouseDylan([15, 90], [2, 5], ['Batty', 'Beacon']);
