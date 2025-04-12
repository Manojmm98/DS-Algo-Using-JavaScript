/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    // kadens algorithim take max as lowest value and sum as 0 
    //everytime add up the number with sum and if sum become < 0 (dont take the -ve num instead take 0) then make the sum 0 
    // and comapre it max always and find the maximum
    let max = -Infinity;
    let sum = 0;
     if(nums.length==1){
         return nums[0];
     }
 for(let i=0;i<nums.length;i++){
    
    sum = sum+ nums[i];

    if(sum>max){
        max = sum;
    }

    if(sum<0){
        sum=0;
    }
   
 }
 
return max ; 
};