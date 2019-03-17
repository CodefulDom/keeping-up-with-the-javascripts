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

function mapUserNames(myArr) {
  return myArr.map((user) => {
    return user.name
  })
}

console.log(users)
console.log(mapUserNames(users))
