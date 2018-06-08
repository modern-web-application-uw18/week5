import React from 'react';
import ReactDOM from 'react-dom';
import CharacterDetail from './Characters/index.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
//   const component = (
//     <Router>
//         <div>
//             <Route path="/CharacterDetail/4/" component={CharacterDetail} />
//         </div>
//     </Router>   
//     );
  ReactDOM.render(<Characters />, div);
  ReactDOM.unmountComponentAtNode(div);
});
