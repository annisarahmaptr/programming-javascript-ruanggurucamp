function countAndSum(number) {
  let berhitung = 0;
  for(let c = 0; c < number; c++){
    berhitung += (c % 3 + 1);
  }
  return berhitung
}

console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
console.log(countAndSum(100)); // 199
console.log(countAndSum(17)); // 33
console.log(countAndSum(19)); // 0

module.exports = countAndSum;
