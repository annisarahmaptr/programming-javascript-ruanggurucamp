function searchI (array,country){
    let idx = -1
    for(let i=0; i<array.length; i++){
        if(array[i].name === country){
            idx = i
            break
        }
    }
    return idx
}

function countryMedals(players, countries) {

    if(countries === undefined){
        return "Countries not provided"
    }else{
        let output = []
        for(let j=0; j<countries.length; j++){
            output.push(
                {
                    name:countries[j],
                    athlete:[],
                    totalMedals:0
                }
                )
            }
            for(let j=0; j<countries.length; j++){
            for(let k=0; k<players.length; k++){
                if(players[k].country === countries[j]){
                    let idx = searchI(output, countries[j])

                    output[idx].athlete.push(players[k].name);
                    output[idx].totalMedals += players[k].medals
                }
            }
        }
        return output; 
        }
    
    
}

let playerData = [
    {
        name: "Lionel Messi",
        medals: 5,
        country: "Argentina"
    },
    {
        name: "Iker Casillas",
        medals: 7,
        country: "Spain"
    },
    {
        name: "Ahmad Waluyo",
        medals: 5,
        country: "Indonesia"
    },
    {
        name: "Alvin Arkansas",
        medals: 8,
        country: "Indonesia"
    },
    {
        name: "Gabriel Batistuta",
        medals: 1,
        country: "Argentina"
    },
    {
        name: "Xavi Hernandes",
        medals: 9,
        country: "Spain"
    },
    {
        name: "Carles Puyol",
        medals: 5,
        country: "Spain"
    },
    {
        name: "Jatmika Teja",
        medals: 6,
        country: "Indonesia"
    },
    {
        name: "Sergio Aguero",
        medals: 3,
        country: "Argentina"
    },
]

console.log(countryMedals(playerData, ["Indonesia", "Spain"]));
console.log(countryMedals(playerData, ["Argentina", "Spain"]));
console.log(countryMedals(playerData, ["Indonesia", "Argentina"]));
console.log(countryMedals(playerData));

module.exports = countryMedals