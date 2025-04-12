// Example 1:
// Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
// Output: 6 7 1 2 3 4 5
// Explanation: array is rotated to right by 2 position .


function rotateEleByK (arr,k){

    let n = arr.length;
    let odd = false;
    let even = false;
    let oddArray = [];
    let evenArray = [];

    if(k%2==0){
        even = true;
    }
    else{
        odd = true;
    }
    if(even){
        for (let i = 0; i < k; i++) {
            evenArray.push(arr[i]);
            
        }
    }
    else if(odd){
        let j = n-k;
        for (let i = 0; i < j; i++) {
            oddArray.push(arr[i])
            
        }
    }

    console.log(evenArray);
    console.log(oddArray);
}


rotateEleByK([1,2,3,4,5,6,7],3)