import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PokemonIndex.css';
class PokemonIndex extends Component {
    constructor(props) {
      super(props);
      this.state = {
        pokemons: [],
        pageOffset: 0 
      }
    }
  
    componentWillMount() {
      this.getPokemonIndex();
      
    } 

    getPokemonIndex = () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${this.state.pageOffset}`)
      .then(response => response.json())
      .then(data => {
        this.setState((prevState, props) => {
          return {
            pokemons: data.results
          }
        })
      })
      .catch(error => console.log(error));
    }

    next = () => {
      this.setState(
        (prevState) => {
          return {
            pageOffset: prevState.pageOffset + 20
          }
        },
        this.getPokemonIndex
      )
    }

    previous = () => {
      this.setState(
        (prevState) => {
          return {
            pageOffset: (prevState.pageOffset - 20 < 0 ? 0 : prevState.pageOffset - 20)
          }
        },
        this.getPokemonIndex
      )
    }

    render() {
      const pokemonIndex = this.state.pokemons.map((pokemon,idx) => {
        let pokemonId = pokemon.url.split('/')[6];
        let pokemonURL = "/pokemon/"+pokemonId;
        let spriteURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokemonId+".png"
        return(
          <div className="PokemonIndexItem" key={idx}>
              <img className="PokemonIndexImage" src={spriteURL} alt="Pokemon Sprite"/>
              <div className="PokemonIndexDetails">
                <Link className = "PokemonLink" to={pokemonURL}>{pokemon.name}</Link>
              </div>
          </div>
        )
      })
  
      return(
        <div>
          <h1>Pokemon Index</h1>
          <p>Click on the Pokemon name to learn more about that Pokemon</p>
          <div className="PokemonIndex">{pokemonIndex}</div>
          <button onClick={this.previous}>Previous</button>
          <button onClick={this.next}>Next</button>
        </div>
      )
    }
  }

  export default PokemonIndex;