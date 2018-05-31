import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card.js';
import { MemoryRouter as Router, Route } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const component = (
        <Router>
            <Route path='/card' component={Card} />
        </Router>
    )
    ReactDOM.render(component , div);
    ReactDOM.unmountComponentAtNode(div);
});