import React, { Component } from 'react';
import './App.css';

import Home from '../Home/Home.js';

import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';

export default class App extends Component {

  render() {
    // console.log(this.state.pokemonList);
    return (
        <div className="App">
          <Home />
        </div>
    );
  }
}
            // <div>
            // </div>
