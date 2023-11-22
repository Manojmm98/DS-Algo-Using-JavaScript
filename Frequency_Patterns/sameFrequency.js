
// Write a function called sameFrequency.
//  Given two positive integers, find out if the two numbers have the same frequency of digits.


function sameFrequency(num1,num2){

    const num1S = String(num1);
     const num2S = String(num2);
 
     if (num1S.length !== num2S.length ) {
         return false;
     }
 
     let freqnum1={};
     let freqnum2={};
    
       for(const val of num1S){
         
         freqnum1[val] = (freqnum1[val]||0)+1;
     }
     for(const val of num2S){
         
         freqnum2[val] = (freqnum2[val]||0)+1;
     }
 
    for (let key in freqnum1) {
 
        console.log(freqnum1[key])
         console.log( freqnum2[key])
        if (freqnum1[key] !== freqnum2[key]) {
           return false; 
        }
    }
 
 
     return true;
     
 }
 
 console.log(sameFreq(102,102));