/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    // check the last digit if it is odd then return the whole string as larget odd substring
    if(num.charAt(num.length-1)%2===1){
        return num;
    }
    // check from the last to first index where you get the odd val return the string from first to that point
    for(let i=num.length-1;i>=0;i--){
        if(num[i]%2 === 1){
            // where you find the odd number take the substring from 0-that index+1 bcz it will give value till index so we take index+1
            return num.substring(0,i+1);
        }
    }
    return "";
};