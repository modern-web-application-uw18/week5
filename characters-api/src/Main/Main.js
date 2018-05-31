import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../Shared/Header';
import  './main.css';
import PropTypes from 'prop-types';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      loading: true
    };
  }

  componentDidMount() {
    let url = "https://rickandmortyapi.com/api/character/"
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState((prevState, props) => {
        return {
          characters: data.results,
          loading: false
        };
      });
    })
    .catch(error => console.log('Error at fetch'));
  }
 
  retrieve(location) {
    let splitUrl = location.split("/");
    return (location.lastIndexOf("/") !== location.length - 1 ? splitUrl[splitUrl.length - 1] :splitUrl[splitUrl.length - 2]);
  }

  render() {  
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className = 'character-list'>
          {this.state.characters.map((character, index) =>
            <li key={index}>
              <Link to={`/character/${this.retrieve(character.url)}`}>{character.name}</Link>
              {this.state.loading ? <p>Getting data...</p> : null}
            </li>
          )}
        </div>  
      </div>
      
    );
  }
}

Main.propTypes = {
  name: PropTypes.string,
};

export default Main;