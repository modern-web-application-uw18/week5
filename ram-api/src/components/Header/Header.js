import React, { Component } from 'react';
import './Header.css';
import SearchBox from './SearchBox/SearchBox';
import NavigationItems from './NavigationItems/NavigationItems';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';



class Header extends Component {
    render() {
        return (
            <header className="Header">

                { this.props.location.pathname === '/' ? <SearchBox searchHandler={this.props.searchHandler} /> : null }

                <span className="HeaderTitle">R&M Attack</span>



                <nav>
                    <NavigationItems />
                </nav>
            </header>
        )
    }
}

Header.propTypes = {
    searchHandler: PropTypes.func.isRequired
}

export default withRouter(Header);
