import { Table } from 'react-bootstrap';

const Queue = () => {
  return (
    <div className='contentPage'>
      <h1 className="mainTitle">Queue</h1>
      <p>Queue is a linear data structure which follows a particular order in which the operations are performed. The order is <strong>F</strong>irst <strong>I</strong>n <strong>F</strong>irst <strong>O</strong>ut (FIFO). A good example of queue is any queue of consumers for a resource where the consumer that came first is served first.</p>
      <img src="https://raw.githubusercontent.com/Zhantoroev/Data-Structure/main/src/assets/queue1.png" alt="QueueImg" 
        style={{ width:'80%', margin:'30px'}} 
        /><br />
      <img src="https://raw.githubusercontent.com/Zhantoroev/Data-Structure/main/src/assets/queue2.png" alt="QueueImg" 
        style={{ marginBottom:'30px'}}  
        />
        
      <h2 id="working-of-queue">Working of Queue</h2>
      <p>Queue operations work as follows:</p>
      <ul>
        <li>two pointers  FRONT  and  REAR</li>
        <li>FRONT  track the first element of the queue</li>
        <li>REAR  track the last element of the queue</li>
        <li>initially, set value of  FRONT  and  REAR  to -1</li>
      </ul>
      <h2 id="basic-operations">Basic operations</h2>
      <ul>
        <li><strong>enqueue()</strong>:  Add an element to the end of the queue</li>
        <li><strong>dequeue()</strong>:  Remove an element from the front of the queue</li>
        <li><strong>isEmpty()</strong>: Check if the queue is empty</li>
        <li><strong>isFull()</strong>: Check if the queue is full</li>
        <li><strong>peek()</strong>: Get the value of the front of the queue without removing it</li>
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
            <td>enqueue()</td>
            <td>(1)</td>
          </tr>
          <tr>
            <td>dequeue()</td>
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
      </Table>
      
      <h2 id="applications-of-queue">Applications of Queue</h2>
      <p>Queue is used when things don’t have to be processed immediatly, but have to be processed in <strong>F</strong>irst <strong>I</strong>n<strong>F</strong>irst <strong>O</strong>ut order.</p>
      <ul>
        <li>CPU scheduling, Disk Scheduling</li>
        <li>When data is transferred asynchronously between two processes.The queue is used for synchronization. For example: IO Buffers, pipes, file IO, etc</li>
        <li>Handling of interrupts in real-time systems.</li>
        <li>Call Center phone systems use Queues to hold people calling them in order.</li>
      </ul>
      <h2 id="implementation-of-queue">Implementation of queue</h2>
      <h4 id="implementation-with-array" style={{marginTop:'20px'}}>Implementation with Array</h4>
      
      <div data-pym-src="https://www.jdoodle.com/embed/v0/3e5p"></div>
            
      <p><strong>Pros of Array Implementation:</strong></p>
      <ul>
        <li>Easy to implement.</li>
      </ul>
      <p><strong>Cons of Array Implementation:</strong></p>
      <ul>
        <li>Static Data Structure, fixed size.</li>
        <li>If the queue has a large number of enqueue and dequeue operations, at some point we may not we able to insert elements in the queue even if the queue is empty (this problem is avoided by using circular queue).</li>
      </ul>
      
      <h4 id="implementation-with-array" style={{marginTop:'20px'}}>Implementation with Linked List</h4>
      <div data-pym-src="https://www.jdoodle.com/embed/v0/3e5R"></div>

    </div>
  )
}

export default Queue;