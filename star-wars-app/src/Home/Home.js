import React, { Component } from 'react';
import './Home.css';

import {
  BrowserRouter as Router, Route, Link
} from "react-router-dom";



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch('https://cors.io/?https://swapi.co/api/people')
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      this.setState((prevState, props) => {
        return {
          characters: data.results,
          loading: false
        };
      });
    })
    .catch(error => console.log('error'));
  }

  getLastPart(url) {
    var parts = url.split("/");
    return (url.lastIndexOf('/') !== url.length - 1 ? parts[parts.length - 1] : parts[parts.length - 2]);
  }

  render() {
    //console.log('state ',this.state);
    return (
      <div>
        {this.state.loading ? <p>Hang on...</p> : null}
        {this.state.characters.map((character, index) =>
          <h1 key={index}><Link to={`/character/${this.getLastPart(character.url)}`}>{character.name}</Link></h1>
        )}
      </div>
    );
  }
}

export default Home;
