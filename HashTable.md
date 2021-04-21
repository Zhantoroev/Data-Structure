# Hash Table
A **Hash Table** is a data structure that stores values which have keys associated with each of them. Furthermore, it supports lookup efficiently if we know the key associated with the value (It is very fast in serching the data). Hence it is very efficient in inserting and searching, irrespective of the size of the data.

The Hash table data structure stores elements in key-value pairs where

-   **Key**- unique integer that is used for indexing the values
-   **Value**  - data that are associated with keys.

![enter image description here](https://cdn.programiz.com/sites/tutorial2program/files/Hash-0.png)

## Hashing (Hash Function)

Hashing is a technique to convert a range of key values into a range of indexes of an array.
In a hash table, a new index is processed using the keys. And, the element corresponding to that key is stored in the index. This process is called  **hashing**.

Let  *k*  be a key and  *h(x)*  be a hash function.

Here,  *h(k)*  will give us a new index to store the element linked with  *k*.

![enter image description here](https://cdn.programiz.com/sites/tutorial2program/files/Hash-2_0.png)

## Hash Collision

When the hash function generates the same index for multiple keys, there will be a conflict (what value to be stored in that index). This is called a **hash collision.**

We can resolve the hash collision using one of the following techniques.

-   Collision resolution by chaining
-   Open Addressing: Linear/Quadratic Probing and Double Hashing

### Collision resolution by chaining

In chaining, if a hash function produces the same index for multiple elements, these elements are stored in the same index by using a doubly-linked list.

If  `j`  is the slot for multiple elements, it contains a pointer to the head of the list of elements. If no element is present,  `j`  contains  `NIL`.
![enter image description here](https://cdn.programiz.com/sites/tutorial2program/files/Hash-3_1.png)
**Pseudocode for operations**
```
chainedHashSearch(T, k)
  return T[h(k)]
chainedHashInsert(T, x)
  T[h(x.key)] = x //insert at the head
chainedHashDelete(T, x)
  T[h(x.key)] = NIL
```

## Basic Operations
-   **search()**  − Searches an element in a hash table.
    
-   **insert()**  − inserts an element in a hash table.
    
-   **delete()**  − Deletes an element from a hash table.

|Operation| Time Complexity  |
|--|--|
|search()| O(1)|
|insert()| O(1)|
|delete()| O(1)|


## Applications of Hash Table

Hash tables are implemented where

-   constant time lookup and insertion is required
-   cryptographic applications
-   indexing data is required


## Implementation
**Implementation of Hash Table in Java (Chaining example)**

*Java langauge*
```java
// Java program to demonstrate implementation of our
// own hash table with chaining for collision detection
import java.util.ArrayList;

// A node of chains
class HashNode<K, V> {
    K key;
    V value;
 
    // Reference to next node
    HashNode<K, V> next;
 
    // Constructor
    public HashNode(K key, V value)
    {
        this.key = key;
        this.value = value;
    }
}
 
// Class to represent entire hash table
public class Map<K, V> {
    // bucketArray is used to store array of chains
    private ArrayList<HashNode<K, V> > bucketArray;
 
    // Current capacity of array list
    private int numBuckets;
 
    // Current size of array list
    private int size;
 
    // Constructor (Initializes capacity, size and
    // empty chains.
    public Map()
    {
        bucketArray = new ArrayList<>();
        numBuckets = 10;
        size = 0;
 
        // Create empty chains
        for (int i = 0; i < numBuckets; i++)
            bucketArray.add(null);
    }
 
    public int size() { return size; }
    public boolean isEmpty() { return size() == 0; }
 
    // This implements hash function to find index
    // for a key
    private int getBucketIndex(K key)
    {
        int hashCode = key.hashCode();
        int index = hashCode % numBuckets;
        // key.hashCode() coule be negative.
        index = index < 0 ? index * -1 : index;
        return index;
    }
 
    // Method to remove a given key
    public V remove(K key)
    {
        // Apply hash function to find index for given key
        int bucketIndex = getBucketIndex(key);
 
        // Get head of chain
        HashNode<K, V> head = bucketArray.get(bucketIndex);
 
        // Search for key in its chain
        HashNode<K, V> prev = null;
        while (head != null) {
            // If Key found
            if (head.key.equals(key))
                break;
 
            // Else keep moving in chain
            prev = head;
            head = head.next;
        }
 
        // If key was not there
        if (head == null)
            return null;
 
        // Reduce size
        size--;
 
        // Remove key
        if (prev != null)
            prev.next = head.next;
        else
            bucketArray.set(bucketIndex, head.next);
 
        return head.value;
    }
 
    // Returns value for a key
    public V get(K key)
    {
        // Find head of chain for given key
        int bucketIndex = getBucketIndex(key);
        HashNode<K, V> head = bucketArray.get(bucketIndex);
 
        // Search key in chain
        while (head != null) {
            if (head.key.equals(key))
                return head.value;
            head = head.next;
        }
 
        // If key not found
        return null;
    }
 
    // Adds a key value pair to hash
    public void add(K key, V value)
    {
        // Find head of chain for given key
        int bucketIndex = getBucketIndex(key);
        HashNode<K, V> head = bucketArray.get(bucketIndex);
 
        // Check if key is already present
        while (head != null) {
            if (head.key.equals(key)) {
                head.value = value;
                return;
            }
            head = head.next;
        }
 
        // Insert key in chain
        size++;
        head = bucketArray.get(bucketIndex);
        HashNode<K, V> newNode
            = new HashNode<K, V>(key, value);
        newNode.next = head;
        bucketArray.set(bucketIndex, newNode);
 
        // If load factor goes beyond threshold, then
        // double hash table size
        if ((1.0 * size) / numBuckets >= 0.7) {
            ArrayList<HashNode<K, V> > temp = bucketArray;
            bucketArray = new ArrayList<>();
            numBuckets = 2 * numBuckets;
            size = 0;
            for (int i = 0; i < numBuckets; i++)
                bucketArray.add(null);
 
            for (HashNode<K, V> headNode : temp) {
                while (headNode != null) {
                    add(headNode.key, headNode.value);
                    headNode = headNode.next;
                }
            }
        }
    }
 
    // Driver method to test Map class
    public static void main(String[] args)
    {
        Map<String, Integer> map = new Map<>();
        map.add("this", 1);
        map.add("coder", 2);
        map.add("this", 4);
        map.add("hi", 5);
        System.out.println(map.size());
        System.out.println(map.remove("this"));
        System.out.println(map.remove("this"));
        System.out.println(map.size());
        System.out.println(map.isEmpty());
    }
}

```












