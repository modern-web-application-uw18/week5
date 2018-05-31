import React from 'react';
import ReactDOM from 'react-dom';
import Detail from './Detail';
import {
	MemoryRouter as Router, Route
} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
	const component = (
		<Router>
			<Route path="/character/:id" component={Detail} />
		</Router>
	);
	
  ReactDOM.render(<Detail />, div);
  ReactDOM.unmountComponentAtNode(div);
});
