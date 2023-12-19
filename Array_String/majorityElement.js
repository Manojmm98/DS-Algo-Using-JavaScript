
// brut force approch

// function majorityElement(arr){

//     let n = arr.length;

//    // loop over all the element of the array one by one and check the frequency of all the elements

//    for (let i = 0; i < n; i++) {
//        let count = 0;
//  //  count the ocurrance of every element by a inner loop 
//    for (let j = 0; j < n; j++) {
//     // check 0th element with all other element if are equal or not and then 1th and so on 
//      if(arr[i]==arr[j]) {
//         count++;
//      }
    
//    }

//    // check if the count of that number is greater than the n/2 then that is the ans

//    if(count>Math.floor(n/2)){
//      return arr[i];
//    }
     
    
//    }
// return -1;


// }


// better approch with hashmap

const majorityElement= (arr)=>{
   const map = new Map();
   for(let val of arr){
      if(map.has(val)){
         map.set(val,map.get(val)+1)
      }
      else{
        map.set(val,1);
      }
     

   }

   for (let [key,value] of map.entries()){
	if(value>Math.floor(arr.length/2)){
        return key;
    }
  }

   
}

// optimized approch




console.log(majorityElement([2,2,1,1,1,2,2]));