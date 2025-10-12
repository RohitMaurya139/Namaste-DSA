function removeDuplicates(nums) {
    let k=1
 for (let i=0,x=0;i<nums.length;i++){
     if(nums[i]!==nums[x]){
         k++
         x++
         nums[x]=nums[i]
     }
 }
 return k
 }

 const k=removeDuplicates([1,1,2,2,2,3,3,3,4,4,])

    console.log(k)
 