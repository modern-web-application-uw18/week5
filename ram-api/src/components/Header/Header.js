import React, { Component } from 'react';
import './Header.css';
import NavigationItems from './NavigationItems/NavigationItems';



class Header extends Component {
    render() {
        return (
            <header className="Header">
                <span className="HeaderTitle">R&M API</span>
                <nav>
                    <NavigationItems />
                </nav>
            </header>
        )
    }
}

export default Header;
