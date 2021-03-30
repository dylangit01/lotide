const args = process.argv.slice(2);

const pigLatin = () => {
	let newArgs = ''
	args.map(word => {
		newArgs += word.substr(1) + word[0] + 'ay' + ' ';
	})
	return newArgs

}

console.log(pigLatin());