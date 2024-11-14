const repeatString = function(pString, pNum) {
    if(pNum >= 0){
        let string = "";

        for (let index = 0; index < pNum; index++) {
            string += pString;
        }

        return string;
    } else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = repeatString;
