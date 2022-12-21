    function convertItems(items) {
    let result = []
    for(let i=0; i<items.length; i++){
        const separate = items[i].split('|');
        result.push(separate)
    }
    return result 
    }

    function filterItems(items) {
    let result = []
    let filtered = items.filter(filterArr)
    function filterArr(array){
        return array[1] !== undefined
    }
    result = filtered.map(convertPricetoInt)

    function convertPricetoInt(array){
        array[1] = parseInt(array[1])
        return array
    }
    return result
    }

    function generateSpareParts(items) {
        let result = items.map((items) => {
            let obj = {}
            obj.name = items[0]
            obj.price = items[1]
            obj.category = items[2]
            return obj 
        })
        return result; 
    }

    function itemsStatistics(items) {
        let obj = {}
        for(let k=0; k < items.length; k++){
            if(items.length !== null){
                obj[items[k][2]] = obj[items[k][2]] ? obj[items[k][2]] + 1 : 1
            }
            }  
        return obj; 
    }

    function generateItemsData(items) {
    return {"spare_parts" : generateSpareParts(filterItems(convertItems(items))),
            statistics : itemsStatistics(filterItems(convertItems(items)))
            }; 
    }

const items = [
    "Spakbor Gordon|150000|variation",
    "Head Lamp",
    "USD KX150|8500000|bodyParts",
    "Handle Expedition|275000|variation",
    "Karet Body",
    "Body set KTM|1899950|bodyParts",
    "Jok Gordon|250000|variation",
    "Behel Bodyset Gordon",
    "CDI BRT KLX|625000|electricity",
    "Cover jok KLX|185000|variation",
]

console.log(generateItemsData(items));

    module.exports = {
        convertItems,
        filterItems,
        generateSpareParts,
        itemsStatistics,
        generateItemsData
    }