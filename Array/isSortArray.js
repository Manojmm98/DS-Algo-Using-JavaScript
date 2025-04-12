// function isSortArray(arr){

//     for (let i = 0; i < arr.length; i++) {
//      for (let j = i+1; j < arr.length; j++) {
//         if(arr[j]<arr[i]){
//             return false;
//         }
        
//      }
   
// }

// return true;
// }

// optimized approch

function isSortArray(arr){

    for (let i = 1; i < arr.length; i++) {
        if(arr[i]<arr[i-1]){
            return false;
        }
        
    }

    return true;
}

console.log(isSortArray([1,2,5,4,6]));



