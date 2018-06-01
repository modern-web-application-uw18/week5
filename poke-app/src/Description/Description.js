import React, { Component } from 'react';

import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';

import './Description.css';

import Pokemon from './pokemonDescription.json';

export default class Description extends Component {

  constructor(props){
  	super(props);
  	this.state = {
      pokeName: '',
      img: '',
      abilities: [],
      stats: [],
      types: []
    };
  }

  getStateFromLocal = () => {
    const { abilities, name, sprites, stats, types } = Pokemon;
    this.setState({
      pokeName: name,
      img: sprites.front_default,
      abilities: abilities,
      stats: stats,
      types: types
    });
  }

  getCharDetails = () => {
    const { match } = this.props;
    const pokeId = match.params.topicId;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
      .then(response => response.json())
      .then(data => {
        const { abilities, name, sprites, stats, types } = data;
        this.setState({
          pokeName: name,
          img: sprites.front_default,
          abilities: abilities,
          stats: stats,
          types: types
        });
      })
      .catch(error => console.log('error occured'));
  }

  componentDidMount = () => {
          this.getCharDetails();
          // this.getStateFromLocal();  // for Local Testing
  }

    render() {
      // Build Ability List
      let abilityList = this.state.abilities.map((ability, index) => {
        return (
          <div key={index}>{ability.ability.name}</div>
        );
      });
      // Build base stats list
      let baseStats = this.state.stats.map((stat) => {
        return (
          <div key={stat.stat.name}>{stat.stat.name} : {stat.base_stat}</div>
        )
      });
      // build type list
      let typeList = this.state.types.map((type, index) => {
        return (
            <div key={type.type.name}>Type {index + 1} : {type.type.name}</div>
        );
      });

        return (
          <main id="pokemonDescription">
            <div className="description">
              <h2>{this.state.pokeName}</h2>
              <img src={this.state.img} alt={this.state.pokeName}/>
            </div>
            <div className="description" id="stats">
              <h3>Base Stats</h3>
              {baseStats}
            </div>
            <div className="description" id="types">
              <h3>Pokemon Type</h3>
              {typeList}
            </div>
            <div className="description" id="abilities">
              <h3>Abilities</h3>
              {abilityList}
            </div>
            <div className="description">
              <Link to="/">Back to Pokemon List</Link>
            </div>
          </main>
        );
    }
}

Description.defaultProps = {
  match: {}
}
