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

# 🧠 Call Stack in Recursion

## 📌 What is a Call Stack?

The **Call Stack** is a special memory structure that JavaScript uses to **keep track of function calls**.  
When a function is called, it gets **pushed** (added) onto the stack.  
When the function finishes executing, it gets **popped** (removed) from the stack.

---

## 🔁 Call Stack in Recursion

In **recursion**, every time a function calls itself,  
a **new copy** of that function is added to the call stack.  

The stack keeps track of:
- The current state of each function call
- The parameters and local variables of each call

When the **base case** is reached, the functions start returning results in **reverse order**, as each call gets popped from the stack.

---

## ✅ Example: Factorial Using Call Stack

```js
function factorial(n) {
  if (n === 1) {
    console.log("Returning 1");
    return 1; // Base case
  }

  console.log(`Calling factorial(${n - 1})`);
  const result = n * factorial(n - 1); // Recursive call
  console.log(`factorial(${n}) = ${n} * factorial(${n - 1}) = ${result}`);
  return result;
}

console.log("Final Result:", factorial(4));
```
#### 🔍 Step-by-Step Call Stack Behavior
| Step | Function Call            | Action on Stack     | Description                        |
| ---- | ------------------------ | ------------------- | ---------------------------------- |
| 1    | `factorial(4)`           | Push `factorial(4)` | Calls `factorial(3)`               |
| 2    | `factorial(3)`           | Push `factorial(3)` | Calls `factorial(2)`               |
| 3    | `factorial(2)`           | Push `factorial(2)` | Calls `factorial(1)`               |
| 4    | `factorial(1)`           | Push `factorial(1)` | Base case reached → returns `1`    |
| 5    | Return to `factorial(2)` | Pop `factorial(1)`  | Calculates `2 * 1 = 2`             |
| 6    | Return to `factorial(3)` | Pop `factorial(2)`  | Calculates `3 * 2 = 6`             |
| 7    | Return to `factorial(4)` | Pop `factorial(3)`  | Calculates `4 * 6 = 24`            |
| 8    | End                      | Pop `factorial(4)`  | Stack is empty, final result: `24` |

# ⚠️ Stack Overflow in Recursion

## 📌 What is Stack Overflow?

A **Stack Overflow** occurs in recursion when a function **keeps calling itself endlessly** without a proper **base case** (stop condition).  

Every time a function calls itself, a new frame is added to the **call stack**.  
If the recursion never stops, these frames keep piling up until the **call stack memory limit** is exceeded.  
At that point, JavaScript throws a:

# ⚠️ comman Mistake 
- Missing Base Case - stack overflow 
- Not simplying the input - neve reaches to base case 
- Too deep recursion - Large inputs
- Keeping in Mind the Time Complexity