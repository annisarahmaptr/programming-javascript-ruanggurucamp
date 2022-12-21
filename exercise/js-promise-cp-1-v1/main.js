function calculate(number1, number2) {

  return new Promise((resolve, reject) => {
    if(number1 === 0 && number2 === 0){
      reject("number1 and number2 cannot be 0")
    }else if(number1 % 2 === 0 && number2 % 2 === 0){
      let result = number1 - number2
      resolve(result)
    }else if(number1 % 2 === 0){
      let result = number1 + number2
      resolve(result)
    }else if(number1 % 2 === 1){
      let result = number1 * number2
      resolve(result)
    }
  })
}


calculate(0, 0).catch((error) => {
  console.log(error)
}).catch
calculate(8, 4).then((result) => {
  console.log(result)
})
calculate(12, 6).then((result) => {
  console.log(result)
})
calculate(51, 2).then((result) => {
  console.log(result)
})

module.exports = calculate;
