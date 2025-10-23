function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let curr = arr[i];     // element to insert in sorted part
      let pre = i - 1;       // index of last sorted element
  
      // shift elements greater than curr to the right
      while (pre >= 0 && arr[pre] > curr) {
        arr[pre + 1] = arr[pre];
        pre--;
      }
  
      // place curr at its correct position
      arr[pre + 1] = curr;
    }
  
    return arr;
  }
  
  const arr = [7, 2, 9, 1, 5, 8, 3, 10, 6, 4];
  const res = insertionSort(arr);
  console.log(res);

// For arr = [7, 2, 9, 1, 5]
//   | i | curr | arr before      | arr after inserting curr |
//   | - | ---- | --------------- | ------------------------ |
//   | 1 | 2    | [7, 2, 9, 1, 5] | [2, 7, 9, 1, 5]          |
//   | 2 | 9    | [2, 7, 9, 1, 5] | [2, 7, 9, 1, 5]          |
//   | 3 | 1    | [2, 7, 9, 1, 5] | [1, 2, 7, 9, 5]          |
//   | 4 | 5    | [1, 2, 7, 9, 5] | [1, 2, 5, 7, 9]          |

// ⏱️ Time Complexity

// Best Case (already sorted): O(n)

// Worst Case (reverse order): O(n²)

// Space Complexity: O(1) (in-place sorting)