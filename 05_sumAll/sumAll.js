const sumAll = function(start, end) {
    let ans=0;
    if(!(Number.isInteger(start)&&Number.isInteger(end)&&start>=0&&end>=0)) return "ERROR";
    if(start>end){
        let temp=start;
        start=end;
        end=temp;
    }
    for(let i=start;i<=end;i++){
        ans+=i;
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
