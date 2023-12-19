
// brut force approch

function leftShiftArray (arr){
    let n = arr.length;
    let newNums = [];
    for (let i = 1; i < arr.length; i++) {       
        newNums[i] = arr[i-1];      
    }
    newNums[0] = arr[n-1];

    for (let i = 0; i < newNums.length; i++) {
       console.log(newNums[i] + " ");        
    }

    console.log();
}

// optimal approch

function leftShiftArray(arr){

    let temp = arr[0];

    for (let i = 0; i < arr.length-1; i++) {
        arr[i]= arr[i+1];       
    }
    arr[arr.length-1] = temp;

    console.log(arr);
}

leftShiftArray([1,2,3,4,5])