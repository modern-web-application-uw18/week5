import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Character from './Character';
import { BrowserRouter as Router, Route } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  const component = (
    <Router>
      <Route path="/character/2" component={Character} />
    </Router>
  );

  ReactDOM.render(component, div);
  ReactDOM.unmountComponentAtNode(div);
});
