 function palindrome(n){
   n=Math.abs(n)
   let num=n
    let rev=0
    let rem
    while(n>0){
      rem=n%10
      rev=(rev*10)+rem      //important 
      n=Math.floor(n/10)
      rem=0
    }
    if(rev===num){
        return true
    }
    return false
    }

 const res=palindrome(121)
 console.log(res)