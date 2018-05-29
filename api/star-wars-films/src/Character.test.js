import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Character />, div);
  ReactDOM.unmountComponentAtNode(div);
});


//page 1 gets characters that link to the character detail page

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://localhost:3000/characterdetail/Luke%20Skywalker">Luke Skywalker</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
    const tree = renderer
      .create(<Link page="http://localhost:3000/characterdetail/Obi-Wan%20Kenobi">Obi-Wan Kenobi</Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  