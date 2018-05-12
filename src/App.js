import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { Layout1Container } from './modules/layout-1';
import { Layout2Container } from './modules/layout-2';
import './App.css';

const Home = () => (
  <div className="home">
    <ul>
      <li><Link to="/layout-1">About</Link></li>
      <li><Link to="/layout-2">Topics</Link></li>
    </ul>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="main-wrapper">
            <Route exact path="/" component={Home} />
            <Route path="/layout-1" component={Layout1Container}/>
            <Route path="/layout-2" component={Layout2Container}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
