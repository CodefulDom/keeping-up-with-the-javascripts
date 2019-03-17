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
