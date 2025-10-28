  /**
 * 📘 Linked List Implementation in JavaScript
 * -------------------------------------------
 * A Linked List is a linear data structure where each element (called a Node)
 * contains a value and a pointer/reference to the next node in the list.
 * Unlike arrays, linked lists are not stored in contiguous memory locations.
 *
 * 👉 Advantages over Arrays:
 *  - Dynamic size (no fixed length)
 *  - Easier insertion and deletion (no shifting of elements)
 *
 * 👉 Disadvantages:
 *  - No direct access by index (O(n) traversal needed)
 *  - Extra memory for "next" pointer
 */

/**
 * 🧩 Node Constructor
 * Represents a single node in the linked list.
 */
function Node(val) {
    this.val = val;   // Value stored in the node
    this.next = null; // Pointer to the next node
}

/**
 * 🧱 MyLinkedList Constructor
 * Represents the full linked list with a head node and size tracking.
 */
var MyLinkedList = function () {
    this.head = null; // Start of the linked list
    this.size = 0;    // Number of nodes
};

/**
 * 📍 get(index)
 * Returns the value of the node at a specific index.
 * Time Complexity: O(n)
 */
MyLinkedList.prototype.get = function (index) {
    if (index >= this.size || index < 0) {
        return -1; // Invalid index
    }

    let curr = this.head;
    let i = 0;

    while (i < index) {
        curr = curr.next;
        i++;
    }

    return curr.val;
};

/**
 * 🪝 addAtHead(val)
 * Adds a new node at the beginning (head) of the linked list.
 * Time Complexity: O(1)
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new Node(val);
    newNode.next = this.head; // Point new node to old head
    this.head = newNode;      // Move head to new node
    this.size++;
};

/**
 * 🦴 addAtTail(val)
 * Adds a new node at the end (tail) of the linked list.
 * Time Complexity: O(n)
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);

    if (this.head === null) {
        this.head = newNode;
    } else {
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = newNode; // Link last node to new node
    }

    this.size++;
};

/**
 * 🧩 addAtIndex(index, val)
 * Adds a node before the node at the given index.
 * If index == size → insert at tail.
 * If index == 0 → insert at head.
 * Time Complexity: O(n)
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size) return;

    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    if (index === this.size) {
        this.addAtTail(val);
        return;
    }

    let newNode = new Node(val);
    let curr = this.head;
    let i = 0;

    while (i < index - 1) {
        curr = curr.next;
        i++;
    }

    // Insert newNode between curr and curr.next
    newNode.next = curr.next;
    curr.next = newNode;

    this.size++;
};

/**
 * ❌ deleteAtIndex(index)
 * Deletes the node at the given index.
 * Time Complexity: O(n)
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index >= this.size || index < 0 || this.head === null) {
        return;
    }

    if (index === 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }

    let curr = this.head;
    let i = 0;

    while (i < index - 1) {
        curr = curr.next;
        i++;
    }

    // Skip over the node to be deleted
    curr.next = curr.next.next;
    this.size--;
};

/**
 * 🧠 Helper function: printList()
 * Prints the linked list in a readable format.
 */
MyLinkedList.prototype.printList = function () {
    let curr = this.head;
    let output = "";
    while (curr !== null) {
        output += curr.val + (curr.next ? " -> " : "");
        curr = curr.next;
    }
    console.log(output || "Empty list");
};

/**
 * 🧪 Example Usage:
 */
let list = new MyLinkedList();
list.addAtHead(3);
list.addAtTail(5);
list.addAtTail(7);
list.addAtIndex(1, 4); // Insert 4 between 3 and 5
list.printList(); // Output: 3 -> 4 -> 5 -> 7

console.log("Value at index 2:", list.get(2)); // Output: 5

list.deleteAtIndex(1);
list.printList(); // Output: 3 -> 5 -> 7
