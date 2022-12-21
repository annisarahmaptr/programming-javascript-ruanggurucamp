async function calculate(number1, number2) {

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

async function allCondition (){
  try{
  let result1 = await calculate(8, 4)
  console.log(result1)
  let result2 = await calculate(10, 5)
  console.log(result2)
  let result3 = await calculate(11, 4)
  console.log(result3)
  let result4 = await calculate(0, 0)
  console.log(result4)
  }catch (error){
  console.log(error)
  }
}
allCondition()

module.exports = calculate;
