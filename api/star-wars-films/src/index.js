import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { About } from './src/App';
import Character from './Character.js';
import CharacterDetail from './CharacterDetail.js';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
        <Router>
            <div>
                <Route exact path="/" component={App} />
                {/* <Route exact path="/about" component={About} /> */}
                <Route path="/character/:name" component={Character} />
                <Route path="/characterdetail/:name" component={CharacterDetail} />
            </div>
        </Router>, 
        document.getElementById('root')
)

registerServiceWorker();
