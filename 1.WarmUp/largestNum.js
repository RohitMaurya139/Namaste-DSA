function largestNum(arr){
    let max=arr[0]
        
                for(let i=1;i<arr.length;i++){
                        if(arr[i]>max){
                          max=arr[i]
                       }
                  }
                   return max
                  }
                                                                      
                  const arr=[2,-3,-4,6,-10,-25,90,-1]
                   const result=largestNum(arr)
                    console.log(result)
