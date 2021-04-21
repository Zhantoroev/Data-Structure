# Linked List
A linked list data structure includes a series of connected nodes. Each node store the data and the address of the next node.
![enter image description here](https://cdn.programiz.com/sites/tutorial2program/files/linked-list-concept.png)
First **node** has a special name called **HEAD**. Also, the last node in the linked list can be identified because its next portion points to **NULL**.

## Basic Operations
-   **traverse()**: To traverse all the nodes one after another.
-   **insert()**: To add a node at the given position.
-   **delete()**: To delete a node.
-   **search()**: To search an element(s) by value.
-   **update()**: To update a node.

|Operation| Time Complexity|
|--|--|--|
| traverse()| O(n) |
| insert()| O(1)|
| delete()| O(1)|
| search()| O(n)|


## Types of Linked List
1.  Singly Linked List.
2.  Doubly Linked List.
3.  Circular Linked List.

### **1. Singly Linked List**

A Singly-linked list is a collection of nodes linked together in a sequential way where each node of the singly linked list contains a data field and an address field that contains the reference of the next node.

![enter image description here](https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/types-of-linked-list-and-operation-on-linked-list-node-e40659e7622d3c64.png)

### **2. Doubly Linked List**

A Doubly Linked List contains an extra memory to store the address of the previous node, together with the address of the next node and data which are there in the singly linked list. So, here we are storing the address of the next as well as the previous nodes.
![enter image description here](https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/types-of-linked-list-and-operation-on-linked-list-dll-node-353bd14e2cddd08e.png)

The nodes are connected to each other in this form where the first node has **prev = NULL** and the last node has **next = NULL**.

![enter image description here](https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/types-of-linked-list-and-operation-on-linked-list-dll-0aef50d611177434.png)

### **3. Circular Linked List**

A circular linked list is either a singly or doubly linked list in which there are no  **_NULL_**  values. Here, we can implement the Circular Linked List by making the use of Singly or Doubly Linked List. In the case of a singly linked list, the next of the last node contains the address of the first node and in case of a doubly-linked list, the next of last node contains the address of the first node and prev of the first node contains the address of the last node.

![enter image description here](https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/types-of-linked-list-and-operation-on-linked-list-circular-ll-172222dd1417c829.png)


## Aplication of Linked Lists
**Applications of linked list in computer science**  –

1.  Implementation of  [stacks](https://www.geeksforgeeks.org/stack-data-structure/)  and  [queues](https://www.geeksforgeeks.org/queue-data-structure/)
2.  Implementation of graphs :  [Adjacency list representation of graphs](https://www.geeksforgeeks.org/graph-and-its-representations/)  is most popular which is uses linked list to store adjacent vertices.
3.  Dynamic memory allocation : We use linked list of free blocks.
4.  Maintaining directory of names

**Applications of linked list in real world-**

1.  _Image viewer_  – Previous and next images are linked, hence can be accessed by next and previous button.
2.  _Previous and next page in web browser_  – We can access previous and next url searched in web browser by pressing back and next button since, they are linked as linked list.
3.  _Music Player_  – Songs in music player are linked to previous and next song. you can play songs either from starting or ending of the list.

## Implementation of Linked List
*Java language*
```java
class LinkedList {
  // Creating a node
  Node head;

  static class Node {
    int value;
    Node next;

    Node(int d) {
      value = d;
      next = null;
    }
  }

  public static void main(String[] args) {
    LinkedList linkedList = new LinkedList();

    // Assign value values
    linkedList.head = new Node(1);
    Node second = new Node(2);
    Node third = new Node(3);

    // Connect nodess
    linkedList.head.next = second;
    second.next = third;

    // printing node-value
    while (linkedList.head != null) {
      System.out.print(linkedList.head.value + " ");
      linkedList.head = linkedList.head.next;
    }
  }
}
```



