 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 *
 * THEORY:
 * ----------------
 * A linked list is a palindrome if the sequence of node values
 * reads the same from front to back.
 * 
 * Example:
 * [1, 2, 2, 1] → palindrome ✅
 * [1, 2, 3, 2, 1] → palindrome ✅
 * [1, 2, 3] → not palindrome ❌
 * 
 * To check this efficiently in O(n) time and O(1) extra space:
 * 1️⃣ Use two pointers (slow & fast) to find the middle of the list.
 * 2️⃣ Reverse the second half of the list in place.
 * 3️⃣ Compare the first half and reversed second half node by node.
 * 4️⃣ If all values match → it's a palindrome.
 */

var isPalindrome = function(head) {
    // Base case: if there’s only one node, it’s always a palindrome.
    if (!head || !head.next) return true;

    // STEP 1️⃣: Find the middle of the linked list using slow & fast pointers.
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;         // move slow by 1
        fast = fast.next.next;    // move fast by 2
    }
    // When fast reaches the end, slow will be at the middle.
    // Example: for [1,2,3,4], slow → 3
    // Example: for [1,2,3,2,1], slow → 3

    // STEP 2️⃣: Reverse the second half of the list starting from 'slow'.
    let pre = null;  // previous node (used to reverse links)
    let curr = slow; // current node being processed

    /**
     * REVERSING LINKED LIST — DETAILED EXPLANATION:
     * ---------------------------------------------
     * Before reversal:
     *   slow → 3 → 2 → 1 → null
     * 
     * We will iteratively reverse the direction of the `.next` pointer:
     *   1st iteration:
     *     temp = curr.next  → store next node (2)
     *     curr.next = pre   → point 3 → null
     *     pre = curr        → move pre to 3
     *     curr = temp       → move curr to 2
     * 
     *   2nd iteration:
     *     temp = curr.next  → store next node (1)
     *     curr.next = pre   → point 2 → 3
     *     pre = curr        → move pre to 2
     *     curr = temp       → move curr to 1
     * 
     *   3rd iteration:
     *     temp = curr.next  → null
     *     curr.next = pre   → point 1 → 2
     *     pre = curr        → move pre to 1
     *     curr = temp       → curr = null (loop ends)
     * 
     * After reversal:
     *   pre → 1 → 2 → 3 → null
     */

    while (curr) {
        let temp = curr.next; // temporarily store the next node
        curr.next = pre;      // reverse the link
        pre = curr;           // move pre forward
        curr = temp;          // move curr forward
    }
    // After this loop, 'pre' points to the head of the reversed half.

    // STEP 3️⃣: Compare both halves.
    let left = head;  // start of the first half
    let right = pre;  // start of the reversed second half

    while (right !== null) {
        if (left.val !== right.val) {
            return false; // mismatch found → not a palindrome
        }
        left = left.next;
        right = right.next;
    }

    // STEP 4️⃣: All values matched → it’s a palindrome
    return true;
};

// 🧠 Complexity

// Time Complexity: O(n) → Each node is visited at most twice.

// Space Complexity: O(1) → Reversal done in-place (no extra list/array).

// REVERSING LINKED LIST
// pre=null
// curr=head

// while(curr){
//     temp=curr.next
//     curr.next=pre
//     pre=curr
//     curr=temp
// }
// after the loop end pre points to head of reverse LL