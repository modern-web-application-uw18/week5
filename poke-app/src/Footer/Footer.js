import React, { Component } from 'react';

import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';

import Home from '../Home/Home.js';

export default class Footer extends Component {

    render() {
        return (
            <footer>
                <Route exact path='/' render={() => <Home url={this.props.next} />} />
            </footer>
        );
    }
}
