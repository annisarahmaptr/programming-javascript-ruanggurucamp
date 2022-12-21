function generateParenthesesPair(numberOfPairs) {
  let kurung = "";
  for(let a = 0; a < numberOfPairs; a++){
    kurung = "(" + kurung + ")"
  }
  return kurung 
}

console.log(generateParenthesesPair(0)); // ''
console.log(generateParenthesesPair(1)); // '()'
console.log(generateParenthesesPair(2)); // '(())'
console.log(generateParenthesesPair(3)); // '((()))'
console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;
