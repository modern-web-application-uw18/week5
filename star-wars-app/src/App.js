import React, { Component } from 'react';
import './App.css';
import logo from './Star-Wars-Logo-Silver.png';

import Home from './Home/Home';
import Chars from './Chars/Chars';

import {
  BrowserRouter as Router, Route, Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="Logo" />;
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/character/:id" component={Chars} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
