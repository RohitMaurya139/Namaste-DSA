function bubbleSort(arr) {
  // Outer loop: iterate over each element in the array
  for (let i = 0; i < arr.length - 1; i++) {
    // Inner loop: compare adjacent elements up to the unsorted portion
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Swap if current element is greater than next element
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr; // Return the sorted array
}

// Example array
const arr = [7, 2, 9, 1, 5, 8, 3, 10, 6, 4];

// Sort the array
const res = bubbleSort(arr);
console.log(res); // Output: [1,2,3,4,5,6,7,8,9,10]


// 🔢 Dry Run Example

// Initial Array: [7, 2, 9, 1, 5]

// Pass 1 (i = 0)

// Compare 7 & 2 → swap → [2, 7, 9, 1, 5]

// Compare 7 & 9 → no swap → [2, 7, 9, 1, 5]

// Compare 9 & 1 → swap → [2, 7, 1, 9, 5]

// Compare 9 & 5 → swap → [2, 7, 1, 5, 9]
// ✅ Largest element 9 is now at the end

// Pass 2 (i = 1)

// Compare 2 & 7 → no swap → [2, 7, 1, 5, 9]

// Compare 7 & 1 → swap → [2, 1, 7, 5, 9]

// Compare 7 & 5 → swap → [2, 1, 5, 7, 9]
// ✅ Next largest element 7 is in place

// Pass 3 (i = 2)

// Compare 2 & 1 → swap → [1, 2, 5, 7, 9]

// Compare 2 & 5 → no swap → [1, 2, 5, 7, 9]

// Pass 4 (i = 3)

// Compare 1 & 2 → no swap → [1, 2, 5, 7, 9]

// ⏱️ Complexity

// Time Complexity: O(n²) worst/average, O(n) best (if optimized with early exit)

// Space Complexity: O(1) (in-place)