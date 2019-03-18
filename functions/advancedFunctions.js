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

const numberMultiplier = (x, y = 2) => {
  return x * y
}

console.log(numberMultiplier(5, 10))

const greet = () => {
  if (greet.locale === 'fr') {
    return `Bonjour`
  } else if (greet.locale === 'es') {
    return `Hola!`
  } else {
    return `Hello!!`
  }
}

greet() /*?*/
greet.locale = 'fr'
console.log('greet:', greet) /*?*/
