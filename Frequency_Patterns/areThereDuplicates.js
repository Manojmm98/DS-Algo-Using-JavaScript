// Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in.
//   You can solve this using the frequency counter pattern OR the multiple pointers pattern.



let arr = [1,2]
function areThereDuplicates(arr) {
  // good luck. (supply any arguments you deem necessary.)
      let frequencyObj ={};
  for (let val of arr) {
      frequencyObj[val] = (frequencyObj[val] || 0) + 1;
  }
  
 for (var key in frequencyObj) {
     if(frequencyObj[key]>1){
         console.log(key)
         // return true;
         
     }
 }
 
 // return false; 
}

console.log(areThereDuplicates(arr));


// 2nd approch

function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }

  // linnear one

  function areThereDuplicates() {
     let newArr = new Set(arguments);
     if(newArr.size != arguments.length){
        return false;
     }
     return true;
  }
