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

// syntax shorten: if you function has one statement, use one line!

const multiplier = (x, y) => x * y
console.log(multiplier(2, 2))

const squared = (num) => num * num
console.log(squared(2))
