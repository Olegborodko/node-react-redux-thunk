function positiveNumber(value){
  const number = +value

  if(number && number > 0){
    return true
  } else {
    return false
  }
}

function lengthFromTo(value, from, to=Infinity){
  if (
    value.length >= from &&
    value.length <= to
    ) {
      return true
    } else {
      return false
    }
}

module.exports = {
  positiveNumber,
  lengthFromTo
}