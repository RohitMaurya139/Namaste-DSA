function reverse(x)  {
    //checking number With in the range
    if (x < -(2**31) || x > 2**31 - 1) {
       return 0
}
    let flag
    const sign=   x>0?1:-1
    x=Math.abs(x)
    let rev=0
    while(x>0){
        let rem=x%10
        rev=(rev*10)+rem
        x=Math.floor(x/10)
    }
    rev=rev * sign
    //checking number Within the range after Reversal
     if (rev < -(2**31) || rev > 2**31 - 1) {
       return 0
}
    return rev 
   }
   const res=reverse(-123)
   console.log(res)