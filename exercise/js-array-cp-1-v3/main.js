function splitToArr(str) {

    let result = []
    if(str === ""){
        return "Data not available "
    }else if(str === undefined){
        return "Invalid input"
    }else{
        let nameList = str.split(/[-,;]/)
        for(let i=0; i<nameList.length; i++){
        let capital = nameList[i].charAt(0).toUpperCase()
        let noCapital = nameList[i].slice(1)
        result.push(capital+noCapital)
        }
    }
    return result
}

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"))
console.log(splitToArr("ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"))
console.log(splitToArr(""))
console.log(splitToArr())

module.exports = splitToArr