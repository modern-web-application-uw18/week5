import React, { Component } from 'react';
import './App.css';
import logo from './star-wars-logo.png';

import Home from './Home/Home';
import Details from './Details/Details';

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
            <Route path="/character/:id" component={Details} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
