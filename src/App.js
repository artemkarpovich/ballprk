import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { PrepSchoolContainer } from './modules/prep-school';
import { Layout2Container } from './modules/layout-2';
import './App.css';

const Home = () => (
  <div className="home">
    <ul className="home__nav-links">
      <li><Link to="/prep-school">prep-school</Link></li>
      <li><Link to="/layout-2">coming soon</Link></li>
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
            <Route path="/prep-school" component={PrepSchoolContainer}/>
            <Route path="/layout-2" component={Layout2Container}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
