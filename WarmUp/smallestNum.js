function smallestNum(arr){
    let min=arr[0]
        
                for(let i=1;i<arr.length;i++){
                        if(arr[i]<min){
                          min=arr[i]
                       }
                  }
                   return min
                  }
                                                                      
                  const arr=[2,-3,-4,6,-10,-25,90,-1]
                   const result=smallestNum(arr)
                    console.log(result)
