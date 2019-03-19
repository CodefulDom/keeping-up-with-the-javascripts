/*
Homework Assignment #5: Switch Statements

Details:
Create a function called "timeAdder" that can add two time values together. For example, it should be able to add 25 hours and 3 days together.
*/

let timeAdder = (value1, label1, value2, label2) => {
  let validityCheck = (value1, label1, value2, label2) => {
    if (value1 === 1) {
      if (label1.slice(-1) === 's') {
        return false
      }
    } else {
      if (label1.slice(-1) !== 's') {
        return false
      }
    }

    if (value2 === 1) {
      if (label2.slice(-1) === 's') {
        return false
      }
    } else {
      if (label2.slice(-1) !== 's') {
        return false
      }
    }
    return true
  }
  let timeStandard = (label) => {
    switch (label) {
      case 'second':
      case 'seconds':
        return 1

      case 'minute':
      case 'minutes':
        return 2

      case 'hour':
      case 'hours':
        return 3

      case 'day':
      case 'days':
        return 4

      default:
        return false
    }
  }

  let labelType = (label1, label2) => {
    return timeStandard(label1) > timeStandard(label2) ? label2 : label1
  }

  let converter = (a, b) => {
    if (a === 1) {
      switch (b) {
        case 2:
          return 60

        case 3:
          return 3600

        case 4:
          return 24 * 3600
      }
    } else if (a === 2) {
      switch (b) {
        case 3:
          return 60

        case 4:
          return 24 * 60
      }
    } else {
      return 24
    }
  }

  let labelCal = (a) => {
    switch (a) {
      case 1:
        return 'seconds'
      case 2:
        return 'minutes'
      case 3:
        return 'hours'
      case 4:
        return 'days'
    }
  }

  let printTime = (value, primTime) => {
    a = timeStandard(primTime)
    let i = 0
    for (i = 4; i > a; i--) {
      rem = value % converter(a, i)
      if (rem === 0) {
        break
      }
    }

    label3 = labelCal(i)
    if (primTime !== label3) value3 = parseInt(value3 / converter(a, i))
    console.log(value3, label3)
  }

  if (!timeStandard(label1) || !timeStandard(label2)) {
    return false
  }
  if (!Number.isInteger(value1) || !Number.isInteger(value2)) {
    return false
  }

  let value3
  let label3 = ''
  let a = timeStandard(label1)
  let b = timeStandard(label2)
  if (a === b) {
    if (validityCheck(value1, label1, value2, label2)) {
      value3 = value1 + value2
      if (label1.slice(-1) !== 's') {
        label3 += label1 + 's'
      } else if (label2.slice(-1) !== 's') {
        label3 += label2 + 's'
      } else {
        label3 += label1
      }
      primTime = label3
      printTime(value3, primTime)
    } else {
      console.log('false')
    }
  } else {
    primTime = labelType(label1, label2)

    if (a > b) {
      value3 = value2 + value1 * converter(b, a)
    } else {
      value3 = value1 + value2 * converter(a, b)
    }
    printTime(value3, primTime)
  }
}
