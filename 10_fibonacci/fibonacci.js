const goldenRatio = (1+Math.sqrt(5))/2;

const fibonacci = function(num) {
    if(num < 0)
        return "OOPS";
    return Math.round(Math.pow(goldenRatio, +num)/Math.sqrt(5));
};

// Do not edit below this line
module.exports = fibonacci;
