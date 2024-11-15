const removeFromArray = function(pArray, ...args) {
    return pArray.filter(x => !args.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
