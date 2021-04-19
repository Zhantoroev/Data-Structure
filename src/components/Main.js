import Card from './CardPage';

const obj = [
  ['https://picsum.photos/200/150', 'Array', 'Array is a data structure used to store homogeneous elements at contiguous locations'],
  ['https://picsum.photos/200/150', 'Linked List', "A linked list is a linear data structure (like arrays) where each element is a separate object..."],
  ['https://picsum.photos/200/150', "Stack", "A stack or LIFO (last in, first out) is an abstract data type that serves as a collection of elements..."],
  ['https://picsum.photos/200/150', "Queue", "A queue or FIFO (first in, first out) is an abstract data type that serves as a collection of elements..."]

];

const btnType = [
  "outline-primary", "outline-secondary", "outline-success", "outline-warning",
  "outline-danger", "outline-info", "outline-dark"]

function Main({onRouteChange}) {
    return obj.map((item, i) => {
      return <Card img={item[0]} title={item[1]} text={item[2]} button={btnType[i]}onRouteChange={onRouteChange}/> 
    })
}

export default Main;