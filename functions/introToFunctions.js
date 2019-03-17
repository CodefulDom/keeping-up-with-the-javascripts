function sayHello(name) {
  return `Hello, ${name}!`
}

const hello = sayHello('Dominique Israel Hallan')
console.log(hello)

const add = (a, b) => a + b

const sum = add(1, 7)
console.log(sum)

const myName = 'Dominique'

const sayHi = function(myName) {
  if (!myName) {
    var myName = 'Bob'
  }
  console.log(`Hi, ${myName}`)
}

const resultsBasedLearning = sayHi('Israel')

const squareNumber = function(num) {
  return num * num
}

const numberAdder = function(num1, num2) {
  return num1 + num2
}

console.log(numberAdder(squareNumber(2), 1))

// Object - Passed by value

let myNumber = 100

function addTwenty(num) {
  return num + 20
}

console.log(addTwenty(myNumber))

const myInfo = { name: 'Chris', age: 30 }

function changeAge(myObj) {
  myObj.age = 100
}

console.log(myInfo)
changeAge(myInfo)
console.log(myInfo)

const myNumbers = [1, 2, 3, 4, 5]

function addToArray(myArr) {
  myArr.push(6)
}

console.log(myNumbers)
addToArray(myNumbers)
console.log(myNumbers)
