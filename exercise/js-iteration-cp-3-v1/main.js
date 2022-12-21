function printNumber(totalNumber) {
    let angka = 0;
    let cucup = "";
    for(let c=1; c<=totalNumber; c++){
        angka += 1;
        cucup += angka.toString();
        if(c % 3 === 0){
            angka = 0;
        }
    }
    return cucup
}
// 4, 7, 10
console.log(printNumber(2));
console.log(printNumber(3));
console.log(printNumber(6));
console.log(printNumber(10));
console.log(printNumber(30));

module.exports = printNumber
