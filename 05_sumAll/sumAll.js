const sumAll = function(pNum1, pNum2) {
    let sum = 0;

    if(!Number.isInteger(pNum1) || !Number.isInteger(pNum2)){
        return "ERROR";
    }
    if(pNum1 < 0 || pNum2 < 0){
        return "ERROR";
    }

    if (pNum1 > pNum2){ 
        [pNum1, pNum2] = [pNum2, pNum1];
    }
    for (let index = pNum1; index <= pNum2; index++) {
        sum += index;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
