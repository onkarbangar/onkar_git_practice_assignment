function identifyPrime(num) {
     let x=0;
    for(let i=1; i<=num; i++){
        if (num%i===0){
            x++;
        } 
        }if (x===2){
            console.log("Yes");
            }
        else{console.log("No");
            } 
} 