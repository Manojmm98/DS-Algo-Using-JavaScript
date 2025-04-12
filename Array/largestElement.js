
// itreratiive approch

function largestElem(arr){
    let largeVal = arr[0];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]>largeVal){
            largeVal= arr[index]
        }
        
    }
    return largeVal;
}


// with sorting

const largestElem=(arr)=>{
    // base case 
    let narr = arr.sort((a,b)=>a-b)
    return narr[arr.length-1];
    
}

console.log(largestElem([2,5,6,10]));
