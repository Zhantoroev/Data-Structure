import { Table } from 'react-bootstrap';  
const Array = () => {
  return (
    <div className='contentPage'>
      <h1 className="mainTitle">Array</h1>
      <p>Array is a data structure used to store homogeneous elements at contiguous locations. Size of an array must be provided before storing data.</p>
    
      <h3>Creating</h3>
      <p>The type and the name are the two parts of an array declaration. Type specifies the array's element type. The data type of each element in the array is determined by the element type. We can generate a variety of data types, both primitive and non-primitive. As a result, the array's element type decides the type of data it may hold.</p>
      <div style={{width:'100%', background:'black', padding: '20px', margin:'30px', color:'white', fontWeight:"700"}}>
        <p>type arrayName[] <br/>
          or <br/>
          type[] arrayName;</p>
      </div>

      <h3>Instantiating</h3>
      <p>When an array is declared, only a reference of an array is created. To actually create or give memory to an array, you create an array like this: The general form of new as it applies to one-dimensional arrays appears as follows: 
        var-name = new type [size];
        Here, type specifies the type of data being allocated, size specifies the number of elements in the array, and var-name is the name of the array variable that is linked to the array. That is, to use new to allocate an array, you must specify the type and number of elements to allocate.</p>
        <div style={{width:'100%', background:'black', padding: '20px', margin:'30px', color:'white', fontWeight:"700"}}>
          <p>arrayName = new type [size];</p>
        </div>
      <p>Default array values in Java will automatically be initialized to zero (for numeric types), false (for boolean), or null (for reference types)</p>

      <h3>Accessing to elements</h3>
      <p>The index starts at 0 and goes all the way to (total array size)-1. Java for Loop allows you to access all of the elements of an array.</p>
      <div data-pym-src="https://www.jdoodle.com/iembed/v0/coB"></div>
    
      <h1 style={{margin: '40px 0'}}>Static and Dynamic Arrays</h1>
      <h3>Static Arrays</h3>
      <p>A static array is a fixed-length container containing n elements indexable from the range [0, n-1].</p>

      <h4>When and where is a static Array used?</h4>
      <ul>
        <li>Temporarily storing objects</li>
        <li>Used by IO routines as buffers</li>
        <li>Storing and accessing sequential data</li>
        <li>Lookup tables and inverse lookup tables</li>
        <li>Can be used to return multiple values from a function</li>
        <li>Used in dynamic programming to cache answers to subproblems</li>
      </ul>
      <p>Elements in Array are referenced by their index. There is no other way to access elements in an array. Array indexing is zero-based</p>

      <img src="https://raw.githubusercontent.com/Zhantoroev/Data-Structure/main/src/assets/staticArray.gif" alt='no'></img>

      <h3>Dynamic Arrays</h3>
      <p>The dynamic array can grow and shrink in size</p>
      <img src="https://raw.githubusercontent.com/Zhantoroev/Data-Structure/main/src/assets/dinamic.png" alt="dinamic" ></img>

      <h3 style={{marginTop:'50px', fontWeight:'700'}}>Time complexity</h3>

      <Table striped bordered hover style={{marginTop:'30px'}}>
        <thead>
          <tr>
            <th> </th>
            <th>Static Array</th>
            <th>Dynamic Array</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Access()</td>
            <td>O(1)</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Search()</td>
            <td>O(n)</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Insertion()</td>
            <td>N/A</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Appending()</td>
            <td>N/A</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Deletion()</td>
            <td>N/A</td>
            <td>O(n)</td>
          </tr>
        </tbody>
      </Table>

    </div>
  )
}

export default Array;
