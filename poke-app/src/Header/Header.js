import React, { Component } from 'react';
import logo from './pokeball.png';

import './Header.css';

export default class Header extends Component {

    render() {
        return (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to my Pokedex</h1>
          </header>
        );
    }
}
