/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    let map = new Map();
    for(let val of nums){
        if(map.has(val)){
            map.set(val,map.get(val)+1)
        }
        else{
            map.set(val,1)
        }
    }

    for(let [key,value] of map.entries()){
        if(value==1){
            return key;
        }
    }
};


console.log(singleNumber([4,1,2,1,2])); // 4