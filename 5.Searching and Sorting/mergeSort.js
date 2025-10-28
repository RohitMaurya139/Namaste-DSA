// MERGE FUNCTION: merges two sorted arrays into one sorted array
function merge(arr1, arr2) {
    let m = arr1.length;           // length of first array
    let n = arr2.length;           // length of second array
    let arr3 = new Array(m + n);   // create a new array to hold merged result
    let i = 0, j = 0, k = 0;       // i for arr1, j for arr2, k for arr3

    // Continue until all elements are placed in arr3
    while (k < arr3.length) {
        if (i === m) {             // if arr1 is exhausted, copy remaining from arr2
            arr3[k++] = arr2[j++];
        }
        else if (j === n) {        // if arr2 is exhausted, copy remaining from arr1
            arr3[k++] = arr1[i++];
        }
        else if (arr1[i] <= arr2[j]) { // pick smaller element between arr1[i] & arr2[j]
            arr3[k++] = arr1[i++];
        } else {                   // otherwise pick element from arr2
            arr3[k++] = arr2[j++];
        }
    }
    return arr3;                   // return merged sorted array
}

// MERGE SORT FUNCTION
function mergeSort(arr) {
    // Base case: single element array is already sorted
    if (arr.length === 1) {
        return arr;
    }

    // Find the middle index
    let mid = Math.floor(arr.length / 2);

    // Recursively divide the array into left and right halves
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    // Merge the two sorted halves
    return merge(left, right);
}

// Test array
const arr = [7, 2, 9, 1, 5, 8, 3, 10, 6, 4];
const res = mergeSort(arr);
console.log(res); // Output: [1,2,3,4,5,6,7,8,9,10]


// 🔍 Dry Run Example

// Let’s take a small array for clarity:
// arr = [4, 2, 1, 3]

// Step 1 — Recursive Splitting
// mergeSort([4,2,1,3])
// → mid = 2
// → left = [4,2]
// → right = [1,3]

// Left side recursion:
// mergeSort([4,2])
// → mid = 1
// → left = [4]
// → right = [2]
// → merge([4], [2]) → [2,4]

// Right side recursion:
// mergeSort([1,3])
// → mid = 1
// → left = [1]
// → right = [3]
// → merge([1], [3]) → [1,3]


//Now merge the two halves:
// merge([2,4], [1,3])
// → Compare 2 and 1 → take 1
// → Compare 2 and 3 → take 2
// → Compare 4 and 3 → take 3
// → Left with 4 → take 4
// ✅ Result: [1,2,3,4]


// ⏱️ Time & Space Complexity
// Aspect	Complexity
// Time (Average/Worst)	O(n log n) — each level merges n elements, and there are log n levels
// Space	O(n) — uses temporary arrays for merging
// Best Case	O(n log n) — always divides and merges



