import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import HomeTop from './HomeTop';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeTop />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const component = TestRenderer.create(<HomeTop />);
  expect(component.toJSON()).toMatchSnapshot();
});