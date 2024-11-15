const leapYears = function(pYear) {
    if(pYear % 100 == 0 && pYear % 400 == 0){
        return true;
    } else if(pYear % 100 == 0){
        return false;
    } else if(pYear % 4 == 0){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
