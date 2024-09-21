const removeFromArray = function(array, ...args) {
    for(let arg of args){
        while(array.indexOf(arg) != -1)
            array.splice(array.indexOf(arg), 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
