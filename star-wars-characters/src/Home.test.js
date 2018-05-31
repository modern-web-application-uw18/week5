import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import {
	MemoryRouter as Router, Route
} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
	const component = (
		<Router>
			<Route exact path="/" component={Home} />
		</Router>
	);
	
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});
