// function recursiveRange(num){
//     // base case
//     if(num==0){
//         return 0;
//     }
    
//     return num+recursiveRange(num-1);
    
// }

// console.log(recursiveRange(10));

function  checkfib(num) {
    let a =0;
    let b = 1;
    let c = a+b;
    console.log(c);
    while(c<=num){
        a=b;
        b=c;
    }   
    
}


console.log(checkfib(5))