import React, { Component } from 'react';

import './Home.css';

import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';

export default class Home extends Component {

    render() {
      /**
      * Loop through the props
      */
      const pokemonList = this.props.pokeList.map((pokemon, index) => {
        const { name, url, sprite } = pokemon;
        const arr = url.split('/').filter(word => word !== '');
        const id = arr[arr.length - 1];

        return (
          <Link to={`/description/${id}`} key={name} >
            <div onClick={this.props.fetchURL(url)} className="pokemon" title={name}>
              <div className="image">
                <img src={sprite} alt={name} />
              </div>
              <div className="name">{name}</div>
            </div>
          </Link>
        )
      });

        return (
          <main>
            {pokemonList}
          </main>
        );
    }
}

// Home.defaultProps = {
//   pokeList: [],
//   pokemon: {
//     name: 'charizard',
//     url: '',
//     sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
//   }
// }
