import React from 'react';
import ReactDOM from 'react-dom';
import PokemonIndex from './PokemonIndex.js';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const component = (
        <Router>
            <Route exact path="/" component={PokemonIndex} />
        </Router>
    );
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should render a index page', () => {
    const div = document.createElement('div');
    const component = TestRenderer.create(
        <Router>
            <Route exact path="/" component={PokemonIndex} />
        </Router>
    );
    expect(component.toJSON()).toMatchSnapshot();
});