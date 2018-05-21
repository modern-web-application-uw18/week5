import React from 'react';
import ReactDOM from 'react-dom';
import Details from './Details';
import { Route, Link, MemoryRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={[ '/character/2' ]}>
      <Details />
    </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});