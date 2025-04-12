/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // create ans and sign var 
    let ans =0;
    let sign = 1 // +ve for +1 -ve for -1
    // trim the spaces
    s = s.trim();
    //check if string is empty return 0
    if(s.length === 0){
        return 0;
    }
    // check if 1st sign is -ve or +ve
    let i=0;
    if(s[i]=== '-'){
        sign = -1;
        i++;
    }
    else if(s[i]=== '+'){
        i++;
    }

    // check if only digit  or numeric values are there then only    loop through the string and convert them to integer
    while(i <s.length && s[i]>='0' && s[i]<='9'){
        ans = ans * 10 + parseInt(s[i]);

        // check if the ans is exceding the num range then return 2^31-1 or if it is less than -2^31 then only return -2^31
        if(sign * ans > 2**31-1){
            return 2**31-1; 
        }
        if(sign * ans < -(2**31)){
            return -(2**31);
        }
        i++;

        
    }
    // At last return ans with multiplying by sign bcz if +ve we will be return +ve or if -ve we will return -ve

    return sign * ans;
    
};