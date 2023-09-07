let n = 5;
 function factorial(n){
    if(n==1){
         console.log(`El numero es 1`);
    };

    if (n > 1){
          n=(n-1) * n;
        
    } console.log(`El resultado del factorial es ${n}`);
}

console.log(factorial(n))