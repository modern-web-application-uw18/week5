import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Home from './Home';
import Characters from './Characters';
import CharacterDetail from './CharacterDetail';
import './Characters/Character.css';
// import { 
//   BrowserRouter as Router, Route, Link 
// } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Week5 Assignment</h1>
        </header>

        {/* <Router>
          <div>
            <Route exac path="/" component={Home} />
          </div>
        </Router> */}
        <Characters />
      </div>
    );
  }
}

export default App;
