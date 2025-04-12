/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    // first we will start from the 1st word will 
    //assume the prefix to first word
    //and will take prefix length is that length prefix is that word

    let pref = strs[0];
    // the length will be prefix length bcz when length will
    // decrease then it will count till that length only
    let prefLen = pref.length;

    // we will go through all the words starting from 1th index
    // and will check if they are equal with first or not
    // if they are not equal we will decrease the length 
    // so that we can compare allwords of the string

    for(let i=0;i<strs.length;i++){
        let s = strs[i];
        while(pref !== s.substring(0,prefLen)){
            prefLen--;
            // if the length become 0 then there is no prefix
            if(prefLen ===0){
                return "";
            }
            // the prefix will be the matched
            // ele of the string till the length
            pref = pref.substring(0,prefLen);
        }
    }

    return pref;
    
};