// let str1 = "Manoj";
// let str2 = "jjonaM";


// const revString=(str1,str2)=>{

//     const freq1 = {};
//     const freq2 = {}
   
//     for (const val of str1) {
//          freq1[val] = (freq1[val] || 0) + 1;
//     }

//     for (const val of str2) {
//        freq2[val]  = (freq2[val] || 0) + 1;
//     }

//     for (const key in freq1) {
//         if(freq1[key] !== freq2[key]){
//             return false
//         }
//         else{
//             return true;
//         }
//     }
// }

// console.log(revString(str1,str2));

// o(n) complexity

// function validAnagram(str1,str2){
//      if(str1.length !== str2.length ){
//          return false;
//      }
     
     
//      let freq1 = {};
//     for (var i = 0; i < str1.length; i++) {
//         let letter = str1[i];
//         freq1[letter] ? freq1[letter]+=1 :freq1[letter] =1;
//     }
    
//     for (var i = 0; i < str2.length; i++) {
//         let letter = str2[i]
        
//         if(!freq1[letter]) {
//             return false;
//         }
//         else{
//             freq1[letter] = freq1[letter]- 1;
//         }
        
//     }
//     return true;
    
//   }
  
//   console.log(validAnagram("manoj","jonam"));
  

  // optimized one 

  var isAnagram = function(s, t) {
    s = s.split("").sort()
    t = t.split("").sort()

    console.log(s);
    console.log(t);

    if (s.length !== t.length){
        return false;
    }

    for (var i = 0; i < s.length; i++)
        if (s[i] !== t[i]){
            return false;
        }

    return true;
};

console.log(isAnagram("Manoj","jonaaM"));
