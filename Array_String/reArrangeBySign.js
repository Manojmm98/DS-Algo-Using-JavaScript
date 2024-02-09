/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let PosArray=[];
    let NevArray = [];
      for(let i=0;i<nums.length;i++){
          if(nums[i]>0){
            PosArray.push(nums[i])
          }
          else{
              NevArray.push(nums[i]);
          }
      }
  
     // +ve indexes will be at 0,2,4,6.... so arr[2*i] will be +ve index
     // -ve indexes will be at 1,3,5,7,9.... so arr[2*i+1] woll be -ve index
  
     for(let i=0;i<nums.length/2;i++){
         nums[2*i] = PosArray[i];
         nums[2*i+1] = NevArray[i];
     }
  
     return nums;
      
  };