function travelSeat(passengers, seatColumn) {

    let sequentially = passengers.sort()
    let result =[]

    if(seatColumn < 1){
        return "Invalid number"
    }else if(passengers.length === 0){
        return "Oops! tickets not sold!"
    }else{
        
        for(let k = 0; k < sequentially.length; k += seatColumn){
            
            while(passengers.length % seatColumn != 0){
                passengers.push('Seat available')
            }
            let seatOrder = passengers.slice(k,k+seatColumn)
            result.push(seatOrder)
        } 
        
    }
    return result
    
}

console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
console.log(travelSeat(["Kakek", "Nenek"],9 ));
console.log(travelSeat([], 4));

module.exports = travelSeat
