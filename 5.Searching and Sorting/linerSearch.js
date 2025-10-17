 function linerSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return true
        }
    }
    return false
 }

 let res = linerSearch([1,2,3,4,5],10)
 console.log(res)