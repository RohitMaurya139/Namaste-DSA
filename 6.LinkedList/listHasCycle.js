// Method 1 : Using Set
var hasCycle = function(head) {
    // Base case: empty list or single node (cannot form a cycle)
    if (head === null || head.next === null) return false;

    // Create a Set to store visited nodes
    const visited = new Set();

    let curr = head;
    while (curr !== null) {
        // If we've seen this node before → cycle detected
        if (visited.has(curr)) {
            return true;
        }

        // Otherwise, mark it as visited
        visited.add(curr);

        // Move to next node
        curr = curr.next;
    }

    // If we reached null, there is no cycle
    return false;
};
// | Metric | Complexity | Explanation                                |
// | ------ | ---------- | ------------------------------------------ |
// | Time   | O(n)       | Each pointer visits each node at most once |
// | Space  | O(n)       | Uses Sets that strore each node in set     |




//-------------------------------------------------------------------------------
//Method 2 : Floyd’s Cycle Detection Algorithm
// ⚙️ Floyd’s Cycle Detection Algorithm (Tortoise & Hare)
// 🐢🐇 Concept

// The algorithm uses two pointers moving at different speeds:

// Slow pointer (Tortoise): moves one step at a time.

// Fast pointer (Hare): moves two steps at a time.

// 🧩 Step-by-Step Logic

// Initialization:

// let slow = head;
// let fast = head;


// Traverse the list:

// Move slow by one node: slow = slow.next

// Move fast by two nodes: fast = fast.next.next

// During traversal:

// If fast or fast.next becomes null, the list has no cycle.
// (Because it means we reached the end of the list.)

// If slow and fast meet (i.e., slow === fast), then a cycle exists.

// 🌀 Intuitive Understanding

// When there’s no cycle, fast will always reach the end first (null).

// When there is a cycle, the faster pointer (fast) will keep looping and eventually “lap” the slower pointer (slow), causing them to meet inside the cycle.
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
// | Metric | Complexity | Explanation                                |
// | ------ | ---------- | ------------------------------------------ |
// | Time   | O(n)       | Each pointer visits each node at most once |
// | Space  | O(1)       | Uses only two pointers                     |
