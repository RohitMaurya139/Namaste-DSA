# 🔁 Recursion in JavaScript

**Recursion** is when a function calls itself to solve a smaller version of the same problem. It is commonly used for problems that can be broken down into simpler sub-problems.

---

## ⚡ Two Parts of Recursion

### 1. Base Case
- The **stop condition** for the recursion.  
- Without a base case, recursion would run infinitely and cause a stack overflow.  

### 2. Recursive Case
- The part where the function **calls itself** with a simpler input.  
- Helps to gradually reach the base case.

---

## ✅ Example 1: Factorial

```js
function factorial(n) {
  if (n === 0 || n === 1) return 1; // Base case
  return n * factorial(n - 1);      // Recursive case
}

console.log(factorial(5)); // ➤ 120
```
## 🔑 Key Points About Recursion

-  Always define a base case to stop recursion.

-  Make sure each recursive call moves closer to the base case.

-  Avoid deep recursion on very large inputs to prevent stack overflow.

-  Recursion is ideal for problems like:

          - Factorials

          - Fibonacci numbers

          - Tree and graph traversal

          - Divide and conquer algorithms (e.g., merge sort, quick sort)