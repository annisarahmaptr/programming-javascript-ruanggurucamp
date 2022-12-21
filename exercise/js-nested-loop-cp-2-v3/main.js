function deretanAngkaHinggaN(n) {
  output = "";

  for(let j = n - 1; j >= 1; j--){
    for(k = j; k >=1; k--){
      output += k;
    }
  }
  if(n < 2){
    output += "Incorrect param"
  }
  return output; 
}

console.log(deretanAngkaHinggaN(0));
console.log(deretanAngkaHinggaN(1));
console.log(deretanAngkaHinggaN(5));
console.log(deretanAngkaHinggaN(8));
console.log(deretanAngkaHinggaN(12));

module.exports = deretanAngkaHinggaN;
