import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/section.css';
import '../css/App.css';
import { Link } from 'react-router';
class App extends Component {
  render() {
    return (
      <div >
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My React practice collection</h2>
        </div>
        <div className="container">
            <ul>
              <li><Link to="/filtertable">Filter table</Link></li>
              <br/>
              <li><Link to="/todo">To-do list</Link></li>
              <br/>
              <li><Link to="/github-finder">Github finder</Link></li>
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
