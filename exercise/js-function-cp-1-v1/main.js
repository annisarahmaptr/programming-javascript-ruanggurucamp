function checkDatatype(showType){

    if(typeof showType == "object"){
            if(showType == null){
                return "null"
            }
        }

        if(Array.isArray(showType)){
            return "array"
        }
    return typeof showType;
    }
    


console.log(checkDatatype("Ruang Guru"));
console.log(checkDatatype(123));
console.log(checkDatatype(true));
console.log(checkDatatype([1, 2, 3]));

exports.checkDatatype = checkDatatype;
