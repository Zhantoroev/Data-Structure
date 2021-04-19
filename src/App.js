import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import About from './components/About';

class App extends Component{
  constructor() {
    super();
    this.state = {
      route: "home"
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange}/>
        {this.state.route === 'all'
          ? <Main onRouteChange={this.onRouteChange}/>
            : this.state.route === 'home'
            ? <h1>Home</h1> 
              : this.state.route === 'about'
              ? <About />
              : <h1>Hello</h1>
        }
      </div>
    );
  }
}

export default App;
