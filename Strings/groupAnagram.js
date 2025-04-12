/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    for(let value of strs){
        const key = value.split('').sort().join('');
        if(map[key]){
            // console.log(map[key]);
            map[key].push(value);
            // console.log(map[key]);
 
        }
      else{
          // console.log(map[key]);
          map[key]= [value];
         // console.log(map[key]);
 
      }
    }
 
    return Object.values(map);
 };
 
 
 console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));