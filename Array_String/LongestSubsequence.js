/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    // we will slove it through set 
    let n = nums.length;
    if(n<0){    
        return 0;
    }
    let longest = 0;
    let st = new Set();

    // loop through the array and push every element into set
    for(let i=0;i<n;i++){
       st.add(nums[i]);
    }

    // find the longest subsequence

    // check if the curr element has its previous one

    for(let ele of st){

        //  if the ele have no previous ele it is the starting point
        if(!st.has(ele-1)){

            let x = ele;
            let count = 1;
            while(st.has(x+1)){
                x=x+1;
                count = count+1;
            }
         // check if current count is greater than the longest count
          longest = Math.max(longest,count);
        }
    }
  return longest;
    
};