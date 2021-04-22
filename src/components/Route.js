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
            this.props.route === 'Stack' ? <Stack />
          : this.props.route === 'Array' ? <Array />
          : this.props.route === 'Queue' ? <Queue />
          : this.props.route === 'Binary Tree' ? <BinaryTree />
          : this.props.route === 'Hash Table' ? <HashTable />
          : this.props.route === 'Linked List' ? <LinkedList />
          : this.props.route === 'Heap' ? <Heap />
          : this.props.route === 'Graph' ? <Graph />
          : <Error />
        }
      </>
    )
  }
}

export default Route;