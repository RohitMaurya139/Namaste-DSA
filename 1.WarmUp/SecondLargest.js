 function secondLargest(arr){
    if(arr.length<2){
        return null
    }
          let max=-Infinity
                let second_max=-Infinity
                      for(let i=0;i<arr.length;i++){
                              if(arr[i]>max){
                                second_max=max
                                max=arr[i]
                             }
                             else if(arr[i]<max && arr[i]>second_max){
                                second_max=arr[i]
                               
                             }
                        }
                        if (second_max === -Infinity) {
                            return "No second largest number";
                          }
                          
                         return second_max
                        }
                                                                            
                        const arr = [12, -7, 45, 0, -32, 19, 88, -3, 56, -90];

                         const result=secondLargest(arr)
                          console.log(result)
 