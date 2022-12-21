function kelvinToCelsius(kelvin) {
    let kToc = kelvin - 273.15 
    return kToc
}

function kelvinToFahrenheit(kelvin) {
  let kTof = (kelvin - 273.15) * 9/5 + 32
  return parseFloat(kTof.toFixed(2))
}

function celsiusToFahrenheit(celsius) {
  let cTof = (celsius * 9/5) + 32
  return cTof
}

function celsiusToKelvin(celsius) {
  let cTok = celsius + 273.15
  return cTok
}

function fahrenheitToKelvin(fahrenheit) {
  let fTok = (fahrenheit - 32) * 5/9 + 273.15
  return parseFloat(fTok.toFixed(2))
}

function fahrenheitToCelsius(fahrenheit) {
  let fToc = (fahrenheit - 32) * 5/9
  return parseFloat(fToc.toFixed(2))
}

function convertTemperature(temperature, initialUnit, finalUnit) {
  if(initialUnit == 'C' && finalUnit == 'K'){
    return celsiusToKelvin(temperature)
  }else if(initialUnit == 'C' && finalUnit == 'F'){
    return celsiusToFahrenheit(temperature)
  }else if(initialUnit == 'F' && finalUnit == 'C'){
    return fahrenheitToCelsius(temperature)
  }else if(initialUnit == 'F' && finalUnit == 'K'){
    return fahrenheitToKelvin(temperature)
  }else if(initialUnit == 'K' && finalUnit == 'C'){
    return kelvinToCelsius(temperature)
  }else if(initialUnit == 'K' && finalUnit == 'F'){
    return kelvinToFahrenheit(temperature)
  }
  
}

console.log(convertTemperature(0, 'C', 'K')); // 273.15
console.log(convertTemperature(0, 'C', 'F')); // 32

console.log(convertTemperature(0, 'F', 'C')); // -17.78
console.log(convertTemperature(0, 'F', 'K')); // 255.37

console.log(convertTemperature(0, 'K', 'C')); // -273.15
console.log(convertTemperature(0, 'K', 'F')); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};
