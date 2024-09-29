const palindromes = function (str) {
    array = str.toLowerCase().split("");
    array = array.filter((value) => (value.charCodeAt(0) >= 0x61 && value.charCodeAt(0) <= 0x7a) ||
    (value.charCodeAt(0) >= 0x30 && value.charCodeAt(0) <= 0x39));
    reverseArray = array.slice().reverse();
    return array.every((value, index) => value === reverseArray[index]);
};

// Do not edit below this line
module.exports = palindromes;
