const CONVERSION_FACTOR = 5/9;
const C_ZERO_IN_F = 32;

function roundTo1stPlace(num){
  return Math.round(num*10)/10;
}

const convertToCelsius = function(temp) {
  return roundTo1stPlace((temp-C_ZERO_IN_F)*CONVERSION_FACTOR);
};

const convertToFahrenheit = function(temp) {
  return roundTo1stPlace(temp/CONVERSION_FACTOR+C_ZERO_IN_F);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
