import React, { Component } from 'react';
import './App.css';
import Main from './Main/Main';
import Details from './Details/Details';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/character/:id" component={Details} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
