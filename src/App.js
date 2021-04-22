import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import AllCards from './components/AllCards';
import About from './components/About'
import Home from './components/Home'
import Route from './components/Route'
import './App.css';

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
    const route = this.state.route
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange}/>
        {
          route === 'all' ? <AllCards onRouteChange={this.onRouteChange} route={route}/>
            : route === 'home' ? <Home /> 
            : this.state.route === 'about' ? <About />
            : <Route route={route} onRouteChange={this.onRouteChange}/>
        }
      </div>
    );
  }
}

export default App;