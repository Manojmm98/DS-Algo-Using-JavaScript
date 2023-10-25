
// Brut force approch

let arr = [1,2,3,4,4,4,7,7,12,12,13]

function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
  
  let result = {}
  
  for (var value of arr) {
      result[value] = (result[value]||0) + 1;
  }
  let uniquelength = Object.keys(result).length;
  return uniquelength;
}

console.log(countUniqueValues(arr));

// optimized one


function countUniqueValues(arr){
 if(arr.length==0) return 0;
 // put i at 0th position and j at 1st position
  let i =0;
  for (let j = 1; j < arr.length; j++) {
    // if both values are equal then loop will continue 
    //if they are diiferent then we increase i by 1 and place the ith value in jth place
     if(arr[i]!= arr[j]){
        i++;
        arr[i] = arr[j]
     }
    
  }
 // at last the i th position define the length of unique one so as i start from 0 increase it by 1
  return i+1;
}
  