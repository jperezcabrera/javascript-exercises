const sumAll = function(first, last) {
    if(!Number.isInteger(first) || first < 0 || !Number.isInteger(last) || last < 0){
        return 'ERROR'
    }

    if(first > last) [first, last] =[last, first]
    res = 0
    while(first <= last){
        res += first
        first++
    }
    return res

};

// Do not edit below this line
module.exports = sumAll;
