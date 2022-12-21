function buyThemAll(books, budget) {

  let listbookPrice = books.split(",");
  let bought = [];
  let rest = budget;
  let totalPrice = 0;
  let k = 0;

  while(k < listbookPrice.length){
    let listBook = listbookPrice[k].split(":")[0];
    let listPrice = + listbookPrice[k].split(":")[1];

    if(rest - listPrice >= 0){
      bought.push(listBook);
      totalPrice += listPrice;
      rest -= listPrice;
    }
    k++;
  }

  let restAfista = budget - totalPrice;
  
  if(budget === 0 || totalPrice === 0){
    return "Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah "+ restAfista +"."
  }else{
    return "Afista membeli "+ bought.length +" buku yaitu "+ bought.join(", ") +". Total belanja "+ totalPrice +", sisa uang Afista adalah "+ restAfista +"."
  }
}

console.log(buyThemAll('The Alchemist:55000,The Hobit:20000,The Power of Habit:10000', 100000)); //Afista membeli 3 buku yaitu The Alchemist, The Hobit, The Power of Habit. Total belanja 85000, sisa uang Afista adalah 15000.
console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 300000)); // Afista membeli 2 buku yaitu Javascript itu asik, Belajar HTML5. Total belanja 221200, sisa uang Afista adalah 78800.
console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 20000)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 20000.
console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 0)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0.

module.exports = buyThemAll;
