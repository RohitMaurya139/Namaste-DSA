 
 function sumOfNum(n){
    if(n<1){
        return 0
    }
    return n + sumOfNum(n-1)
 }

 let res=sumOfNum(10)  //3+2+1
 console.log(res)