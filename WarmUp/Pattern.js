 function startPattern(n){
  for(let i=0;i<n;i++){
    let row=""
    for(let j=0;j<n;j++){
        row+="* "
    }
    console.log(row)
 }
 }

//  startPattern(5)
/* -------------------------------------------------------------------------- */
function upperTrianglePattern(n){
  for(let i=0;i<n;i++){
    let row=""
    for(let j=0;j<=i;j++){
        row+="* "
    }
    console.log(row)
 }
 }
//  upperTrianglePattern(6)
/* -------------------------------------------------------------------------- */
function upperNumberTrianglePattern(n){
  for(let i=0;i<n;i++){
    let row=""
    for(let j=0;j<=i;j++){
        row= row +" " +(j+1)
    }
    console.log(row)
 }
 }
//  upperNumberTrianglePattern(5)
/* -------------------------------------------------------------------------- */
function upperSameNumberTrianglePattern(n){
  for(let i=0;i<n;i++){
    let row=""
    for(let j=0;j<=i;j++){
        row= row +" " +(i+1)
    }
    console.log(row)
 }
 }
//  upperSameNumberTrianglePattern(5)
/* -------------------------------------------------------------------------- */
function lowerNumTrianglePattern(n){
  for(let i=0;i<n;i++){
    let row=""
    for(let j=0;j<n-i;j++){
        row=row +" "+(j+1)
    }
    console.log(row)
 }
 }
//  lowerNumTrianglePattern(6)
/* -------------------------------------------------------------------------- */
function lowerTriangleStartPattern(n){
  for(let i=0;i<n;i++){
    let row=""
    for(let j=0;j<n-i;j++){
        row=row +"* "
    }
    console.log(row)
 }
 }
//  lowerTriangleStartPattern(6)
/* -------------------------------------------------------------------------- */
function upperRightTriangleStartPattern(n){
  for(let i=1;i<=n;i++){
    let row=""
    for(let k=1;k<=n-i;k++){
          row=row+" "
    }
    for(let j=1;j<=i;j++){
        row=row +"*"
    }
    console.log(row)
 }
 }
//  upperRightTriangleStartPattern(6)
/* -------------------------------------------------------------------------- */
function upperTriangleZeroOnePattern(n){
 
  for(let i=1;i<=n;i++){
    let row=""
    let flag=1
    for(let j=1;j<=i;j++){
        row=row +(flag ? "1 " : "0 ")
        flag=(!flag )
    }
    console.log(row)
 }
 }
//  upperTriangleZeroOnePattern(5)
 /* -------------------------------------------------------------------------- */
function upperTriangleZeroOneNewPattern(n){
  let flag=1
 
  for(let i=1;i<=n;i++){
    let row=""
    for(let j=1;j<=i;j++){
        row=row +(flag ? "1 " : "0 ")
        flag=(!flag )
    }
    console.log(row)
 }
 }
 upperTriangleZeroOneNewPattern(5)