## Time Complexity

**Time Complexity** is used to measure the efficiency of an algorithm in terms of **speed**, as the input size grows.
It gives a **theoretical estimate** of how efficiently an algorithm scales — not the actual runtime, but how fast it *grows*.
> ⚠️ Note:  
> Time Complexity ≠ Actual Time Taken (it’s a theoretical measure of growth rate)
> It represents **growth rate**, not seconds or milliseconds.

Speed efficiency → how the algorithm performs when the **input size increases**.


---

### 🔍 Linear Search vs Binary Search

| Feature | Linear Search | Binary Search |
|----------|----------------|----------------|
| **Definition** | Checks each element one by one until the target is found or the list ends | Repeatedly divides the sorted list in half to find the target |
| **Data Requirement** | Works on **unsorted** or **sorted** data | Works only on **sorted** data |
| **Approach** | Sequential search | Divide and conquer |
| **Time Complexity (Best)** | O(1) | O(1) |
| **Time Complexity (Average)** | O(n) | O(log n) |
| **Time Complexity (Worst)** | O(n) | O(log n) |
| **Space Complexity** | O(1) | O(1) |
| **Efficiency** | Slower for large datasets | Much faster for large datasets |
| **Example** | Searching a name in an unsorted contact list | Searching a name in a sorted phonebook |

---

✅ **Conclusion:**  
Binary Search is more efficient than Linear Search, but it requires the data to be sorted.

---

### 📈 Common Time Complexities

| Big-O Notation | Name | Example | Description |
|----------------|------|----------|--------------|
| **O(1)** | Constant Time | Accessing `arr[0]` | Time doesn’t change with input size |
| **O(log n)** | Logarithmic Time | Binary Search | Problem size halves each step |
| **O(n)** | Linear Time | Linear Search | Time grows directly with input size |
| **O(n log n)** | Linearithmic Time | Merge Sort, Quick Sort | Divide and conquer on each level |
| **O(n²)** | Quadratic Time | Bubble Sort, Nested loops | Time increases by square of input |
| **O(2ⁿ)** | Exponential Time | Recursive Fibonacci | Doubles with each additional input |
| **O(n!)** | Factorial Time | Traveling Salesman | Grows extremely fast |

---
### ⚙️ JavaScript Examples

#### 🟢 O(1) — Constant Time
```js
function getFirstElement(arr) {
  return arr[0]; // Always one step, no matter how big the array is
}
```

#### 🟡 O(n) — Linear Time
```js
function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // Runs once per element
  }
}
```
#### 🔵 O(n²) — Quadratic Time
```js
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
```
#### 🔴 O(log n) — Binary Search Example
```js
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```

# 💾 Space Complexity

**Space Complexity** measures the extra memory an algorithm uses relative to the input size.

It includes:
- Variables
- Data structures
- Recursion stack
- Function call overhead

---

## 📊 Common Space Complexities

| Big-O     | Description                     | Example                              |
| --------- | ------------------------------- | ------------------------------------ |
| **O(1)**  | Constant space — fixed memory   | Iterative loops, swapping variables  |
| **O(n)**  | Linear space — grows with input | Copying arrays, storing results      |
| **O(n²)** | Quadratic space                 | 2D matrices, adjacency matrix graphs |

---
### 💡 JavaScript Examples
#### 🟢 O(1) — Constant Space
```js
function sum(arr) {
  let total = 0; // Only one variable
  for (let num of arr) total += num;
  return total;
}
```
#### 🟡 O(n) — Linear Space
```js
function duplicateArray(arr) {
  let copy = []; // grows as input grows
  for (let num of arr) {
    copy.push(num);
  }
  return copy;
}
```
#### 🔵 O(n) — Recursive Fibonacci (space used by call stack)
```js
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
```

## 🔍 Linear Search vs Binary Search

| Feature                       | Linear Search                                                         | Binary Search                                                 |
| ----------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Definition**                | Checks each element one by one until the target is found or list ends | Repeatedly divides the sorted list in half to find the target |
| **Data Requirement**          | Works on **unsorted or sorted** data                                  | Works only on **sorted** data                                 |
| **Approach**                  | Sequential search                                                     | Divide and conquer                                            |
| **Time Complexity (Best)**    | O(1)                                                                  | O(1)                                                          |
| **Time Complexity (Average)** | O(n)                                                                  | O(log n)                                                      |
| **Time Complexity (Worst)**   | O(n)                                                                  | O(log n)                                                      |
| **Space Complexity**          | O(1)                                                                  | O(1)                                                          |
| **Efficiency**                | Slower for large datasets                                             | Much faster for large datasets                                |
| **Example**                   | Searching a name in an unsorted contact list                          | Searching a name in a sorted phonebook                        |


