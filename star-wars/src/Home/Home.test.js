import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
// import TestRenderer from 'react-test-renderer'

describe('characters', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})