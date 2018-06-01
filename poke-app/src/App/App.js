import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header.js';
import Home from '../Home/Home.js';
import Footer from '../Footer/Footer.js';
import Description from '../Description/Description.js';

import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';

export default class App extends Component {

  constructor(props){
  	super(props);
  	this.state = {
      pokemonList: [],
      next: '',
      current: 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0',
      previous: '',
    };
  }

  /**
  * Fetches the twenty (20) pokemon to display on the webpage.
  */
  getPokemonList = () => {
      fetch(this.state.current)
        .then(response => response.json())
        .then(pokemonList => {
          let { next, previous, results } = pokemonList;
          // save the NEW pokemon list to the state
          this.setState((prevState, props) => {
            return {
              next: next,
              previous: previous
            };
          });

          // loop through pokemon list that was returned from the pokemon call
          let pokemonBlocks = results.map((pokemon) => {
            // get the pokemon sprite image
            fetch(pokemon.url)
            .then(response => response.json())
            .then(data => {
              // save the sprite image to the pokemon object
              pokemon.sprite = data.sprites.front_default;
              // save pokemonlist to state
              this.setState({pokemonList: pokemonList.results});
            })
            .catch(error => console.log('error occured'));
          });
      })
      .catch(error => console.log('error occured'));
  }

  componentDidMount = () => {
      this.getPokemonList();
  }

  /**
  * Fetch using new URL
  */
  fetchURL = (url) => {
    return () => {
      this.setState((prevState, props) => {
        console.log('url', url);
        return {
          current: url,
        }
      }, this.getPokemonList);
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={() => <Home pokeList={this.state.pokemonList} fetchURL={this.fetchURL} />} />
          <Route exact path="/" render={() => <Footer fetchURL={this.fetchURL} nextURL={this.state.next} previousURL={this.state.previous}/>} />
          <Route path="/description/:topicId" component={Description} />
        </div>
      </Router>
    );
  }
}
