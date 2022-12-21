function vocalCounter(array) {

    let countVowels = 0;
    let filterVowel = []
    let vowels = "AaIiUuEeOo"

    for(let i=0; i<array.length; i++){
        
        if(vowels.indexOf(array[i]) > -1){
            filterVowel += array[i]
            countVowels++
        }
        
    }

    if(countVowels === 0){
        return "Tidak ada huruf vokal yang ditemukan"
    }else{
        return "Jumlah vokal yang ditemukan sebanyak "+countVowels+" berupa "+ filterVowel
    }
    
}

console.log(vocalCounter(['x', 'A', 5, 'o', 1, 'T', 'b']));
console.log(vocalCounter([-10, 'E', 'e', 'z', 'p', 'i', 4]));
console.log(vocalCounter(['q', 'W', 'r', 't', 'Y']));

module.exports = vocalCounter
