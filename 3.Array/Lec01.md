 # 📌 JavaScript Arrays

Arrays are used to store multiple values in a single variable.

```js
// ✅ 1. Create an Array
let fruits = ["apple", "banana", "orange"];
console.log("Fruits:", fruits); // ➤ [ 'apple', 'banana', 'orange' ]

// ✅ 2. Accessing Array Elements (0-based index)
console.log("First fruit:", fruits[0]); // ➤ 'apple'

// ✅ 3. Modifying Array Elements
fruits[1] = "mango"; // Change banana to mango
console.log("Modified fruits:", fruits); // ➤ [ 'apple', 'mango', 'orange' ]

// ✅ 4. Array Length
console.log("Number of fruits:", fruits.length); // ➤ 3

// ✅ 5. Adding Elements
fruits.push("grape"); // Adds to end
fruits.unshift("kiwi"); // Adds to start
console.log("After adding:", fruits); // ➤ [ 'kiwi', 'apple', 'mango', 'orange', 'grape' ]

// ✅ 6. Removing Elements
fruits.pop(); // Removes last element
fruits.shift(); // Removes first element
console.log("After removing:", fruits); // ➤ [ 'apple', 'mango', 'orange' ]

// ✅ 7. Looping Through Arrays
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}:`, fruits[i]);
}

// ✅ 8. Using for...of Loop (simpler)
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

// ✅ 9. Array Methods

// 🔹 includes()
console.log("Has mango?", fruits.includes("mango")); // ➤ true

// 🔹 indexOf()
console.log("Index of orange:", fruits.indexOf("orange")); // ➤ 2

// 🔹 join()
console.log("Fruits list:", fruits.join(", ")); // ➤ apple, mango, orange

// 🔹 slice() – does not modify original array
let sliced = fruits.slice(0, 2);
console.log("Sliced:", sliced); // ➤ [ 'apple', 'mango' ]

// 🔹 splice() – modifies the original array
fruits.splice(1, 1, "pear"); // remove 1 item at index 1, add "pear"
console.log("After splice:", fruits); // ➤ [ 'apple', 'pear', 'orange' ]

// 🔹 reverse()
let reversed = fruits.slice().reverse(); // use slice() to avoid modifying original
console.log("Reversed:", reversed); // ➤ [ 'orange', 'pear', 'apple' ]

// 🔹 sort()
let numbers = [4, 1, 7, 2];
numbers.sort(); // default sorts as strings
console.log("Sorted (wrong for numbers):", numbers); // ➤ [1, 2, 4, 7]

// ✅ 10. Custom Sort (Correct way for numbers)
numbers.sort((a, b) => a - b); // ascending
console.log("Sorted (correct):", numbers); // ➤ [1, 2, 4, 7]
```
## Array Methods Reference

| Method        | Description                          |
| ------------- | ------------------------------------ |
| `.push()`     | Add to end                           |
| `.pop()`      | Remove from end                      |
| `.unshift()`  | Add to start                         |
| `.shift()`    | Remove from start                    |
| `.length`     | Get number of items                  |
| `.includes()` | Check if element exists              |
| `.indexOf()`  | Get index of element                 |
| `.join()`     | Convert array to string              |
| `.slice()`    | Returns a portion (non-destructive) |
| `.splice()`   | Remove/replace items (destructive)  |
| `.sort()`     | Sorts array                          |
| `.reverse()`  | Reverses order                       |
