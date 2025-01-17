const repeatString = function(val, times) {
    let ans="";
    if(times<0) return "ERROR";
    for(let i =0;i<times;i++){
        ans+=val;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
