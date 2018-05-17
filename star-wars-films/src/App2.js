import React, { Component } from 'react';
import './App.css';

import { 
  BrowserRouter as Router, Route, Link 
} from "react-router-dom";



class CharacterDetail extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      character: {}
    };
  }
  componentDidMount() {
    const characterId = this.props.match.params.characterId;
    fetch(`https://swapi.co/api/people/${characterId}/`)
    .then(response => response.json())
    .then(data => {
      //console.log("Data ", data);
      this.setState((prevState, props) => {
        return {
          character: data
        };
      });
    })
    .catch(error => console.log('error'));
  }

  render() {
    //console.log("CharacterDetail ",this.props.match.params.characterId);
    const { name, birth_year, height, hair_color, eye_color } = this.state.character;
    return (
      <div>
        <p>Name: {name}</p>
        <p>DOB: {birth_year}</p>
        <p>Height: {height}</p>
        <p>Hair color: {hair_color}</p>
        <p>Eye color: {eye_color}</p>
        <Link to="/">Home</Link>      
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      this.setState((prevState, props) => {
        return {
          characters: data.results
        };
      });
    })
    .catch(error => console.log('error'));
  }

  render() {
    console.log('state ',this.state);
    return (
      <div className="App">
        {this.state.characters.map((character, index) => <h1 key={index}>{character.name}</h1>)}
        <Router>
          <div>
            <Route path="/character/:characterId" component={CharacterDetail} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
