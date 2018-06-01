import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';
import Detail from './Detail/Detail';
import { 
  BrowserRouter as Router, Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/character/:id" component={Detail} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
