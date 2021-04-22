import { Component } from 'react';
import { Button} from 'react-bootstrap';
import Stack from './TopicPages/Stack';
import Array from './TopicPages/Array';
import Queue from './TopicPages/Queue';
import BinaryTree from './TopicPages/BinaryTree';
import HashTable from './TopicPages/HashTable';
import LinkedList from './TopicPages/LinkedList';
import Heap from './TopicPages/Heap';
import Graph from './TopicPages/Graph';
import Error from './TopicPages/Error';

class Route extends Component {
  constructor(props) {
    super();
    this.state = {
      route: "home"
    }
  }

  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <>
      <div style={{position:'sticky', top:'50px'}}>
        <Button variant="secondary" style={{position:'absolute', margin:'50px',color: 'white', zIndex:'2'}}
          onClick={()=>this.props.onRouteChange('all')}
          >🡸Back</Button>
      </div>
        {
            this.props.route === 'Stack' || this.props.route === 'stack' ? <Stack />
          : this.props.route === 'Array' || this.props.route === 'array' ? <Array />
          : this.props.route === 'Queue' || this.props.route === 'queue' ? <Queue />
          : this.props.route === 'Binary Tree' || this.props.route === 'binary tree' ? <BinaryTree />
          : this.props.route === 'Hash Table' || this.props.route === 'hash table' ? <HashTable />
          : this.props.route === 'Linked List' || this.props.route === 'linked list' ? <LinkedList />
          : this.props.route === 'Heap' || this.props.route === 'heap' ? <Heap />
          : this.props.route === 'Graph' || this.props.route === 'graph' ? <Graph />
          : <Error />
        }
      </>
    )
  }
}

export default Route;