import React, { Component } from 'react';
import './Header.css';
import NavigationItems from './NavigationItems/NavigationItems';



class Header extends Component {
    render() {
        return (
            <header className="Header">
                <h1 style={{color:"gray"}}>R&M API</h1>
                <nav>
                    <NavigationItems />
                </nav>
            </header>
        )
    }
}

export default Header;
