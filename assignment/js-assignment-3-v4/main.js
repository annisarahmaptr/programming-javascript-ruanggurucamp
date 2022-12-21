function rekapSalesByName(data) {
    let order = function compare (i, j) {
        if(i.salesName < j.salesName){
            return -1
        }else if(i.salesName < j.salesName){
            return 0
        }
    }
    return data.sort(order)
}

function salesReport(data, correction) {
    let order = rekapSalesByName(data)
    let count = 0
    let tsByname = {Adi : 0, Budi : 0, Poltak : 0, Sri : 0, Udin : 0}

    if(correction.length > 0){
        for(let j=0; j<correction.length; j++){
            if(correction[j].type === 'tambah'){
                order.push({salesName :correction[j].salesName, totalSales : correction[j].totalSales, salesDate : correction[j].salesDate})
            }else if(correction[j].type === 'koreksi'){
                const find = order.find(element => element.salesName === correction[j].salesName && element.salesDate === correction[j].salesDate);
                find.totalSales = correction[j].totalSales
                
            }
        }
    }

    for(let i=0; i<order.length; i++){
        count += order[i].totalSales 
    }

    order.forEach(function(data_) {
        if (tsByname.hasOwnProperty(data_.salesName)) {
          tsByname[data_.salesName] = tsByname[data_.salesName] + data_.totalSales;
        } else {
          tsByname[data_.salesName] = data_.totalSales;
        }
      });

      let bestSalesvalue= 0;
      let bestSaleskey = "";

    for(let bestSales in tsByname){
    if(tsByname[bestSales] > bestSalesvalue){
        bestSalesvalue = tsByname[bestSales];
        bestSaleskey= bestSales
    }
    }

    let result = {
        monthlySales: count,
        totalSalesByName: tsByname,
        bestSalesman: 'Penjualan terbanyak dilakukan oleh '+bestSaleskey+' dengan total penjualan dalam 1 bulan sebesar '+ bestSalesvalue
    } 
    return result
}

const data = [
    {
        salesName: 'Udin',
        totalSales: 100,
        salesDate: 1 
    },
    {
        salesName: 'Poltak',
        totalSales: 100,
        salesDate: 1
    },
    {
        salesName: 'Poltak',
        totalSales: 50,
        salesDate: 2
    },
    {
        salesName: 'Adi',
        totalSales: 100,
        salesDate: 1
    },
    {
        salesName: 'Adi',
        totalSales: 100,
        salesDate: 2
    },
] 

const correction = [
    {
        type: 'tambah',
        salesName: 'Udin',
        totalSales: 100,
        salesDate: 2
    },
    {
        type: 'tambah',
        salesName: 'Adi',
        totalSales: 50,
        salesDate: 2
    },
]

console.log(salesReport(data, correction))

module.exports = {
    salesReport
}
