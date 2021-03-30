const args = process.argv.slice(2);
console.log(args);
const reverse = () => {
  args.forEach((word) => {
    let l = 0, r = word.length - 1;
    let rev = '';
    while (l <= r) {
      rev += word[r];
      r--;
    }
    console.log(rev);
  });
};

console.log(reverse());
