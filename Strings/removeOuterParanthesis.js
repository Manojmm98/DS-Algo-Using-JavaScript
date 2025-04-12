/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {

    // itreate through the array
    // declare a ans string and count var
     let count = 0;
     let ans = ""; 
     for (let i=0;i<s.length;i++){
      // find out the each character from the string
         let ch = s[i];
         // check if ch=="(" and if the count is 0 then only put that in
         // ans string bcz if the count become 1 then we have already push 
         // a string to ans array 
         if(ch == "(" ){
             // if count > 0 only push into answer string
             if(count >0){
             ans = ans+ch;
             }
             // if count is not greater than zero and the bracket is "("
             // then only increase the count
             count++;
         }
      if(ch == ")" ){
         // if the count is greater than 1 and bracket is ")" then we have alredy pushed 2
         // bracket in that case push the character into answer string
             if(count > 1){
             ans = ans + ch;
             }
             // if the count is not greater than 1 but the bracket is ")"
             // then only decrease the count
             count--;
         }
  
         }
 
     return ans;
     
 };