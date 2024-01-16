function selectionSort(arr) {

    // select minimum from the array and assume it as minimum of whole array and 
    // place it at 0th index and swap it with the index from where you got that then again find the minimum and swap 
    // do the same for every index till n-2 index
  
    const n = arr.length;
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[minIndex]) {
            minIndex = j;
          }
        }
        if (minIndex !== i) {
          [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
         }
      }
return arr;
     
}


console.log(selectionSort([10,3,12,4,34,1,11]));