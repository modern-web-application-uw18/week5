import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import { MemoryRouter as Router, Route } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const component = (
        <Router>
            <Route path='/' component={Header} />
        </Router>
    )
    ReactDOM.render(component , div);
    ReactDOM.unmountComponentAtNode(div);
});