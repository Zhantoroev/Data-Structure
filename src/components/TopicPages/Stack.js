
const Stack = () => {
  return (
    <div style={{width: '700px', margin:'50px auto'}}>
  <h2 id="data-structure">Data-Structure</h2>
  <h1 id="stack">Stack</h1>
  <p>Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).
    If we make an analogy with real life, Stack is similar to plates stacked over one another in the kitchen. The plate which is at the top is the first one to be removed, the plate which has been placed at the bottommost position remains in the stack for the longest period of time.</p>
  <img src="https://cdn.programiz.com/sites/tutorial2program/files/stack.png" alt="StackImg" 
    style={{border : "1px solid black", height:'400px', width:'100%', marginBottom:'30px'}} />

  <h2 id="basic-operations">Basic Operations</h2>
  <table>
    <thead>
      <tr>  
        <th>Operations     </th>
        <th>Time Complexity</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>push()</td>
        <td>O(1)</td>
      </tr>
      <tr>
        <td>pop()</td>
        <td>O(1)</td>
      </tr>
      <tr>
        <td>isEmpty()</td>
        <td>O(1)</td>
      </tr>
      <tr>
        <td>peek()</td>
        <td>O(1)</td>
      </tr>
    </tbody>
  </table>
  <ul>
    <li><strong>push() :</strong>   Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.</li>
    <li><strong>pop() :</strong>   Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.</li>
    <li><strong>peek() :</strong>   Returns top element of stack.</li>
    <li><p><strong>isEmpty() :</strong>  Returns true if stack is empty, else false.</p>
      <p><strong>Time Complexities of operations on stack:</strong></p>
    </li>
  </ul>
  <p><em>push()</em>, <em>pop()</em>, <em>isEmpty() and peek()</em> all take <strong>O(1)</strong> time. We do not run any loop in any of these operations.</p>
  <h2 id="aplication-of-stack">Aplication of Stack</h2>
  <ul>
    <li><a href="https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/">Balancing of symbols</a></li>
    <li>Infix to Postfix/Prefix conversion</li>
    <li>Redo-undo features at many places like editors, photoshop</li>
    <li>Forward and backward feature in web browsers</li>
    <li>Used in many algorithms like  <a href="https://www.geeksforgeeks.org/recursive-functions/">Tower of Hanoi,</a> <a href="https://www.geeksforgeeks.org/618/">tree traversals</a>,  <a href="https://www.geeksforgeeks.org/the-stock-span-problem/">stock span problem</a>,  <a href="https://www.geeksforgeeks.org/largest-rectangular-area-in-a-histogram-set-1/">histogram problem</a>.</li>
    <li><strong>Stack data structure</strong> used in backtracking problems.</li>
  </ul>
  <h2 id="implementation">Implementation</h2>
  <p>There are two ways to implement a stack:</p>
  <ul>
    <li>Using array</li>
    <li>Using linked list</li>
  </ul>

  <h3 id="implementing-stack-using-array">Implementing Stack using Array</h3>
  <div data-pym-src="https://www.jdoodle.com/embed/v0/3e2P"></div>
  <p style={{marginBottom:'40px'}}>
    <strong>Pros:</strong> Easy to implement. Memory is saved as pointers are not involved.<br />
    <strong>Cons:</strong> It is not dynamic. It doesn’t grow and shrink depending on needs at runtime.
  </p>

  <h3>Implementing Stack using Linked List:</h3>
  <div data-pym-src="https://www.jdoodle.com/embed/v0/3e4z"></div>
  <p>
    <strong>Pros:</strong> The linked list implementation of stack can grow and shrink according to the needs at runtime.<br />
    <strong>Cons:</strong> Requires extra memory due to involvement of pointers.
  </p>

</div>
  )
}

export default Stack;