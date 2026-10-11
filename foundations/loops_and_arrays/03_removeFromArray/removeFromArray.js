const removeFromArray = function(arr, ...removed) {
    return arr.filter(element => !removed.includes(element) )
};

// Do not edit below this line
module.exports = removeFromArray;
