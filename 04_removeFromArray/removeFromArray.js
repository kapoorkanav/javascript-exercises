const removeFromArray = function(array, ...bad) {
    let ans=[];
    for(let i=0;i<array.length;i++){
        let tf=0;
        for(let j=0;j<bad.length;j++){
            if(bad[j]===array[i]) tf=1;
        }
        if(tf==0){
            ans.push(array[i]);
        }
    }
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
