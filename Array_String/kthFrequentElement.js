// Approch 1

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    let map = {};

    for(let value of nums){
        map[value] = (map[value]||0)+1;
    }

    let sortedMap = Object.keys(map).sort((a,b)=>map[b]-map[a]);
    let result = sortedMap.slice(0,k);
    return result;
    
};
// Approch 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // find out frequency of all digit in nums
    let map = new Map();
    for(let value of nums){
        if(!map.has(value)){
            map.set(value,1)
        }
        else{
            map.set(value,map.get(value)+1);
        }
    }
    console.log(map);
   let sortedMap = new Map([...map.entries()].sort((a,b)=>b[1]-a[1]));
   let result = [];
   let count =0;
    for(let [key,value] of sortedMap.entries()){
        if(count<k){
            result.push(key);
            count++;
        }
    }

    return result;
};


console.log(topKFrequent([30,10,20,20,10,10],2))

