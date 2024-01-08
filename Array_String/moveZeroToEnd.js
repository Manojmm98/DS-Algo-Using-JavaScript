/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let n = nums.length;
    let j = -1;

//   const swap=(i,j)=>{
//     let temp =i;
//     i=j;
//     j=temp;
//   }  

// find the position when j will start usually j will start when it finds a zero 
 //and i will be start after 1 place of j for non zero numbers j will check all value of each iteration
    for(let i=0;i<n;i++){
        if(nums[i] === 0){
            j=i;
            break;
        }
    }
  
// for array who have non zero numbers like [3,4,8] & [3]
  if(j == -1){
      return nums;
  }

    for(let i=j+1;i<n;i++){
        if(nums[i] !== 0){
            [nums[i],nums[j]] = [nums[j],nums[i]];
            j++;
        }
         
    }

    return nums;
    
};