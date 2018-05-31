import React, { Component } from 'react';

import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

import './Home.css';

export default class Home extends Component {

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
  getPokemonList() {
      fetch(this.state.current)
        .then(response => response.json())
        .then(pokemonList => {
          console.log(pokemonList);
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

              // save the NEW pokemon list to the state
              this.setState((prevState, props) => {
                return {
                  pokemonList: pokemonList.results
                };
              });
            })
            .catch(error => console.log('error occured'));
          });
      })
      .catch(error => console.log('error occured'));
  }

  componentDidMount() {
      this.getPokemonList();
  }

  /**
  * loop through the pokemon list and create JSX elements to render on the webpage
  */
  pokemonList() {
    return (
      this.state.pokemonList.map((pokemon) => {
        const { name, url, sprite } = pokemon;
        return (
          <a className="pokemon" key={name} href={url} title={name}>
              <div className="image">
                <img src={sprite} alt={name} />
              </div>
              <div className="name">{name}</div>
          </a>
        )
      })
    );
  }

    render() {
      /**
      * Sets the current url state to the NEXT url and sets getPokemonList as a callback
      */
      const nextTwenty = () => {
          this.setState((prevState, props) => {
            console.log('setting new current', this.state.next);
            return {
              current: this.state.next,
            }
          }, this.getPokemonList);
      }

      /**
      * Sets the current url state to the PREV url and sets getPokemonList as a callback
      */
      const prevTwenty = () => {
          this.setState((prevState, props) => {
            console.log('setting new current', this.state.previous);
            return {
              current: this.state.previous,
            }
          }, this.getPokemonList);
      }

        return (
          <Router>
            <div>
              <Header />
              <main className="pokemonList">
                {this.pokemonList()}
              </main>
              <footer>
                {this.state.previous && <div onClick={prevTwenty} title={this.state.previous}>Previous 20</div>}
                {this.state.next && <div onClick={nextTwenty} title={this.state.next}>Next 20</div>}
              </footer>
            </div>
          </Router>
        );
    }
}
