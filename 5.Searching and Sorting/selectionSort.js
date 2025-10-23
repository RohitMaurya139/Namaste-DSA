function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let min = i; // assume the first element is the minimum
  
      // find index of the smallest element in the remaining array
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
  
      // swap the smallest element with the first unsorted element
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  
    return arr;
  }
  
  const arr = [7, 2, 9, 1, 5, 8, 3, 10, 6, 4];
  const res = selectionSort(arr);
  console.log(res);

// For arr = [7, 2, 9, 1, 5]  
//   | Pass | i | min index | Swapped Values | Resulting Array |
//   | ---- | - | --------- | -------------- | --------------- |
//   | 1    | 0 | 3         | 7 ↔ 1          | [1, 2, 9, 7, 5] |
//   | 2    | 1 | 1         | 2 ↔ 2          | [1, 2, 9, 7, 5] |
//   | 3    | 2 | 4         | 9 ↔ 5          | [1, 2, 5, 7, 9] |
//   | 4    | 3 | 3         | 7 ↔ 7          | [1, 2, 5, 7, 9] |

// ⏱️ Time and Space Complexity

// Time Complexity:

// Best = Worst = Average = O(n²)
// (because of the nested loops)

// Space Complexity:

// O(1) (it sorts in place — no extra array used)