function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i+1; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
        }
      }
    }
    return arr;
  }
  
  const arr = [7, 2, 9, 1, 5, 8, 3, 10, 6, 4];
  const res = bubbleSort(arr);
  console.log(res);
  