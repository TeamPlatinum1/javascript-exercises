const repeatString = function(str, num) {
    if (num < 0) return "ERROR";
    let resultStr = "";
    for(let i = 0; i < num; i++){
        resultStr += str;
    }
    return resultStr;
};

// Do not edit below this line
module.exports = repeatString;
