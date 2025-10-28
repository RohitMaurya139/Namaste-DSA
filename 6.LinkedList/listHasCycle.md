 # 🌀 Floyd’s Cycle Detection Algorithm (Tortoise & Hare)

## ⚙️ Concept

The **Floyd’s Cycle Detection Algorithm**, also known as the **Tortoise and Hare Algorithm**, is used to detect a **cycle (loop)** in a linked list.  

It uses **two pointers** that move at **different speeds**:

- 🐢 **Slow pointer (Tortoise):** moves one step at a time.  
- 🐇 **Fast pointer (Hare):** moves two steps at a time.  

---

## 🧩 Step-by-Step Logic

### 1. Initialization:
```js
let slow = head;
let fast = head;
```
## 2. Traverse the list:

- Move slow by one node:
   -  slow = slow.next
   - Move fast by two nodes:
      - fast = fast.next.next

      ## 3. During traversal:

      - If fast or fast.next becomes null, the list has no cycle
      (because we reached the end of the list).
      - If slow and fast meet (slow === fast), then a cycle exists.

## 🌀 Intuitive Understanding

- When there’s no cycle, fast will reach the end first (null).
- When there is a cycle, the fast pointer will keep looping and eventually “lap” the slow pointer, causing them to meet inside the cycle.

```js
// Method 2: Floyd’s Cycle Detection Algorithm

var hasCycle = function(head) {
    if (head === null || head.next === null) return false;
    if (head.next.next === head) return true;

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;           // move 1 step
        fast = fast.next.next;      // move 2 steps

        if (fast === slow) {        // if pointers meet → cycle
            return true;
        }
    }

    return false; // if fast reaches end → no cycle
};

```
## 📊 Time and Space Complexity
| Metric    | Complexity | Explanation                                |
| --------- | ---------- | ------------------------------------------ |
| **Time**  | O(n)       | Each pointer visits each node at most once |
| **Space** | O(1)       | Uses only two pointers                     |

## ✅ Advantages

- No extra memory like Set or Map
- Efficient — Linear time and Constant space
- Simple and elegant to implement
