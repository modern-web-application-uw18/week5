import React, { Component } from 'react';
import logo from './logo.svg';

import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';

export default class Header extends Component {

    render() {
        return (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to my Pokedex</h1>
            <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/feature2">Feature 2</Link>
              </li>
              <li>
                <Link to="/feature3">Feature 3</Link>
              </li>
            </ul>
            </div>
          </header>
        );
    }
}
