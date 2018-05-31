import React from 'react';
import ReactDOM from 'react-dom';
import People from './people.js';
import { MemoryRouter as Router, Route } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const component = (
        <Router>
            <Route path='/people' component={People} />
        </Router>
    )
    ReactDOM.render(component , div);
    ReactDOM.unmountComponentAtNode(div);
});
