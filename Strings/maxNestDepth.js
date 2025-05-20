/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {

    let count = 0;
    let max = 0;
    for(let i=0;i<s.length;i++){
        // check if char is (  then increase the count
        if(s[i]=="("){
           count++;
           // always take the max of count for ( by comparing with count & max
           max = Math.max(count,max);
        }
        // if we got ) then simply decrease the count by 1 to travel through all the char in the string
        else if(s[i]==")"){
            count--;
        }
    }

    return max;
    
};