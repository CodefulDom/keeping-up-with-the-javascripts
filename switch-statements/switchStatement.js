// Switch Statement

/*

  switch(expression) {
    case vaule1:
      statement to be executed when result of expression matches value1
      break;
    case value2:
      ...
      break
  }
*/

const myFruit = 'dkdkkd'
switch (myFruit) {
  case 'apple':
    console.log(`Great, I love apples!`)
    break
  case 'orange':
    console.log('Oranges are awesome')
    break
  case 'banana':
    console.log('Banana is my least favorite')
  default:
    console.log('huh?? 👨🏾‍💻')
    break
}
