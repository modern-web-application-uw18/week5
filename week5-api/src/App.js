import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class CharacterInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {}
    };
  }

  componentDidMount() {
    const characterId = this.props.match.params.characterId;
    fetch('https://rickandmortyapi.com/api/character/'+characterId)
    .then(response => response.json())
    .then(info => {
      console.log(info);
      this.setState((prevState, props) => {
        return {
          character: info
        };
      });
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h2>Name: {this.state.character.name}</h2>
        <img src = {this.state.character.image} />
        <h6>Gender: {this.state.character.gender}</h6>
        <h6>Species: {this.state.character.species}</h6>
        <h6>Status: {this.state.character.status}</h6>
      </div>
    )
  }
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }
  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(info => {
      console.log(info);
      this.setState((prevState, props) => {
        return {
          characters: info.results
        };
      });
    })
    .catch(error => console.log(error));
  }
  render() {
    return (
      <div>
      {this.state.characters.map((char, idx) =>
        <div key = {idx}>
          <p>
            Name: {char.name}
          </p>

        </div>)}
        </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, *BURP* Morty</h1>
        </header>

        <Router>
          <div>
            <Route path='/' component={HomePage} />
            <Route path='/character/:characterId' component={CharacterInfo} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
