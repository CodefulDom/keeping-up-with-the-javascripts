function sayHi(name) {
	const shouldSayHello = true
	if (shouldSayHello === true) {
		return `Hi, ${name}`
	} else {
		return `Who even are you?`
	}
}

const product = sayHi('Dom')
console.log(product)
