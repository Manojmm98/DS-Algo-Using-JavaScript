function power(num,pow){
    
    if(pow==0){
        return 1;
    }
    
    let res = num * power(num,pow-1);
    return res;
    
}

console.log(power(2,4))