import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {

  render() {
    return (
      <header className='site-header'>
        <Link to="/">Characters</Link>
        <Link to="/films">Films</Link>
      </header>
    );
  }
}

export default Header;
