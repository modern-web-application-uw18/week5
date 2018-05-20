import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Character from './Character.js';

const About = () => <p>Explore Star Wars Characters</p>;


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
    //.catch(error => console.log(error));
  }


  render() {
  return (
      <div className="App">
        <div className='AppCharacter'>
        {/* {this.state.people.map((person, idx) => <p key={idx}>{person.name}</p>)} */}
        {this.state.people.map((person, idx) => <Character person={person} key={idx} />)}
        </div>
        <Router>
          <div>
          <Route path="/app" component={App} /> 
          <Route path="/about" component={About} />
          <Route path="/character" component={Character} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
