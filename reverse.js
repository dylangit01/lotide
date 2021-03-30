
const reverse = input => {
	if (input === undefined) return '';
	let reversed = ''
	let str = input.toString()
	for (let i = str.length - 1; i >= 0; i--){
		reversed += str[i]
	}
	return reversed
}

console.log(reverse('goodbye'));
console.log(reverse(1));
console.log(reverse('fish'));
console.log(reverse(''));

