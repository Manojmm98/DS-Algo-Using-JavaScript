/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {

    let count = 0;
    let max =0;
    // find out the 1st place 
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            count++;
        }
        else{
            count =0;
        }
        if(count>max){
            max = count;
        }
    }

    return max;
    
};


console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); // 3