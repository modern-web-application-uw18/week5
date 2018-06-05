import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './css/App.css';

// API Components
import TheFilms from './components/Films';
import ThePeople from './components/People';

// Static JSON - was used for testing
import Character from './components/Character'
import people from './data/people.json';

// Load the People by Default
class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">a rebels menace with APIs and Routes</h1>
          {/* // App Navigation */}
          <nav>
           <Link to="/">home</Link> | <Link to="/films">Films</Link>
          </nav>
        </header>
        <div className="App-intro">
         
          {/* {this.state.loading ? <h1>loading...</h1> : false} */}

          {/* Route controll */}
          <Route exact path="/" render={ () => <ThePeople /> } />
          <Route path="/films" render={ () => <TheFilms /> } />
         
        </div>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
