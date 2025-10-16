 function sumOfArray(arr,i,j){
    if(i>j){
        return 0
    }
    return arr[i] + sumOfArray(arr,i+1,j)
 }

 let arr=[2,3,4,5]
 const res= sumOfArray(arr,0,3)
 console.log(res)