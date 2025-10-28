 //LeetCode: 203. Remove Linked List Elements


 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 *
 * THEORY:
 * ---------
 * Problem: Remove all nodes from the linked list that contain the given value 'val'.
 *
 * Example:
 * Input:  [1,2,6,3,4,5,6], val = 6
 * Output: [1,2,3,4,5]
 *
 * Idea:
 * - We iterate through the list.
 * - Whenever we find a node whose value = val, we skip it by changing the pointer of the previous node.
 * - The main challenge arises when the node to be removed is the **head** itself.
 *   (Because there’s no previous node before head.)
 *
 * To handle this uniformly, we use a **sentinel (dummy) node** before the head.
 */

var removeElements = function(head, val) {
    // Base case: if list is empty, just return
    if (head === null) return head;

    // STEP 1️⃣: Create a dummy (sentinel) node
    // The dummy node points to the head of the list.
    // This ensures there is always a "previous" node before the head.
    let dummyNode = new ListNode(0);
    dummyNode.next = head;

    // STEP 2️⃣: Use 'pre' pointer to traverse from dummy node
    // 'pre' always points to the node before the one we are checking
    let pre = dummyNode;

    // STEP 3️⃣: Traverse until end of list
    while (pre && pre.next) {
        // If next node’s value matches 'val', remove it
        if (pre.next.val === val) {
            pre.next = pre.next.next; // Skip the node
        } 
        else {
            pre = pre.next; // Move forward normally
        }
    }

    // STEP 4️⃣: Return the actual head of the modified list
    // Note: 'dummyNode.next' may have changed if head nodes were removed
    return dummyNode.next;
};

