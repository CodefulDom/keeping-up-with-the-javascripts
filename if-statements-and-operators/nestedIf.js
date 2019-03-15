const bankAccountBalance = 124
const costOfItem = 100
const tax = 0.5

if (bankAccountBalance >= costOfItem) {
	console.log(`Balance ok! Checking tax`)

	if (tax > 0.5) {
		return `Why is the rum gone?`
	}
}
