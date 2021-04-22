import { Table } from 'react-bootstrap';
function LinkedList() {
  return (
    <div className='contentPage'>
      <h1 className="mainTitle">Linked List</h1>
      <p>A linked list data structure includes a series of connected nodes. Each node store the data and the address of the next node.
        <img src="https://cdn.programiz.com/sites/tutorial2program/files/linked-list-concept.png" alt='linkedList' />
        The first <strong>node</strong> has a special name called <strong>HEAD</strong>. Also, the last node in the linked list can be identified because its next portion points to <strong>NULL</strong>.</p>
      <h2 id="basic-operations">Basic Operations</h2>
      <ul>
        <li><strong>traverse()</strong>: To traverse all the nodes one after another.</li>
        <li><strong>insert()</strong>: To add a node at the given position.</li>
        <li><strong>delete()</strong>: To delete a node.</li>
        <li><strong>search()</strong>: To search an element(s) by value.</li>
        <li><strong>update()</strong>: To update a node.</li>
      </ul>
      <Table striped bordered hover style={{marginTop:'50px'}}>
        <thead>
          <tr>
            <th>Operation</th>
            <th>Time Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>traverse()</td>
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
          <tr>
            <td>search()</td>
            <td>O(n)</td>
          </tr>
        </tbody>
      </Table>
      
      <h2 id="types-of-linked-list">Types of Linked List</h2>
      <ol>
        <li>Singly Linked List.</li>
        <li>Doubly Linked List.</li>
        <li>Circular Linked List.</li>
      </ol>
      <h3 id="-1-singly-linked-list-"><strong>1. Singly Linked List</strong></h3>
      <p>A Singly-linked list is a collection of nodes linked together in a sequential way where each node of the singly linked list contains a data field and an address field that contains the reference of the next node.</p>
      <p><img src="https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/types-of-linked-list-and-operation-on-linked-list-node-e40659e7622d3c64.png" alt='linkedList' /></p>
      <h3 id="-2-doubly-linked-list-"><strong>2. Doubly Linked List</strong></h3>
      <p>A Doubly Linked List contains an extra memory to store the address of the previous node, together with the address of the next node and data which are there in the singly linked list. So, here we are storing the address of the next as well as the previous nodes.
        <img src="https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/types-of-linked-list-and-operation-on-linked-list-dll-node-353bd14e2cddd08e.png" alt='linkedList' /></p>
      <p>The nodes are connected to each other in this form where the first node has <strong>prev = NULL</strong> and the last node has <strong>next = NULL</strong>.</p>
      <p><img src="https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/types-of-linked-list-and-operation-on-linked-list-dll-0aef50d611177434.png" alt='linkedList' /></p>
      <h3 id="-3-circular-linked-list-"><strong>3. Circular Linked List</strong></h3>
      <p>A circular linked list is either a singly or doubly linked list in which there are no  <strong><em>NULL</em></strong>  values. Here, we can implement the Circular Linked List by making the use of Singly or Doubly Linked List. In the case of a singly linked list, the next of the last node contains the address of the first node and in case of a doubly-linked list, the next of last node contains the address of the first node and prev of the first node contains the address of the last node.</p>
      <p><img src="https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/types-of-linked-list-and-operation-on-linked-list-circular-ll-172222dd1417c829.png" alt='linkedList' /></p>
      <h2 id="aplication-of-linked-lists">Aplication of Linked Lists</h2>
      <p><strong>Applications of linked list in computer science</strong>  –</p>
      <ol>
        <li>Implementation of  <a href="https://www.geeksforgeeks.org/stack-data-structure/">stacks</a>  and  <a href="https://www.geeksforgeeks.org/queue-data-structure/">queues</a></li>
        <li>Implementation of graphs :  <a href="https://www.geeksforgeeks.org/graph-and-its-representations/">Adjacency list representation of graphs</a>  is most popular which is uses linked list to store adjacent vertices.</li>
        <li>Dynamic memory allocation : We use linked list of free blocks.</li>
        <li>Maintaining directory of names</li>
      </ol>
      <p><strong>Applications of linked list in real-world-</strong></p>
      <ol>
        <li><em>Image viewer</em>  – Previous and next images are linked, hence can be accessed by the next and previous button.</li>
        <li><em>Previous and next page in web browser</em>  – We can access the previous and next URL searched in a web browser by pressing back and next button since, they are linked as a linked list.</li>
        <li><em>Music Player</em>  – Songs in the music player are linked to the previous and next song. you can play songs either from starting or ending of the list.</li>
      </ol>
      <h2 id="implementation-of-linked-list">Implementation of Linked List</h2>
      <div data-pym-src="https://www.jdoodle.com/embed/v0/3en5"></div>
    </div>

  )
}

export default LinkedList;