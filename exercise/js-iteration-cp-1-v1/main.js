function reverseUnique(word) {
  let reverseWord='';
  for(let a = word.length - 1; a >=0; a-- ){
    if(word[a] === word[a - 1]){
      continue;
    }else{
      reverseWord += word[a]
    }
  }
  return reverseWord
}

console.log(reverseUnique('greating')); //gnitaerg
console.log(reverseUnique('learning')); //gninrael
console.log(reverseUnique('book')); // kob
console.log(reverseUnique('RuangGuru')); //uruGnauR
console.log(reverseUnique('I am reading a book how to hunt a deer')); // red a tnuh ot woh kob a gnidaer ma I

module.exports = reverseUnique;
