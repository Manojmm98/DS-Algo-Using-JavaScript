// First, we will take two pointers: left and right, 
// initially pointing to the index 0.
// The sum is set to a[0] i.e. the first element initially.
// Now we will run a while loop until the right pointer crosses
// the last index i.e. n-1.
// Inside the loop, we will do the following:
// We will use another while loop and
// it will run until the sum is lesser or equal to k.
// Inside this second loop, 
// from the sum, we will subtract the element that 
// is pointed by the left pointer and increase the left pointer by 1.
// After this loop gets completed, we will check if the sum is equal to k. 
// If it is, we will compare the length of the current subarray i.e. 
// (right-left+1) with the existing one and consider the maximum one.
// Then we will move forward the right pointer by 1.
// If the right pointer is pointing to a valid index(< n) 
// after the increment, we will add the element i.e. a[right] to the sum.
// Finally, we will return the maximum length.


// only positive numbers

function getLongestSubarray(arr, k) {
  
    const n = arr.length;     // length
    let left , right = 0 // 2 pointer
    let sum = 0;
    let maxLength = 0;

    //loop through the array from 0 to nth index

    while(right <n){
        // check if sum is greater than k 
        // then substract the array from left until 
        //sum become less or equal to k

        while(left<=right && sum >k){
             sum = sum - arr[left];
             left++;
        }
        if(sum == k){
           maxLength = Math.max(maxLength,right-left+1);
        }

        // move forward right pointer

        right ++;

        if(right < n){
            sum = sum + arr[right];
        }
       return maxLength;
    }



}

// for both possitive and negative numbers

function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let preSumMap = new Map();
    let sum = 0;
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        // calculate the prefix sum till index i
        sum += a[i];

        // if the sum = k, update the maxLen
        if (sum === k) {
            maxLen = Math.max(maxLen, i + 1);
        }

        // calculate the sum of remaining part i.e. x-k
        let rem = sum - k;

        // calculate the length and update maxLen
        if (preSumMap.has(rem)) {
            let len = i - preSumMap.get(rem);
            maxLen = Math.max(maxLen, len);
        }

        // finally, update the map checking the conditions
        if (!preSumMap.has(sum)) {
            preSumMap.set(sum, i);
        }
    }

    return maxLen;
}

let a = [-1, 1, 1];
let k = 1;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);


