/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(string,target) {
    if(string.length !== target.length){
        return false;
    }
 
   let counter = {};
 
   for(let i=0;i<string.length;i++){
       let letter = string[i];
       counter[letter]  = (counter[letter]||0)+ 1;
   }
 
    for(let i =0;i<target.length;i++){
        let letter = target[i];
        if(!counter[letter]){
            return false;
        }
        else{
            counter[letter]--;
        }
        
    }
 
    return true;
 };


 console.log(isAnagram("manoj","joman"))


 // optimized approach

 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    // check if the length of both string equal or not if not return false
        if(s.length !==t.length){
            return false;
        }
        // create two hashmap one for S one for T
        const mapS = new Map();
        const mapT = new Map();
      // itreate through the string and calulate each char from s and t
        for(let i=0;i<s.length;i++){
             const charS = s[i];
             const charT = t[i];
          // check if the key value pair is matching or not for both map
          // if any where it is not matching then return false
          // we have set for map s key as s char and val as t char
          // same for map t chart as key and charS as value
             if(mapS.has(charS)&& mapS.get(charS)!== charT ||
             mapT.has(charT)&& mapT.get(charT)!== charS){
                return false;
             }
             // set the char t and s to both map 
             // for t ---> t,s
             // for s --> s,t
             mapS.set(charS,charT);
             mapT.set(charT,charS);
        }
        return true;
        
    };