import { Component } from 'react';
import { Button} from 'react-bootstrap';
import Stack from './TopicPages/Stack';
import Array from './TopicPages/Array';
import Queue from './TopicPages/Queue';
import BinaryTree from './TopicPages/BinaryTree';
import HashTable from './TopicPages/HashTable';
import LinkedList from './TopicPages/LinkedList';

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
      <Button variant="light" style={{position:'absolute', margin:'50px'}}
        onClick={()=>this.props.onRouteChange('all')}
        >Back</Button>
        {
          this.props.route === 'a' ? <h1>hello</h1>
          : this.props.route === 'Stack' ? <Stack />
          : this.props.route === 'Array' ? <Array />
          : this.props.route === 'Queue' ? <Queue />
          : this.props.route === 'Binary Tree' ? <BinaryTree />
          : this.props.route === 'Hash Table' ? <HashTable />
          : this.props.route === 'Linked List' ? <LinkedList />
          : <h1>404</h1>
        }
      </>
    )
  }
}

export default Route;