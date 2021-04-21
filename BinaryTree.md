# Binary Tree
**Trees:** Unlike Arrays, Linked Lists, Stack and queues, which are linear data structures, trees are hierarchical data structures.
**Binary Tree:** A tree whose elements have at most 2 children is called a binary tree. Since each element in a binary tree can have only 2 children, we typically name them the left and right child.

![enter image description here](https://cdn.programiz.com/sites/tutorial2program/files/binary-tree_0.png)

## Why do we need trees?

 1. One reason to use trees might be because you want to store information that naturally forms a hierarchy. For example, the file system on a computer.
 2. Trees (with some ordering e.g., BST) provide moderate access/search (quicker than Linked List and slower than arrays).
 3. Trees provide moderate insertion/deletion (quicker than Arrays and slower than Unordered Linked Lists).
 4. Like Linked Lists and unlike Arrays, Trees don’t have an upper limit on number of nodes as nodes are linked using pointers.

## Applications of Tree data structure
1.  Store hierarchical data, like folder structure, organization structure, XML/HTML data.
2.  [Binary Search Tree](http://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/)  is a tree that allows fast search, insert, delete on a sorted data. It also allows finding closest item
3.  [Heap](https://www.geeksforgeeks.org/heap-data-structure/)  is a tree data structure which is implemented using arrays and used to implement priority queues.
4.  [B-Tree](https://www.geeksforgeeks.org/b-tree-set-1-introduction-2/)  and [B+ Tree](https://www.geeksforgeeks.org/database-file-indexing-b-tree-introduction/)  : They are used to implement indexing in databases.
5.  [Syntax Tree](https://www.geeksforgeeks.org/compiler-design-syntax-directed-translation/): Used in Compilers.
6.  [K-D Tree:](https://www.geeksforgeeks.org/k-dimensional-tree/)  A space partitioning tree used to organize points in K dimensional space.
7.  [Trie](http://www.geeksforgeeks.org/trie-insert-and-search/)  : Used to implement dictionaries with prefix lookup.
8.  [Suffix Tree](https://www.geeksforgeeks.org/pattern-searching-set-8-suffix-tree-introduction/)  : For quick pattern searching in a fixed text.
9.  [Spanning Trees](https://www.geeksforgeeks.org/applications-of-minimum-spanning-tree/)  and shortest path trees are used in routers and bridges respectively in computer networks
10.  As a workflow for compositing digital images for visual effects.

## Types of Binary Tree
### Full Binary Tree
A full Binary tree is a special type of binary tree in which every parent node/internal node has either two or no children.

![enter image description here](https://cdn.programiz.com/sites/tutorial2program/files/full-binary-tree_0.png)

### Perfect Binary Tree
A perfect binary tree is a type of binary tree in which every internal node has exactly two child nodes and all the leaf nodes are at the same level.

![enter image description here](https://cdn.programiz.com/sites/tutorial2program/files/perfect-binary-tree_0.png)

### Complete Binary Tree
A complete binary tree is just like a full binary tree, but with two major differences

1.  Every level must be completely filled
2.  All the leaf elements must lean towards the left.
3.  The last leaf element might not have a right sibling i.e. a complete binary tree doesn't have to be a full binary tree.

![enter image description here](https://cdn.programiz.com/sites/tutorial2program/files/complete-binary-tree_0.png)

### Degenerate or Pathological Tree
A degenerate or pathological tree is the tree having a single child either left or right.

![enter image description here](https://cdn.programiz.com/sites/tutorial2program/files/degenerate-binary-tree_0.png)

### Skewed Binary Tree
A skewed binary tree is a pathological/degenerate tree in which the tree is either dominated by the left nodes or the right nodes. Thus, there are two types of skewed binary tree:  **left-skewed binary tree**  and  **right-skewed binary tree**.

![enter image description here](https://cdn.programiz.com/sites/tutorial2program/files/skewed-binary-tree_0.png)

### Balanced Binary Tree
It is a type of binary tree in which the difference between the height of the left and the right subtree for each node is either 0 or 1.

![enter image description here](https://cdn.programiz.com/sites/tutorial2program/files/height-balanced_1.png)

Here is the example of **unbalanced binary tree**

![enter image description here](https://cdn.programiz.com/sites/tutorial2program/files/unbalanced-binary-tree.png)

## Tree Traversals (Inorder, Preorder and Postorder)

Traversing a tree means visiting every node in the tree. You might, for instance, want to add all the values in the tree or find the largest one. For all these operations, you will need to visit each node of the tree.

Linear data structures like arrays,  [stacks](https://www.programiz.com/data-structures/stack),  [queues](https://www.programiz.com/data-structures/queue), and  [linked list](https://www.programiz.com/data-structures/linked-list)  have only one way to read the data. But a hierarchical data structure like a  **tree** can be traversed in different ways.

### Inorder traversal

1.  First, visit all the nodes in the left subtree
2.  Then the root node
3.  Visit all the nodes in the right subtree
```
inorder(root->left)
display(root->data)
inorder(root->right)
```
### Preorder traversal

1.  Visit root node
2.  Visit all the nodes in the left subtree
3.  Visit all the nodes in the right subtree
```
display(root->data)
preorder(root->left)
preorder(root->right)
```
### Postorder traversal

1.  Visit all the nodes in the left subtree
2.  Visit all the nodes in the right subtree
3.  Visit the root node

```
postorder(root->left)
postorder(root->right)
display(root->data)
```

## Implementation of Binary Tree
*Java language*
```java
// Node creation
class Node {
  int key;
  Node left, right;

  public Node(int item) {
  key = item;
  left = right = null;
  }
}

public class BinaryTree {
  Node root;

  BinaryTree(int key) {
  root = new Node(key);
  }

  BinaryTree() {
  root = null;
  }

  // Traverse Inorder
  public void traverseInOrder(Node node) {
  if (node != null) {
    traverseInOrder(node.left);
    System.out.print(" " + node.key);
    traverseInOrder(node.right);
  }
  }

  // Traverse Postorder
  public void traversePostOrder(Node node) {
  if (node != null) {
    traversePostOrder(node.left);
    traversePostOrder(node.right);
    System.out.print(" " + node.key);
  }
  }

  // Traverse Preorder
  public void traversePreOrder(Node node) {
  if (node != null) {
    System.out.print(" " + node.key);
    traversePreOrder(node.left);
    traversePreOrder(node.right);
  }
  }

  public static void main(String[] args) {
  BinaryTree tree = new BinaryTree();

  tree.root = new Node(1);
  tree.root.left = new Node(2);
  tree.root.right = new Node(3);
  tree.root.left.left = new Node(4);

  System.out.print("Pre order Traversal: ");
  tree.traversePreOrder(tree.root);
  System.out.print("\nIn order Traversal: ");
  tree.traverseInOrder(tree.root);
  System.out.print("\nPost order Traversal: ");
  tree.traversePostOrder(tree.root);
  }
}
```











