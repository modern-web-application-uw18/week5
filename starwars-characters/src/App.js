import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './star-wars/Home';
import Person from './star-wars/Person';
import './App.css';
import logo from './img/star-wars-logo.png';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Star Wars Character Portal</h1>
        </header>
        <p className="App-intro">
          Learn all about your favorite Star Wars characters!
          </p>
          <header className="App-header-line"></header>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/people/" component={Home}></Route>
            <Route exact path="/people/?page=number" component={Home}></Route>
            <Route path="/people/:personId" component={Person}></Route>
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
