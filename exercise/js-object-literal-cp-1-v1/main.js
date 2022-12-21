function counterApp(arr) {

    let obj = {}

    if(arr === undefined){
        return "Invalid input"
    }else if(arr.length > 1){
        for(let k=0; k<arr.length; k++){
            obj[arr[k]] = obj[arr[k]] ? obj[arr[k]] + 1 : 1
            }  
    }else if(arr.length === 0){
        return "Data not found"
    }
    return obj
}
   
console.log(counterApp(['Hikman', 'Naufal', 'Kanda', 'Arya', 'Kanda', 'Hikman', 'Naufal', 'Hikman', 'Kanda', 'Kanda']));
console.log(counterApp([5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6]));
console.log(counterApp([]));
console.log(counterApp());

module.exports = counterApp
