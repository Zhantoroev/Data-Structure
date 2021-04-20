# Data-Structure
# Stack
Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).
If we make an analogy with real life, Stack is similar to plates stacked over one another in the kitchen. The plate which is at the top is the first one to be removed, the plate which has been placed at the bottommost position remains in the stack for the longest period of time.

![StackImg](https://cdn.programiz.com/sites/tutorial2program/files/stack.png)


## Basic Operations

|Operations  |Time Complexity  |
|--|--|
|push()| O(1)|
|pop() | O(1)|
|isEmpty()| O(1)|
|peek() | O(1)|


 - **push() :**   Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.
 -  **pop() :**   Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.
 -  **peek() :**   Returns top element of stack.
 -  **isEmpty() :**  Returns true if stack is empty, else false.
 
 **Time Complexities of operations on stack:**
 
*push()*, *pop()*, *isEmpty() and peek()* all take **O(1)** time. We do not run any loop in any of these operations.

## Aplication of Stack

 - [Balancing of symbols](https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/)
 - Infix to Postfix/Prefix conversion
 - Redo-undo features at many places like editors, photoshop
 - Forward and backward feature in web browsers
 - Used in many algorithms like  [Tower of Hanoi,](https://www.geeksforgeeks.org/recursive-functions/) [tree traversals](https://www.geeksforgeeks.org/618/),  [stock span problem](https://www.geeksforgeeks.org/the-stock-span-problem/),  [histogram problem](https://www.geeksforgeeks.org/largest-rectangular-area-in-a-histogram-set-1/).
 - **Stack data structure** used in backtracking problems.

## Implementation

There are two ways to implement a stack:

-   Using array
-   Using linked list

### Implementing Stack using Array 
*Java language*
```java
/* Java program to implement basic stack
operations */
class Stack {
    static final int MAX = 1000;
    int top;
    int a[] = new int[MAX]; // Maximum size of Stack
 
    boolean isEmpty()
    {
        return (top < 0);
    }
    Stack()
    {
        top = -1;
    }
 
    boolean push(int x)
    {
        if (top >= (MAX - 1)) {
            System.out.println("Stack Overflow");
            return false;
        }
        else {
            a[++top] = x;
            System.out.println(x + " pushed into stack");
            return true;
        }
    }
 
    int pop()
    {
        if (top < 0) {
            System.out.println("Stack Underflow");
            return 0;
        }
        else {
            int x = a[top--];
            return x;
        }
    }
 
    int peek()
    {
        if (top < 0) {
            System.out.println("Stack Underflow");
            return 0;
        }
        else {
            int x = a[top];
            return x;
        }
    }
}
 
// Driver code
class Main {
    public static void main(String args[])
    {
        Stack s = new Stack();
        s.push(10);
        s.push(20);
        s.push(30);
        System.out.println(s.pop() + " Popped from stack");
    }
}

```
**Output:**
```
10 pushed into stack
20 pushed into stack
30 pushed into stack
30 Popped from stack
Top element is : 20
Elements present in stack : 20 10  

```

**Pros:** Easy to implement. Memory is saved as pointers are not involved.  
**Cons:** It is not dynamic. It doesn’t grow and shrink depending on needs at runtime.

### Implementing Stack using Linked List:
*Java language*
```java 
// Java Code for Linked List Implementation
 
public class StackAsLinkedList {
 
    StackNode root;
 
    static class StackNode {
        int data;
        StackNode next;
 
        StackNode(int data) { this.data = data; }
    }
 
    public boolean isEmpty()
    {
        if (root == null) {
            return true;
        }
        else
            return false;
    }
 
    public void push(int data)
    {
        StackNode newNode = new StackNode(data);
 
        if (root == null) {
            root = newNode;
        }
        else {
            StackNode temp = root;
            root = newNode;
            newNode.next = temp;
        }
        System.out.println(data + " pushed to stack");
    }
 
    public int pop()
    {
        int popped = Integer.MIN_VALUE;
        if (root == null) {
            System.out.println("Stack is Empty");
        }
        else {
            popped = root.data;
            root = root.next;
        }
        return popped;
    }
 
    public int peek()
    {
        if (root == null) {
            System.out.println("Stack is empty");
            return Integer.MIN_VALUE;
        }
        else {
            return root.data;
        }
    }
 
    // Driver code
    public static void main(String[] args)
    {
 
        StackAsLinkedList sll = new StackAsLinkedList();
 
        sll.push(10);
        sll.push(20);
        sll.push(30);
 
        System.out.println(sll.pop()
                           + " popped from stack");
 
        System.out.println("Top element is " + sll.peek());
    }
}
```
**Output:** 
```
10 pushed to stack
20 pushed to stack
30 pushed to stack
30 popped from stack
Top element is 20
Elements present in stack : 20 10 
```
**Pros:** The linked list implementation of stack can grow and shrink according to the needs at runtime.  
**Cons:** Requires extra memory due to involvement of pointers.


# Queue

Queue is a linear data structure which follows a particular order in which the operations are performed. The order is **F**irst **I**n **F**irst **O**ut (FIFO). A good example of queue is any queue of consumers for a resource where the consumer that came first is served first.

![QueueImg](https://cdn.programiz.com/sites/tutorial2program/files/queue.png)

## Working of Queue

Queue operations work as follows:

-   two pointers  FRONT  and  REAR
-   FRONT  track the first element of the queue
-   REAR  track the last element of the queue
-   initially, set value of  FRONT  and  REAR  to -1

## Basic operations
-   **enqueue()**:  Add an element to the end of the queue
-   **dequeue()**:  Remove an element from the front of the queue
-   **isEmpty()**: Check if the queue is empty
-   **isFull()**: Check if the queue is full
-   **peek()**: Get the value of the front of the queue without removing it

|Operations| Time Complexity  |
|--|--|
| enqueue()|O(1)|
| dequeue()|O(1)|
| isEmpty()|O(1) |
| peek()| O(1)|

## Applications of Queue
Queue is used when things don’t have to be processed immediatly, but have to be processed in **F**irst **I**n**F**irst **O**ut order.
-   CPU scheduling, Disk Scheduling
-   When data is transferred asynchronously between two processes.The queue is used for synchronization. For example: IO Buffers, pipes, file IO, etc
-   Handling of interrupts in real-time systems.
-   Call Center phone systems use Queues to hold people calling them in order.

## Implementation of queue
### Implementation with Array
*Java language*
```java
// A class to represent a queue
class Queue {
    int front, rear, size;
    int capacity;
    int array[];
 
    public Queue(int capacity)
    {
        this.capacity = capacity;
        front = this.size = 0;
        rear = capacity - 1;
        array = new int[this.capacity];
    }
 
    // Queue is full when size becomes
    // equal to the capacity
    boolean isFull(Queue queue)
    {
        return (queue.size == queue.capacity);
    }
 
    // Queue is empty when size is 0
    boolean isEmpty(Queue queue)
    {
        return (queue.size == 0);
    }
 
    // Method to add an item to the queue.
    // It changes rear and size
    void enqueue(int item)
    {
        if (isFull(this))
            return;
        this.rear = (this.rear + 1)
                    % this.capacity;
        this.array[this.rear] = item;
        this.size = this.size + 1;
        System.out.println(item
                           + " enqueued to queue");
    }
 
    // Method to remove an item from queue.
    // It changes front and size
    int dequeue()
    {
        if (isEmpty(this))
            return Integer.MIN_VALUE;
 
        int item = this.array[this.front];
        this.front = (this.front + 1)
                     % this.capacity;
        this.size = this.size - 1;
        return item;
    }
 
    // Method to get front of queue
    int front()
    {
        if (isEmpty(this))
            return Integer.MIN_VALUE;
 
        return this.array[this.front];
    }
 
    // Method to get rear of queue
    int rear()
    {
        if (isEmpty(this))
            return Integer.MIN_VALUE;
 
        return this.array[this.rear];
    }
}
 
// Driver class
public class Test {
    public static void main(String[] args)
    {
        Queue queue = new Queue(1000);
 
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        queue.enqueue(40);
 
        System.out.println(queue.dequeue()
                           + " dequeued from queue\n");
 
        System.out.println("Front item is "
                           + queue.front());
 
        System.out.println("Rear item is "
                           + queue.rear());
    }
} 
```
**Output:**
```
10 enqueued to queue
20 enqueued to queue
30 enqueued to queue
40 enqueued to queue
10 dequeued from queue
Front item is 20
Rear item is 40

```
**Pros of Array Implementation:**

- Easy to implement.

**Cons of Array Implementation:**

- Static Data Structure, fixed size.
- If the queue has a large number of enqueue and dequeue operations, at some point we may not we able to insert elements in the queue even if the queue is empty (this problem is avoided by using circular queue).

### Implementation with Linked List
*Java language*
```java
class QNode {
    int key;
    QNode next;
  
    // constructor to create a new linked list node
    public QNode(int key)
    {
        this.key = key;
        this.next = null;
    }
}
  
// A class to represent a queue
// The queue, front stores the front node of LL and rear stores the
// last node of LL
class Queue {
    QNode front, rear;
  
    public Queue()
    {
        this.front = this.rear = null;
    }
  
    // Method to add an key to the queue.
    void enqueue(int key)
    {
  
        // Create a new LL node
        QNode temp = new QNode(key);
  
        // If queue is empty, then new node is front and rear both
        if (this.rear == null) {
            this.front = this.rear = temp;
            return;
        }
  
        // Add the new node at the end of queue and change rear
        this.rear.next = temp;
        this.rear = temp;
    }
  
    // Method to remove an key from queue.
    void dequeue()
    {
        // If queue is empty, return NULL.
        if (this.front == null)
            return;
  
        // Store previous front and move front one node ahead
        QNode temp = this.front;
        this.front = this.front.next;
  
        // If front becomes NULL, then change rear also as NULL
        if (this.front == null)
            this.rear = null;
    }
}
  
// Driver class
public class Test {
    public static void main(String[] args)
    {
        Queue q = new Queue();
        q.enqueue(10);
        q.enqueue(20);
        q.dequeue();
        q.dequeue();
        q.enqueue(30);
        q.enqueue(40);
        q.enqueue(50);
        q.dequeue();
        System.out.println("Queue Front : " + q.front.key);
        System.out.println("Queue Rear : " + q.rear.key);
    }
}

```

**Output:**
```
Queue Front : 40
Queue Rear : 50
```



