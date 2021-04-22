import Table from 'react-bootstrap/Table'

function Heap() {
  return (
    <div className='contentPage'>
      <h1 className="mainTitle">Heap</h1>
      <p>A Heap is a special Tree-based data structure in which the tree is a complete binary tree. Heap is one maximally efficient implementation of an abstract data type called a <a href="https://en.wikipedia.org/wiki/Priority_queue" title="Priority queue">priority queue</a>. It is also called as <strong>a binary heap</strong>. </p>
      <p>Generally, Heaps can be of two types:</p>
      <ol>
        <li><strong>Max-Heap</strong>: In a Max-Heap the key present at the root node must be greatest among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.</li>
        <li><strong>Min-Heap</strong>: In a Min-Heap the key present at the root node must be minimum among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.</li>
      </ol>
      <p><img src="https://www.geeksforgeeks.org/wp-content/uploads/MinHeapAndMaxHeap.png" alt="heap" /></p>
      <h2 id="how-binary-heap-represented-">How Binary Heap represented?</h2>
      <p>A binary heap is typically represented as an array.</p>
      <ul>
        <li>The root element will be at Arr[0].</li>
        <li><p>Below table shows indexes of other nodes for the i'th  node, i.e., Arr[i]:</p>
          <pre><code>Arr[(i-<span className="hljs-number">1</span>)/<span className="hljs-number">2</span>] Returns the parent <span className="hljs-keyword">node</span>{"\n"}<span className="hljs-title">Arr</span>[(<span className="hljs-number">2</span>*i)+<span className="hljs-number">1</span>] Returns the left child <span className="hljs-keyword">node</span>{"\n"}<span className="hljs-title">Arr</span>[(<span className="hljs-number">2</span>*i)+<span className="hljs-number">2</span>] Returns the right child <span className="hljs-keyword">node</span><span className="hljs-title" />{"\n"}</code></pre><h2 id="applications-of-heaps">Applications of Heaps</h2>
          <ol>
            <li><a href="http://quiz.geeksforgeeks.org/heap-sort/">Heap Sort</a>: Heap Sort uses Binary Heap to sort an array in O(nLogn) time</li>
            <li>Priority Queue: Priority queues can be efficiently implemented using Binary Heap because it supports insert(), delete() and extractmax(), decreaseKey() operations in O(logn) time. Binomoial Heap and Fibonacci Heap are variations of Binary Heap. These variations perform union also efficiently.</li>
            <li>Graph Algorithms: The priority queues are especially used in Graph Algorithms like <a href="https://www.geeksforgeeks.org/greedy-algorithms-set-7-dijkstras-algorithm-for-adjacency-list-representation/">Dijkstra’s Shortest Path</a> and <a href="https://www.geeksforgeeks.org/greedy-algorithms-set-5-prims-minimum-spanning-tree-mst-2/">Prim’s Minimum Spanning Tree</a>.</li>
            <li>Many problems can be efficiently solved using Heaps.<br />a) <a href="https://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/">K’th Largest Element in an array</a>.<br />b) <a href="https://www.geeksforgeeks.org/nearly-sorted-algorithm/">Sort an almost sorted array/</a><br />c) <a href="https://www.geeksforgeeks.org/merge-k-sorted-arrays/">Merge K Sorted Arrays</a>.</li>
          </ol>
        </li>
      </ul>
      <h2 id="operations-on-min-heap">Operations on Min Heap</h2>
      <p><em>For Max Heap is similar, only vice versa</em></p>
      <ul>
        <li><p><strong>getMini()</strong>: It returns the root element of Min Heap. </p>
        </li>
        <li><p><strong>extractMin()</strong>: Removes the minimum element from MinHeap. </p>
        </li>
        <li><p><strong>decreaseKey()</strong>: Decreases value of key. If the decreases key value of a node is greater than the parent of the node, then we don’t need to do anything. Otherwise, we need to traverse up to fix the violated heap property.</p>
        </li>
        <li><p><strong>insert()</strong>: We add a new key at the end of the tree. IF new key is greater than its parent, then we don’t need to do anything. Otherwise, we need to traverse up to fix the violated heap property.</p>
        </li>
        <li><p><strong>delete()</strong>: We replace the key to be deleted with minum infinite by calling decreaseKey(). After decreaseKey(), the minus infinite value must reach root, so we call extractMin() to remove the key.</p>
        </li>
      </ul>
      <Table striped bordered hover style={{marginTop:'30px'}}>
        <thead>
          <tr>
            <th>operation</th>
            <th>Time Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>getMin()</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>extractMin()</td>
            <td>O(logn)</td>
          </tr>
          <tr>
            <td>decreaseKey()</td>
            <td>O(logn)</td>
          </tr>
          <tr>
            <td>insert()</td>
            <td>O(logn)</td>
          </tr>
          <tr>
            <td>delete()</td>
            <td>O(logn)</td>
          </tr>
        </tbody>
      </Table>
      <h2 id="implementation-of-min-heap">Implementation of Min Heap</h2>
      <div data-pym-src="https://www.jdoodle.com/embed/v0/3eqW"></div>
    </div>
  )
}

export default Heap;