import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import Characters from './Characters';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <div className="sidenav">
            <Link to="/">Home</Link>
            <br />
            <Link to="/characters">Characters</Link>
        </div>
        <div className="main">
           <Route exact path="/" component={Home}/>
           <Route path="/characters" component={Characters}/>
        </div>    
      </div>
      </Router>
    );
  }
}

export default App;
