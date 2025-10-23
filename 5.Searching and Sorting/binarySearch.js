function binarySearch(arr, target) {
    let i = 0;              // Start index
    let j = arr.length - 1;  // End index

    // Repeat until the search space is exhausted
    while (i <= j) {
        let mid = Math.floor((i + j) / 2); // Middle index

        if (arr[mid] === target) {
            // Target found
            return mid;
        } else if (arr[mid] > target) {
            // Target is in the left half
            j = mid - 1;
        } else {
            // Target is in the right half
            i = mid + 1;
        }
    }

    // Target not found
    return -1;
}

// Test example
const res = binarySearch([1,2,3,4,5,6,7,8,9,10], 445);
console.log(res); // Output: -1 (not found)



// 🔢 Dry Run Example

// Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Target: 6

// i = 0, j = 9 → mid = 4 → arr[4] = 5 → 5 < 6 → search right → i = mid+1 = 5

// i = 5, j = 9 → mid = 7 → arr[7] = 8 → 8 > 6 → search left → j = mid-1 = 6

// i = 5, j = 6 → mid = 5 → arr[5] = 6 → Found! Return 5

// ✅ Output index: 5

// ⏱️ Complexity

// Time Complexity: O(log n) — halves the search space each step

// Space Complexity: O(1) — iterative, in-place