import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Details from './Details';

import { 
  BrowserRouter as Router, Route 
} from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  const component = (
    <Router>
      <Route path="/character/2" component={Details} />
    </Router>
  );

  ReactDOM.render(component, div);
  ReactDOM.unmountComponentAtNode(div);
});