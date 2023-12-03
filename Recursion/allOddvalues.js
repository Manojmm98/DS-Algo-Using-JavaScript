
function CalOdd(arr){
    let newArr = [];
    if(arr.length==0){
        return newArr;
    }

    if(arr[0]%2!==0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(CalOdd(arr.slice(1)));
    return newArr;
    
}

console.log(CalOdd([2,5,1,9,7,13,21]))