
const missingNumArray=(arr)=>{
    // here n indicates the total number of element present
    const n = arr.length;
    const expectedSum = (n *(n+1)) / 2;
    const actualSum = arr.reduce((sum,num)=>sum+num,0);
    return expectedSum-actualSum;
}

let arr = [9,6,4,2,3,5,7,0,1];
// const newArr = [...new Set(arr)];
console.log(missingNumArray(arr));