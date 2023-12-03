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