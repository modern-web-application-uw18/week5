import React, { Component } from 'react';
import './App.css';
import HomeTop from './HomeTop/HomeTop';
import Character from './Character/Character';
import star from './star.svg';
import wars from './wars.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="starwars-demo">
        <img src={star} alt="Star" className="star"></img>
        <img src={wars} alt="Wars" className="wars"></img>
        <h2 className="byline" id="byline">Characters</h2>      
      </div>      
        <Router>
          <div>
            <Route exact path="/" component={HomeTop} />
            <Route path="/character/:id" component={Character} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
