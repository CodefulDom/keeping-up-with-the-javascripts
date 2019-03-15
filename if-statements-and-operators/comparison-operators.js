const numberFive = 5
console.log(typeof numberFive)

const stringFive = '5'
console.log(typeof stringFive)

console.log(numberFive + stringFive)

const convertString = parseInt(stringFive)
console.log(convertString + numberFive)
console.log(convertString === numberFive)

function isEqual() {
	if (numberFive !== stringFive) {
		return 'not equal'
	} else {
		return 'equal'
	}
}

const answer = isEqual()
console.log(answer)

const myObject = {
	name: 'Dom'
}

const myOtherObject = myObject
console.log(myObject === myOtherObject)

function potentialPurchase(balance, cost) {
	if (balance > cost) {
		return `Buy It`
	} else {
		return `You dont have the funds for this purchase.`
	}
}

const canIBuy = potentialPurchase(1200, 1199)
console.log(canIBuy)
