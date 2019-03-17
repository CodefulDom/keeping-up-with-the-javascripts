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

function personFormatter(firstName, lastName, age) {
  function formatName(arg1, arg2, arg3) {
    return (
      ' First Name: ' + arg1 + ' \n Last Name: ' + arg2 + ' \n Age: ' + arg3
    )
  }
  const formattedName = formatName(firstName, lastName, age)
  return formattedName
}

console.log(personFormatter('Becky', 'Hallan', 38))
