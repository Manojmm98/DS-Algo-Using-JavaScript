
// Brut Force Approch O(n2)

// let arr1 = [1,2,3];
// let arr2 =[0,1,9];

// const Iscorrect =(arr1,arr2)=>{
  
//     for (let index = 0; index < arr1.length; index++) {
//         const correctindex = arr2.indexOf(arr1[index]**2)
//         if(correctindex == -1){
//             return false;
//         }

//      arr2.splice(correctindex,1);
        
//     }
//   return true;
// }

// console.log(Iscorrect(arr1,arr2));

// Optimized Approch O(n)

let arr1 = [1,2,3,3];
let arr2 =[1,9,4,9];

let freqArray=(arr1,arr2)=>{
let ferqency1 = {};
let ferqency2 = {};

// count frequency for each Array 

for (const val of arr1) {
    ferqency1[val] = (ferqency1[val]||0)+1
}

for (const val of arr2) {
    ferqency2[val] = (ferqency2[val]||0)+1
}

// checking if 2 is present then 4 is in the freq2 or not
for (const key in ferqency1) {
    if (!(key ** 2 in ferqency2) ){
        return false;
    }

  // checking if 2 is twice in 1st obj the 4 should be twice in 2nd obj 
    if(ferqency2[key ** 2] !== ferqency1[key]){
        return false;
    }
   
}
return true;


}

console.log(freqArray(arr1,arr2));