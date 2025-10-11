function countNegative(arr){
    let count=0
        
                for(let i=0;i<arr.length;i++){
                        if(arr[i]<0){
                          count++
                       }
                  }
                   return count
                  }
                                                                      
                  const arr=[2,-3,-4,6,-10,-25,90,-1]
                   const result=countNegative(arr)
                    console.log(result)
