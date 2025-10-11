 function greet(name){
    console.log(`Hello ${name}`)
 }

const name="Ankit"
 greet("Rohit")

/*----------------------------------------------------------------------------- */
 function add(a,b){
    console.log(a+b)
 }
 add(5,7)

 /*----------------------------------------------------------------------------- */
 function mul(a,b){
    console.log(a*b)
 }
 mul(5,7)
/*----------------------------------------------------------------------------- */
function square (n){
    return n*n
}
const res=square(9)
console.log(res)

/*----------------------------------------------------------------------------- */
function eligibleToVote(age){
   if(age<=0){
      console.log("Invalid age")
   }
  else if(age>=18){
      console.log("You are eligible to vote")
   }
   else{
      console.log("You are not eligible to vote")
   }
} 
eligibleToVote(20)
eligibleToVote(13)
eligibleToVote(12)
eligibleToVote(19)
eligibleToVote(78)
eligibleToVote(-1)

/*----------------------------------------------------------------------------- */
function checkEven(num){
   if(num%2===0){
      console.log("Even")
   }
   else{
      console.log("Odd")
   }
}
checkEven(6)   
/*----------------------------------------------------------------------------- */

