function trasureHunter(dailyLog) {
  let hartaKarun = 0;
  for(let i=0; i < dailyLog.length; i++){
    if(dailyLog[i] === "$"){
      hartaKarun += 100;
    }else if(dailyLog[i] === "x"){
      hartaKarun -= 10;
      if(hartaKarun < 0){
        hartaKarun = 0;
      }
    }else if(dailyLog[i] === "#"){
      hartaKarun *= 50/100;
    }
  }
  return hartaKarun
}

console.log(trasureHunter('$x$#x$')); // 185
console.log(trasureHunter('$$#x$$')); // 290
console.log(trasureHunter('x$#x$#x$')); // 157.5
console.log(trasureHunter('xx$#$#$#$###xx')); // 3.125

module.exports = trasureHunter;
