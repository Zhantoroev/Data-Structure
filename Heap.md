# Heap
A Heap is a special Tree-based data structure in which the tree is a complete binary tree. Heap is one maximally efficient implementation of an abstract data type called a [priority queue](https://en.wikipedia.org/wiki/Priority_queue "Priority queue"). It is also called as **a binary heap**. 

Generally, Heaps can be of two types:

1.  **Max-Heap**: In a Max-Heap the key present at the root node must be greatest among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.
2.  **Min-Heap**: In a Min-Heap the key present at the root node must be minimum among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.

![enter image description here](https://www.geeksforgeeks.org/wp-content/uploads/MinHeapAndMaxHeap.png)

## How Binary Heap represented?
A binary heap is typically represented as an array.
-   The root element will be at Arr[0].
-   Below table shows indexes of other nodes for the i'th  node, i.e., Arr[i]:
```
Arr[(i-1)/2] Returns the parent node
Arr[(2*i)+1] Returns the left child node
Arr[(2*i)+2] Returns the right child node
```
## Applications of Heaps

 1. [Heap Sort](http://quiz.geeksforgeeks.org/heap-sort/): Heap Sort uses Binary Heap to sort an array in O(nLogn) time
 2. Priority Queue: Priority queues can be efficiently implemented using Binary Heap because it supports insert(), delete() and extractmax(), decreaseKey() operations in O(logn) time. Binomoial Heap and Fibonacci Heap are variations of Binary Heap. These variations perform union also efficiently.
 3. Graph Algorithms: The priority queues are especially used in Graph Algorithms like [Dijkstra’s Shortest Path](https://www.geeksforgeeks.org/greedy-algorithms-set-7-dijkstras-algorithm-for-adjacency-list-representation/) and [Prim’s Minimum Spanning Tree](https://www.geeksforgeeks.org/greedy-algorithms-set-5-prims-minimum-spanning-tree-mst-2/).
 4. Many problems can be efficiently solved using Heaps.  
a) [K’th Largest Element in an array](https://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/).  
b) [Sort an almost sorted array/](https://www.geeksforgeeks.org/nearly-sorted-algorithm/)  
c) [Merge K Sorted Arrays](https://www.geeksforgeeks.org/merge-k-sorted-arrays/).

## Operations on Min Heap
*For Max Heap is similar, only vice versa*

-  **getMini()**: It returns the root element of Min Heap. 

-  **extractMin()**: Removes the minimum element from MinHeap. 

- **decreaseKey()**: Decreases value of key. If the decreases key value of a node is greater than the parent of the node, then we don’t need to do anything. Otherwise, we need to traverse up to fix the violated heap property.

- **insert()**: We add a new key at the end of the tree. IF new key is greater than its parent, then we don’t need to do anything. Otherwise, we need to traverse up to fix the violated heap property.

-  **delete()**: We replace the key to be deleted with minum infinite by calling decreaseKey(). After decreaseKey(), the minus infinite value must reach root, so we call extractMin() to remove the key.

|operation| Time Complexity  |
|--|--|
|getMin()| O(1)  |
|extractMin()|O(logn)|
|decreaseKey()|O(logn)|
|insert()|O(logn)|
|delete()|O(logn)|

## Implementation of Min Heap

```java
// Java implementation of Min Heap
public class MinHeap {
    private int[] Heap;
    private int size;
    private int maxsize;
  
    private static final int FRONT = 1;
  
    public MinHeap(int maxsize)
    {
        this.maxsize = maxsize;
        this.size = 0;
        Heap = new int[this.maxsize + 1];
        Heap[0] = Integer.MIN_VALUE;
    }
  
    // Function to return the position of
    // the parent for the node currently
    // at pos
    private int parent(int pos)
    {
        return pos / 2;
    }
  
    // Function to return the position of the
    // left child for the node currently at pos
    private int leftChild(int pos)
    {
        return (2 * pos);
    }
  
    // Function to return the position of
    // the right child for the node currently
    // at pos
    private int rightChild(int pos)
    {
        return (2 * pos) + 1;
    }
  
    // Function that returns true if the passed
    // node is a leaf node
    private boolean isLeaf(int pos)
    {
        if (pos >= (size / 2) && pos <= size) {
            return true;
        }
        return false;
    }
  
    // Function to swap two nodes of the heap
    private void swap(int fpos, int spos)
    {
        int tmp;
        tmp = Heap[fpos];
        Heap[fpos] = Heap[spos];
        Heap[spos] = tmp;
    }
  
    // Function to heapify the node at pos
    private void minHeapify(int pos)
    {
  
        // If the node is a non-leaf node and greater
        // than any of its child
        if (!isLeaf(pos)) {
            if (Heap[pos] > Heap[leftChild(pos)]
                || Heap[pos] > Heap[rightChild(pos)]) {
  
                // Swap with the left child and heapify
                // the left child
                if (Heap[leftChild(pos)] < Heap[rightChild(pos)]) {
                    swap(pos, leftChild(pos));
                    minHeapify(leftChild(pos));
                }
  
                // Swap with the right child and heapify
                // the right child
                else {
                    swap(pos, rightChild(pos));
                    minHeapify(rightChild(pos));
                }
            }
        }
    }
  
    // Function to insert a node into the heap
    public void insert(int element)
    {
        if (size >= maxsize) {
            return;
        }
        Heap[++size] = element;
        int current = size;
  
        while (Heap[current] < Heap[parent(current)]) {
            swap(current, parent(current));
            current = parent(current);
        }
    }
  
    // Function to print the contents of the heap
    public void print()
    {
        for (int i = 1; i <= size / 2; i++) {
            System.out.print(" PARENT : " + Heap[i]
                             + " LEFT CHILD : " + Heap[2 * i]
                             + " RIGHT CHILD :" + Heap[2 * i + 1]);
            System.out.println();
        }
    }
  
    // Function to build the min heap using
    // the minHeapify
    public void minHeap()
    {
        for (int pos = (size / 2); pos >= 1; pos--) {
            minHeapify(pos);
        }
    }
  
    // Function to remove and return the minimum
    // element from the heap
    public int remove()
    {
        int popped = Heap[FRONT];
        Heap[FRONT] = Heap[size--];
        minHeapify(FRONT);
        return popped;
    }
  
    // Driver code
    public static void main(String[] arg)
    {
        System.out.println("The Min Heap is ");
        MinHeap minHeap = new MinHeap(15);
        minHeap.insert(5);
        minHeap.insert(3);
        minHeap.insert(17);
        minHeap.insert(10);
        minHeap.insert(84);
        minHeap.insert(19);
        minHeap.insert(6);
        minHeap.insert(22);
        minHeap.insert(9);
        minHeap.minHeap();
  
        minHeap.print();
        System.out.println("The Min val is " + minHeap.remove());
    }
}
```
