
// sorting approch

// function  secondLasmall(arr){

//     if(arr.length==1){
//         return arr[0];
//     }
//     const AsssortArray = arr.sort((a,b)=>a-b);

//     console.log("Second largest",AsssortArray[arr.length-2]);
//     console.log("Second smallest",AsssortArray[1]);
// }

// optimal approch

function secondLasmall(arr){
    
    let small = Infinity;
    let secondsmall  = Infinity;
    let large = -Infinity;
    let secondlarge = -Infinity;

    for (let index = 0; index < arr.length; index++) {
        small = Math.min(small,arr[index]);
        large = Math.max(large,arr[index]);
        
    }

    for (let index = 0; index < arr.length; index++) {
        if(arr[index]<secondsmall && arr[index] != small){
            secondsmall = arr[index];
        }

        if(arr[index]>secondlarge && arr[index] != large){
            secondlarge = arr[index];
        }
    }

    return [secondsmall,secondlarge];

}


console.log(secondLasmall([1,2,4,7,7,5,6]));