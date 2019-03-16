function sayHello(name) {
  return `Hello, ${name}!`
}

const hello = sayHello('Dominique Israel Hallan')
console.log(hello)

const add = (a, b) => a + b

const sum = add(1, 7)
console.log(sum)

const squared = (num) => {
  return num * num
}

const squareRoot = squared(6)
console.log(typeof squareRoot)
