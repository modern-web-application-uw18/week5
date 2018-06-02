import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, ListItemLink, Switch} from 'react-router-dom';
import PersonDetail from './PersonDetail';
import Home from './Home';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(data => {
      this.setState((prevState, props) => {
        return {
          people: data.results
        };
      });
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/people/:personID" component={PersonDetail} />
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
