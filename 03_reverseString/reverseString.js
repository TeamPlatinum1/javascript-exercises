const reverseString = function(str) {
    let resultStr = "";
    for(let i = str.length-1; i >= 0; i--){
        resultStr += str[i];
    }
    return resultStr;
};

// Do not edit below this line
module.exports = reverseString;
