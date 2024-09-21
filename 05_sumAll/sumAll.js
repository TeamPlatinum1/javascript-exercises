function calcGauss(num){
    return (num * ( num + 1))/2;
}

function checkPositiveInteger(num){
    if(typeof(num) === 'number' && Math.floor(num) === num && num > 0)
        return true;
    return false;
}

const sumAll = function(num1, num2) {
    if((!checkPositiveInteger(num1)) || (!checkPositiveInteger(num2)))
        return "ERROR";
    return calcGauss(Math.max(num1, num2)) - calcGauss(Math.min(num1, num2)-1);
};



// Do not edit below this line
module.exports = sumAll;
