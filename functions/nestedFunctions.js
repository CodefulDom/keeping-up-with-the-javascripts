// Nested Functions - Closures

function squareAndMultiply(num1, num2) {
  function squared(numberSquared) {
    return numberSquared * numberSquared
  }
  return squared(num1) * squared(num2)
}

console.log(squareAndMultiply(2, 4))

function addAndMultiply(num1, num2) {
  function add(x) {
    return x + x
  }
  function multiply(y) {
    return y * y
  }

  return add(num1) + multiply(num2)
}

console.log(addAndMultiply(3, 3))

console.log(3 + 3 + 3 * 3)
