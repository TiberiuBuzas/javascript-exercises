const convertToCelsius = function(pFahrenheit) {
  let celsius = (5/9)*(pFahrenheit-32);
  return Math.round(celsius*10)/10;;
};

const convertToFahrenheit = function(pCelsius) {
  let fahrenheit = (9/5 * pCelsius) + 32;
  return Math.round(fahrenheit*10)/10;;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
