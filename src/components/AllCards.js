import Card from './CardPage';

const cardElements = [
  ['https://i.ytimg.com/vi/d3CeUYe7DHU/maxresdefault.jpg', 'Array', 'An array stores a fixed-size sequential collection of elements of the same type'],
  ['https://miro.medium.com/max/527/1*pYLk9Y4iKP0kjmlfVaIbPA.png', 'Linked List', "In a linked list is a linear data structure, elements are not stored at contiguous memory"],
  ['https://holycoders.com/content/images/2020/06/Stack.png', "Stack", "A stack or LIFO (last in, first out) is an abstract data type that serves as a collection of"],
  ['https://miro.medium.com/max/2110/0*-DqxfgZhXwZ6w208.png', "Queue", "A queue or FIFO (first in, first out) is an abstract data type that serves as a collection of"],
  ['https://media.geeksforgeeks.org/wp-content/cdn-uploads/binary-tree-to-DLL.png', "Binary Tree", "A tree whose elements have at most 2 children is called a binary tree"],
  ['https://algorist.com/images/figures/graph-data-structures-L.png', "Graph", "A Graph is a non-linear data structure consisting of nodes and edges"],
  ['https://raw.githubusercontent.com/Zhantoroev/Data-Structure/main/src/assets/heaps.png', "Heap", "A Heap is a special Tree-based data structure in which the tree is a complete binary tree"],
  ['https://www.algolist.net/img/hash-table-chaining.png', "Hash Table", "Hash Table is a data structure which stores data in an associative manner"],
];

const btnType = [
  "outline-primary", "outline-secondary", "outline-success", "outline-warning",
  "outline-danger", "outline-info", "outline-light", "outline-dark"]

function AllCards({onRouteChange}) {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center', padding:'70px'}}>
        {CreateCard(onRouteChange)}
      </div>
    )
  }

function CreateCard(onRouteChange) {
  return cardElements.map((item, i) => {
    return <Card key={i} img={item[0]} title={item[1]} text={item[2]} button={btnType[i]} onRouteChange={onRouteChange} /> 
  })
}

export default AllCards;