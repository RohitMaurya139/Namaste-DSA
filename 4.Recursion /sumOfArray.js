 function sumOfArray(arr,i,j){
    if(i>j){
        return 0
    }
    return arr[i] + sumOfArray(arr,i+1,j)
 }

 let arr1=[2,3,4,5]
 const res1= sumOfArray(arr1,0,3)
 console.log(res1)


 /* ----------------------------------------------------------------------------- */
 function sumOfOdd(arr,i,j){
    if(i>j){
        return 0
    }
    if(arr[i]%2==0){
       return sumOfOdd(arr,i+1,j)
    }else{  return arr[i] + sumOfOdd(arr,i+1,j)}
  
 }

 let arr2=[2,3,4,5]
 const res2= sumOfOdd(arr2,0,3)
 console.log(res2)

 /* ----------------------------------------------------------------------------- */
 function sumOfEven(arr,i,j){
    if(i>j){
        return 0
    }
    if(arr[i]%2==0){
        return arr[i] + sumOfEven(arr,i+1,j)
       
    }else{ 
        return sumOfEven(arr,i+1,j)
     }
  
 }

 let arr3=[2,3,4,5]
 const res3= sumOfEven(arr3,0,3)
 console.log(res3)