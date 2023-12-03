/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let disNum = new Set(nums);
    return disNum.size !== nums.length;
};

console.log(containsDuplicate([1,2,3,1]));