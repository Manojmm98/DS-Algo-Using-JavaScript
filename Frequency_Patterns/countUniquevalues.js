let arr = [1,1,2,2,2,3,3,5,6,6,1]


const countUnique =(arr)=>{

    const left = 0;
    const right = arr.length-1;

    let count =0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] !== arr[i+1]) {
    //         count++;
    //     }
        
    // }
    while(left<right){
        if(arr[left] !== arr[right]){
            count++;
            left++;
            right--;
        }
       
    }

    return count;
}

console.log(countUnique(arr));