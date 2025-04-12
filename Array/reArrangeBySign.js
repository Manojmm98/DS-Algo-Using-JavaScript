/**
 * @param {number[]} nums
 * @return {number[]}
 */

// brut force

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


  // optimal approch

var rearrangeArray = function(nums) {

    // Assume +ve will at 0th index and neg at 1
        let posIndex = 0 , negIndex = 1;
        let ansArr = []
        // put the neg index into ans array then increase its pos by 2 
        // for pos put pos index into ans array at 0th index and increase its index by 2
        for(let i=0;i<nums.length;i++){
            if(nums[i]<0){
                   ansArr[negIndex] = nums[i];
                   negIndex  = negIndex+2
            }
            else{
                ansArr[posIndex]  = nums[i];
                posIndex  = posIndex+2
            }
        }
        return ansArr;
    };