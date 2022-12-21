function discountChecker(costumers, date) {
    let result = []
    
    for(let j = 0; j < costumers.length; j++){

        let price = costumers[j][0].split(" ")
        let date_ = date.split("-")

        if(costumers[j][1] === 'non-member'){
            if(parseInt(date_[0]) % 2 == 0 && parseInt(price[1]) % 2 ==0){
                result.push(costumers[j])
            }else if(parseInt(date_[0]) % 2 == 1 && parseInt(price[1]) % 2 == 1){
                result.push(costumers[j])
            }
        }else if(costumers[j][1] === "member"){
            result.push(costumers[j])
        }
        
    }
    

    return result; 
}

let costumers = [
    ["$ 228", "member"],
    ["$ 19", "non-member"],
    ["$ 238", "non-member"],
    ["$ 49", "member"]
]

console.log(discountChecker(costumers, "28-10-2022"))

var costumers2 = [
    ["$ 754", "member"],
    ["$ 233", "member"],
    ["$ 31", "non-member"],
    ["$ 332", "non-member"]
]

console.log(discountChecker(costumers2, "11-06-2022"))

module.exports = discountChecker
