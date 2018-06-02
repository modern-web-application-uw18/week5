import React from 'react';
import ReactDOM from 'react-dom';
// import TestRunderer from 'react-test-renderer';
import CharacterDetail from './CharacterDetail';
import {BrowserRouter as Router, Route} from 'react-router-dom';

describe('Characer-details', () => {
    it('Test to make sure component renders without crashing', () => {
        const div = document.createElement('div');

        const component = (
            <Router>
                <div>
                    <Route path="/CharacterDetail/4" component={CharacterDetail} />
                </div>
            </Router>
        );
        ReactDOM.render(<component />, div);

        ReactDOM.unmountComponentAtNode(div);
    });
});