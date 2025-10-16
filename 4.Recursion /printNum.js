 function print(n){
    if(n<1){
        return
    }
    // console.log(n)  // n to 1
    print(n-1)
    console.log(n)   // 1 to n
 }
 print(10)