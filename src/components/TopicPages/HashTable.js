function HashTable() {
  return (
    <div style={{width: '700px', margin:'50px auto'}}>
      <h1 style={{fontWeight: '700', margin:'20px 0 40px 0'}}>Hash Table</h1>
      <p>A <strong>Hash Table</strong> is a data structure that stores values which have keys associated with each of them. Furthermore, it supports lookup efficiently if we know the key associated with the value (It is very fast in serching the data). Hence it is very efficient in inserting and searching, irrespective of the size of the data.</p>
      <p>The Hash table data structure stores elements in key-value pairs where</p>
      <ul>
        <li><strong>Key</strong>- unique integer that is used for indexing the values</li>
        <li><strong>Value</strong>  - data that are associated with keys.</li>
      </ul>
      <p style={{width:'50%', margin:'0 auto'}}><img src="https://cdn.programiz.com/sites/tutorial2program/files/Hash-0.png" alt='hash table' /></p>
      <h2 id="hashing-hash-function-">Hashing (Hash Function)</h2>
      <p>Hashing is a technique to convert a range of key values into a range of indexes of an array.
        In a hash table, a new index is processed using the keys. And, the element corresponding to that key is stored in the index. This process is called  <strong>hashing</strong>.</p>
      <p>Let  <em>k</em>  be a key and  <em>h(x)</em>  be a hash function.</p>
      <p>Here,  <em>h(k)</em>  will give us a new index to store the element linked with  <em>k</em>.</p>
      <p style={{width:'50%', margin:'0 auto'}}><img src="https://cdn.programiz.com/sites/tutorial2program/files/Hash-2_0.png" alt='hash table' /></p>
      <h2 id="hash-collision">Hash Collision</h2>
      <p>When the hash function generates the same index for multiple keys, there will be a conflict (what value to be stored in that index). This is called a <strong>hash collision.</strong></p>
      <p>We can resolve the hash collision using one of the following techniques.</p>
      <ul>
        <li>Collision resolution by chaining</li>
        <li>Open Addressing: Linear/Quadratic Probing and Double Hashing</li>
      </ul>
      <h3 id="collision-resolution-by-chaining">Collision resolution by chaining</h3>
      <p>In chaining, if a hash function produces the same index for multiple elements, these elements are stored in the same index by using a doubly-linked list.</p>
      <p>If  <code>j</code>  is the slot for multiple elements, it contains a pointer to the head of the list of elements. If no element is present,  <code>j</code>  contains  <code>NIL</code>.
        <p style={{width:'80%', margin:'0 auto'}}><img src="https://cdn.programiz.com/sites/tutorial2program/files/Hash-3_1.png" alt='hash table' /></p>
        <strong>Pseudocode for operations</strong></p>
      <pre><code><span className="hljs-function"><span className="hljs-title">chainedHashSearch</span><span className="hljs-params">(T, k)</span></span>{"\n"}{"  "}return T[h(k)]{"\n"}<span className="hljs-function"><span className="hljs-title">chainedHashInsert</span><span className="hljs-params">(T, x)</span></span>{"\n"}{"  "}T[h(x.key)] = x <span className="hljs-comment">//insert at the head</span>{"\n"}<span className="hljs-function"><span className="hljs-title">chainedHashDelete</span><span className="hljs-params">(T, x)</span></span>{"\n"}{"  "}T[h(x.key)] = NIL{"\n"}</code></pre><h2 id="basic-operations">Basic Operations</h2>
      <ul>
        <li><p><strong>search()</strong>  − Searches an element in a hash table.</p>
        </li>
        <li><p><strong>insert()</strong>  − inserts an element in a hash table.</p>
        </li>
        <li><p><strong>delete()</strong>  − Deletes an element from a hash table.</p>
        </li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>Operation</th>
            <th>Time Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>search()</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>insert()</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>delete()</td>
            <td>O(1)</td>
          </tr>
        </tbody>
      </table>
      <h2 id="applications-of-hash-table">Applications of Hash Table</h2>
      <p>Hash tables are implemented where</p>
      <ul>
        <li>constant time lookup and insertion is required</li>
        <li>cryptographic applications</li>
        <li>indexing data is required</li>
      </ul>
      <h2 id="implementation">Implementation</h2>
      <p><strong>Implementation of Hash Table in Java (Chaining example)</strong></p>
    </div>

  )
}

export default HashTable;