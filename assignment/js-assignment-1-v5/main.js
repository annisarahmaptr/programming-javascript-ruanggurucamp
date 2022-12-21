function travelDiscount(id, amount) {
    if(id.substring(0,3)  == "STD"){
        let status = "STUDENT";
        let stdPrice = 20000;
        if(amount <= 20){
            let totalPay = amount * stdPrice;
            return "Selamat! Voucher untuk " +status+ " dengan id "+id+" berhasil di redeem, total yang harus dibayarkan sebesar Rp. "+totalPay+".";
        }else{
            let normal = amount * stdPrice;
            let discount = normal * 20/100;
            let totalPay = normal - discount;
            return "Selamat! Voucher untuk " +status+ " dengan id "+id+" berhasil di redeem, total yang harus dibayarkan sebesar Rp. "+totalPay+".";
        }
    }else if(id.substring(0,4)  == "CORP"){
        let status = "CORPORATE";
        let corpPrice = 50000;
        if(amount <= 30){
            let totalPay = amount * corpPrice;
            return "Selamat! Voucher untuk " +status+ " dengan id "+id+" berhasil di redeem, total yang harus dibayarkan sebesar Rp. "+totalPay+".";
        }else{
            let normal = amount * corpPrice;
            let discount = normal * 25/100;
            let totalPay = normal - discount;
            return "Selamat! Voucher untuk " +status+ " dengan id "+id+" berhasil di redeem, total yang harus dibayarkan sebesar Rp. "+totalPay+".";
        }
    }else{
        return "Maaf, voucher yang anda miliki tidak valid!";
    }
     
}

console.log(travelDiscount("STD9845-8461-121", 11));
console.log(travelDiscount("CORP8135-4612-912", 30));
console.log(travelDiscount("STD7601-639-184", 36));
console.log(travelDiscount("CORP5611-8456-999", 31));
console.log(travelDiscount("8347-7-9124365", 99));
console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount
