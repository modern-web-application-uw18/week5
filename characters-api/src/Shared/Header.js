import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  './shared.css';

class Header extends Component {
    render() {  
        return (
            <div className = 'header'>
            <h1> <Link to="/">Rick and Morty Character Almanac</Link> </h1>
            </div>
        )
    }
}        

export default Header;