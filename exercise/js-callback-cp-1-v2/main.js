function calculate(number1, number2, callback) {

  if(number1 % 2 === 0 && number2 % 2 === 0 ){
    callback(number1 - number2)
  }else if(number1 % 2 === 0){
    callback(number1 + number2)
  }else if(number1 % 2 === 1){
    callback(number1 * number2)
  }

}

calculate(8, 4, (finalResult) => {
  console.log(finalResult)
})

calculate(10, 7, (finalResult) => {
  console.log(finalResult)
})

calculate(23, 2, (finalResult) => {
  console.log(finalResult)
})

  module.exports = calculate;
  