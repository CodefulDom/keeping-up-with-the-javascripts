// Nested Functions - Closures

function squareAndMultiply(num1, num2) {
  function squared(numberSquared) {
    return numberSquared * numberSquared
  }
  return squared(num1) * squared(num2)
}

console.log(squareAndMultiply(2, 4))
