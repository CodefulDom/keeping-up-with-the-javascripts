var sayHi = function() {
  return 'Hi'
}

const sayWhatUp = () => {
  return 'Hi, I am using an arrow function'
}

sayWhatUp() /*?*/

const multiply = (a, b) => {
  return a * b
}

console.log(multiply(2, 2))

const users = [
  {
    name: 'Dominique',
    age: 36
  },
  {
    name: 'Elijah',
    age: 3
  }
]

const mapUserNames = (myArr) => {
  return myArr.map((user) => {
    return user.name
  })
}

console.log(mapUserNames(users))

// syntax shorten: if you function has one statement, use one line!

const multiplier = (x, y) => x * y
console.log(multiplier(2, 2))

const squared = (num) => num * num
console.log(squared(2))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filteredNumbers = numbers.filter((num) => {
  return num % 2 === 0
})

console.log(filteredNumbers)

//TODO: Check foreach and figure out what it is actually doing. Example was kinda silly
const doubledNumbers = (num) => {
  const numberContainer = []
  num.forEach((n) => {
    const doubled = n * 2
    numberContainer.push(doubled)
  })
  return numberContainer
}

console.log(doubledNumbers(numbers))

const numberMultiplier = (x = 2, y = 2) => {
  return x * y
}

console.log(numberMultiplier())

const stringSplitter = (str) => {
  return str.split(' ')
}

console.log(stringSplitter('Hi Dominique'))

const greet = () => {
  if (greet.locale === 'fr') {
    return `Bonjour`
  } else if (greet.locale === 'es') {
    return `Hola!`
  } else {
    return `Hello!!`
  }
}

const bankAccount = {
  canSpendMoney: true,
  balance: 100
}

function purchaseItem(price, acct = bankAccount) {
  if (acct.canSpendMoney) {
    acct.balance -= price
    if (acct.balance <= 0 && bankAccount.canSpend != true) {
      acct.canSpendMoney = false
      return `Declined. Your balance is: $${bankAccount.balance}.00`
    }
    return true
  } else {
    ;`Declined. Your balance is: ${bankAccount.balance}.`
  }
}

console.log(purchaseItem(10))
console.log(bankAccount)
console.log(purchaseItem(101))
console.log(bankAccount)

function mappedMultiply(multiplier, ...nums) {
  return nums.map((n) => multiplier * n)
}

const mappedResult = mappedMultiply(10, 5, 1, 3, 6)
console.log(mappedResult)

function Dog(years, breed) {
  this.age = years
  this.type = breed
}

const spike = new Dog(3, 'Golden Retevier')
console.log(spike)

const cat = () => {
  this.name = 'felix'
  console.log(this.name)
  return this.name
}

console.log(cat())
