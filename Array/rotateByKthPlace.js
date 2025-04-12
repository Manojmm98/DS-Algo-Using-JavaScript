/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// create a revrese function which will reverse a array from certain index to index
const reverse = (nums,left,right)=>{
    // till starting point->left less than ending point --> right run the loop
    while(left<right){
    let temp = nums[left];
    nums[left]  = nums[right];
    nums[right] = temp;
    left++;
    right--;
    }
    console.log(nums);
    return nums;


}


var rotate = function(nums, k) {
// take the modulus k if k greater than length of array then we need to loop less
//  [1,2,3,4,5,6,7], k = 9 if  length == 7 and k = 9 then 9%7 == 2

k = k% nums.length;

// start from left as 0 and right as at most right i.e last index
 let left =0;
 let right = nums.length-1;
// reverse the whole array
nums= reverse(nums,left,right);

// start from left as 0 and right as kth positin roatate till k th index
 left =0;
 right=k-1;

 nums= reverse(nums,left,right);
// roate the element from kth index to last index
  left = k;
  right = nums.length-1 
 nums= reverse(nums,left,right);

    
};

