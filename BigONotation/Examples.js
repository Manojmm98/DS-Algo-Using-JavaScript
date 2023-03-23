// Big O Notation is a way to formalize fuzzy counting 
//It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

//Defination -->

//We say that an algorithm is O(f(n)) ,
//if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

// f(n) could be linear (f(n) = n)
// f(n) could be quadratic (f(n) = n  )
// f(n) could be constant (f(n) = 1)
// f(n) could be something entirely different!

//Lets take Examples of counting till a number n 

// using for loop
// here we used one loop till n so the time will be O(n)
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }

  // using mathematical formula
  // here there is no loop so the time will be O(1)

  function addUpTo(n) {
    return n * (n + 1) / 2;
  }


// The 2nd one will take less time to excute as compared to the first one so the time complexity of the 2nd  one is less
// The best accepted approch should be the 2nd one


// Lets take another example of two same loops

function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i < n; i++) {
      console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (let j = n - 1; j >= 0; j--) {
      console.log(j);
    }
    console.log("Back down. Bye!");
  }

//Number of operations is (eventually) bounded by a multiple of n (say, 10n)  --> O(n)



// Example of two different nested loops

function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        console.log(i, j);
      }
    }
  }

  // O(n) operation inside of an O(n) operation.  ---> O(n*n) == O(n^2) 


  // Space Complexity

//   Most primitives (booleans, numbers, undefined, null) are constant space
// Strings require O(n) space (where n is the string length)
// Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)

function sum(arr) {
  let total = 0; // 1 number
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// here space complexity is O(1) because it takes constant space always

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr; // n number
}

// here space complexity is O(n) because it takes n number of space always








