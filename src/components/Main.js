import Card from './CardPage';

const cardElements = [
  ['https://picsum.photos/200/100', 'Array', 'Array is a data structure used to store homogeneous elements at contiguous locations'],
  ['https://picsum.photos/200/100', 'Linked List', "A linked list is a linear data structure (like arrays) where each element is a separate object..."],
  ['https://picsum.photos/200/100', "Stack", "A stack or LIFO (last in, first out) is an abstract data type that serves as a collection of elements..."],
  ['https://picsum.photos/200/100', "Queue", "A queue or FIFO (first in, first out) is an abstract data type that serves as a collection of elements..."],
  ['https://picsum.photos/200/100', "Binary Tree", "A tree whose elements have at most 2 children is called a binary tree"],
  ['https://picsum.photos/200/100', "Graph", "Binary Search Tree is a node-based binary tree data structure"],
  ['https://picsum.photos/200/100', "Heap", "A Heap is a special Tree-based data structure in which the tree is a complete binary tree..."],
  ['https://picsum.photos/200/100', "Hash Table", "Hashing is a technique or process of mapping keys, values into the hash table by using a hash function"],
];

const btnType = [
  "outline-primary", "outline-secondary", "outline-success", "outline-warning",
  "outline-danger", "outline-info", "outline-dark"]

function Main({onRouteChange}) {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center', padding:'50px'}}>
        {CreateCard(onRouteChange)}
      </div>
    )
  }

function CreateCard(onRouteChange) {
  return cardElements.map((item, i) => {
    return <Card img={item[0]} title={item[1]} text={item[2]} button={btnType[i]} onRouteChange={onRouteChange} /> 
  })
}

export default Main;