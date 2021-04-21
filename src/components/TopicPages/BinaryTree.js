const BinaryTree = () => {
  return (
    <div style={{width: '700px', margin:'50px auto'}}>
      <h1 style={{fontWeight: '700', margin:'20px 0 40px 0'}}>Binary Tree</h1>
      <p><strong>Trees:</strong> Unlike Arrays, Linked Lists, Stack and queues, which are linear data structures, trees are hierarchical data structures.
        <strong>Binary Tree:</strong> A tree whose elements have at most 2 children is called a binary tree. Since each element in a binary tree can have only 2 children, we typically name them the left and right child.</p>
      <p style={{width:'50%', margin:'0 auto'}}><img src="https://cdn.programiz.com/sites/tutorial2program/files/binary-tree_0.png" alt='tree img'/></p>
      <h2 id="why-do-we-need-trees-">Why do we need trees?</h2>
      <ol>
        <li>One reason to use trees might be because you want to store information that naturally forms a hierarchy. For example, the file system on a computer.</li>
        <li>Trees (with some ordering e.g., BST) provide moderate access/search (quicker than Linked List and slower than arrays).</li>
        <li>Trees provide moderate insertion/deletion (quicker than Arrays and slower than Unordered Linked Lists).</li>
        <li>Like Linked Lists and unlike Arrays, Trees don’t have an upper limit on number of nodes as nodes are linked using pointers.</li>
      </ol>
      <h2 id="applications-of-tree-data-structure">Applications of Tree data structure</h2>
      <ol>
        <li>Store hierarchical data, like folder structure, organization structure, XML/HTML data.</li>
        <li><a href="http://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/">Binary Search Tree</a>  is a tree that allows fast search, insert, delete on a sorted data. It also allows finding closest item</li>
        <li><a href="https://www.geeksforgeeks.org/heap-data-structure/">Heap</a>  is a tree data structure which is implemented using arrays and used to implement priority queues.</li>
        <li><a href="https://www.geeksforgeeks.org/b-tree-set-1-introduction-2/">B-Tree</a>  and <a href="https://www.geeksforgeeks.org/database-file-indexing-b-tree-introduction/">B+ Tree</a>  : They are used to implement indexing in databases.</li>
        <li><a href="https://www.geeksforgeeks.org/compiler-design-syntax-directed-translation/">Syntax Tree</a>: Used in Compilers.</li>
        <li><a href="https://www.geeksforgeeks.org/k-dimensional-tree/">K-D Tree:</a>  A space partitioning tree used to organize points in K dimensional space.</li>
        <li><a href="http://www.geeksforgeeks.org/trie-insert-and-search/">Trie</a>  : Used to implement dictionaries with prefix lookup.</li>
        <li><a href="https://www.geeksforgeeks.org/pattern-searching-set-8-suffix-tree-introduction/">Suffix Tree</a>  : For quick pattern searching in a fixed text.</li>
        <li><a href="https://www.geeksforgeeks.org/applications-of-minimum-spanning-tree/">Spanning Trees</a>  and shortest path trees are used in routers and bridges respectively in computer networks</li>
        <li>As a workflow for compositing digital images for visual effects.</li>
      </ol>
      <h2 id="types-of-binary-tree" style={{fontWeight: "700"}}>Types of Binary Tree</h2>
      <h3 id="full-binary-tree">Full Binary Tree</h3>
      <p>A full Binary tree is a special type of binary tree in which every parent node/internal node has either two or no children.</p>
      <p style={{width:'50%', margin:'0 auto'}}><img src="https://cdn.programiz.com/sites/tutorial2program/files/full-binary-tree_0.png" alt='tree img'/></p>
      <h3 id="perfect-binary-tree">Perfect Binary Tree</h3>
      <p>A perfect binary tree is a type of binary tree in which every internal node has exactly two child nodes and all the leaf nodes are at the same level.</p>
      <p style={{width:'50%', margin:'0 auto'}}><img src="https://cdn.programiz.com/sites/tutorial2program/files/perfect-binary-tree_0.png" alt='tree img'/></p>
      <h3 id="complete-binary-tree">Complete Binary Tree</h3>
      <p>A complete binary tree is just like a full binary tree, but with two major differences</p>
      <ol>
        <li>Every level must be completely filled</li>
        <li>All the leaf elements must lean towards the left.</li>
        <li>The last leaf element might not have a right sibling i.e. a complete binary tree doesn't have to be a full binary tree.</li>
      </ol>
      <p style={{width:'50%', margin:'0 auto'}}><img src="https://cdn.programiz.com/sites/tutorial2program/files/complete-binary-tree_0.png" alt='tree img'/></p>
      <h3 id="degenerate-or-pathological-tree">Degenerate or Pathological Tree</h3>
      <p>A degenerate or pathological tree is the tree having a single child either left or right.</p>
      <p style={{width:'50%', margin:'0 auto'}}><img src="https://cdn.programiz.com/sites/tutorial2program/files/degenerate-binary-tree_0.png" alt='tree img'/></p>
      <h3 id="skewed-binary-tree">Skewed Binary Tree</h3>
      <p>A skewed binary tree is a pathological/degenerate tree in which the tree is either dominated by the left nodes or the right nodes. Thus, there are two types of skewed binary tree:  <strong>left-skewed binary tree</strong>  and  <strong>right-skewed binary tree</strong>.</p>
      <p style={{width:'50%', margin:'0 auto'}}><img src="https://cdn.programiz.com/sites/tutorial2program/files/skewed-binary-tree_0.png" alt='tree img'/></p>
      <h3 id="balanced-binary-tree">Balanced Binary Tree</h3>
      <p>It is a type of binary tree in which the difference between the height of the left and the right subtree for each node is either 0 or 1.</p>
      <p style={{width:'50%', margin:'0 auto'}}><img src="https://cdn.programiz.com/sites/tutorial2program/files/height-balanced_1.png" alt='tree img'/></p>
      <h4 id="here-is-the-example-of-unbalanced-binary-tree-">Here is the example of <strong>unbalanced binary tree</strong></h4>
      <p style={{width:'50%', margin:'0 auto'}}><img src="https://cdn.programiz.com/sites/tutorial2program/files/unbalanced-binary-tree.png" alt='tree img'/></p>
      <h2 id="tree-traversals-inorder-preorder-and-postorder-">Tree Traversals (Inorder, Preorder and Postorder)</h2>
      <p>Traversing a tree means visiting every node in the tree. You might, for instance, want to add all the values in the tree or find the largest one. For all these operations, you will need to visit each node of the tree.</p>
      <p>Linear data structures like arrays,  <a href="https://www.programiz.com/data-structures/stack">stacks</a>,  <a href="https://www.programiz.com/data-structures/queue">queues</a>, and  <a href="https://www.programiz.com/data-structures/linked-list">linked list</a>  have only one way to read the data. But a hierarchical data structure like a  <strong>tree</strong> can be traversed in different ways.</p>
      <h3 id="inorder-traversal">Inorder traversal</h3>
      <ol>
        <li>First, visit all the nodes in the left subtree</li>
        <li>Then the root node</li>
        <li><p>Visit all the nodes in the right subtree</p>
          <pre><code><span className="hljs-function"><span className="hljs-title">inorder</span><span className="hljs-params">(root-&gt;left)</span></span>{"\n"}<span className="hljs-function"><span className="hljs-title">display</span><span className="hljs-params">(root-&gt;data)</span></span>{"\n"}<span className="hljs-function"><span className="hljs-title">inorder</span><span className="hljs-params">(root-&gt;right)</span></span>{"\n"}</code></pre><h3 id="preorder-traversal">Preorder traversal</h3>
        </li>
        <li><p>Visit root node</p>
        </li>
        <li>Visit all the nodes in the left subtree</li>
        <li><p>Visit all the nodes in the right subtree</p>
          <pre><code><span className="hljs-function"><span className="hljs-title">display</span><span className="hljs-params">(root-&gt;data)</span></span>{"\n"}<span className="hljs-function"><span className="hljs-title">preorder</span><span className="hljs-params">(root-&gt;left)</span></span>{"\n"}<span className="hljs-function"><span className="hljs-title">preorder</span><span className="hljs-params">(root-&gt;right)</span></span>{"\n"}</code></pre><h3 id="postorder-traversal">Postorder traversal</h3>
        </li>
        <li><p>Visit all the nodes in the left subtree</p>
        </li>
        <li>Visit all the nodes in the right subtree</li>
        <li>Visit the root node</li>
      </ol><br />
      <pre><code><span className="hljs-function"><span className="hljs-title">postorder</span><span className="hljs-params">(root-&gt;left)</span></span>{"\n"}<span className="hljs-function"><span className="hljs-title">postorder</span><span className="hljs-params">(root-&gt;right)</span></span>{"\n"}<span className="hljs-function"><span className="hljs-title">display</span><span className="hljs-params">(root-&gt;data)</span></span>{"\n"}</code></pre><h2 id="implementation-of-binary-tree">Implementation of Binary Tree</h2>
      <div data-pym-src="https://www.jdoodle.com/embed/v0/3ei0"></div>
    </div>

  )
}

export default BinaryTree;