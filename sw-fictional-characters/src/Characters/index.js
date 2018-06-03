import React from 'react';
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import CharacterDetail from './CharacterDetail';
import Home from './Home';

import { 
    BrowserRouter as Router, Route, Link 
  } from 'react-router-dom';
  
const About = () => <p>This is a Star Wars Characters app.</p>
// const NoMatch = () => <p>404. Website not found.</p>

const Characters = () => {
    return (
        <div>
            <div className="sw-body">
            <Router>
                <div>
                    <nav>
                        <ul className="sw-navigation-bar">
                        <li> 
                            <Link to="/About">About</Link>
                        </li>
                        </ul>
                    </nav>
                    <h2>Star Wars Characters</h2>
                    
                    <Route exac path="/" component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/CharacterDetail/:characterId/" component={CharacterDetail} />
                </div>
                </Router>
            </div>
        </div>
    );
}

export default Characters;