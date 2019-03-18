/*
TODO: Homework Assignment #4: Functions

Details:
Let's go back to your syllogism (logical argument) examples from Homework #3. Now it's time to turn those loose bits of logic into functions. Rather than having procedure that demonstrates that Socrates is mortal, you should create a function that accepts a name and returns a boolean (True or False) representing whether that name identifies a man who is mortal or not. Your function to gracefully handle unexpected inputs (such as an unrecognized name or a name that is a not a string at all) without throwing an exception.

*/

// what do you want to define as a mortal or not
const mortality = (name, mortal, ...extra) => {
  if (name && mortal === true && typeof name === 'string') {
    return `Name: ${name}\nMortal??: ${mortal}\nExtra Params: ${extra}`
  } else if (name && mortal === false) {
    return `Name: ${name}\nMortal?: ${mortal}\nMortal Status: NOT mortal\n${extra}`
  } else {
    return `You are missing a name or mortality status. Try again! I also included this junk you gave that I did not ask for: ${extra}`
  }
}

let isMortal = mortality('Dom', true, 'jjdjdjdjd') /* ? */
console.log(isMortal)
