import React, { Component } from 'react';
import './PokemonDetail.css';
import PropTypes from 'prop-types';

class PokemonDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonInfo: {}
        }
    }

    typeToImageLocation = {
        fire: "/fire.png",
        grass: "/grass.png",
        bug: "/grass.png",
        poison: "/grass.png",
        water: "/water.png",
        ice: "/water.png",
        electric: "/lightning.png",
        fighting: "/fighting.png",
        rock: "/fighting.png",
        ground: "/fighting.png",
        psychic: "/psychic.png",
        ghost: "/psychic.png",
        normal: "/colorless.png",
        flying: "/colorless.png",
        dark: "/darkness.png",
        steel: "/metal.png",
        dragon: "/dragon.png",
        fairy: "/fairy.png"
    };

    componentDidMount() {
        //match is provided by Route (injected by the Route component)
        const pokemonId = this.props.match.params.pokemonId;
        fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonId+'/')
            .then(response => response.json())
            .then(data => {
                this.setState((prevState, props) => {
                    return {
                        pokemonInfo: data
                    }
                })
            })
            .catch(error => console.log(error)
        );
    }
  
    render() {
        let obj = this.state.pokemonInfo; 
        let imageURL = "";
        let typeArray = [];
        let mainType = ""; //primary type
        let mainTypeSpriteSrc = "";
        let statsSummary = [];
        let baseExp = "";
        let hp = 0;
        let statsObj = {};
        // build imageURL only when state is populated
        if (Object.keys(obj).length !== 0 && obj.constructor === Object) {
            imageURL = this.state.pokemonInfo.sprites.front_shiny;
            typeArray = this.state.pokemonInfo.types.map((idx,pokemonType) => {
                if (this.state.pokemonInfo.types[pokemonType].slot === 1) {
                    mainType = this.state.pokemonInfo.types[pokemonType].type.name;
                    mainTypeSpriteSrc = `${this.typeToImageLocation[mainType]}`;            }
                return (this.state.pokemonInfo.types[pokemonType].type.name);
            });
            typeArray = "(" + typeArray.join(', ') + ")";
            statsSummary = this.state.pokemonInfo.stats.filter((stat) => {
                if (stat.stat.name === 'hp') {
                    hp = stat.base_stat;
                    return false;  //hp is already displayed in the header
                }
                return true;
            }).map((statIdx,stat) => {
                statsObj[this.state.pokemonInfo.stats[stat].stat.name] = this.state.pokemonInfo.stats[stat].base_stat;
                return (
                    <p key={stat+statIdx}>
                        {this.state.pokemonInfo.stats[stat].stat.name}:  {this.state.pokemonInfo.stats[stat].base_stat}
                    </p>
                );
            });
            baseExp = "base exp: " + this.state.pokemonInfo.base_experience;
        }

        return (
            <div className="CardContainer">
                <div className="CardBackground">
                    <div className="CardFrame">
                        <div className="PokemonDetailHeader">
                            <p className="PokemonDetailName">{this.state.pokemonInfo.name}</p>
                            <img className = "PokemonTypeSprite" src={mainTypeSpriteSrc} alt="Pokemon Type Sprite"/>
                            <p className="PokemonDetailHP">HP {hp}</p>
                        </div>
                        <div className="PokemonDetailBody">
                            <div className="ImageBackground">
                                <p><img src={imageURL} alt="Pokemon sprite"/></p>
                            </div>
                            <div className="PokemonDetailStats">
                                <p className="PokemonDetailType">{typeArray}</p>
                                <p className="PokemonDetailBaseExp">{baseExp}</p>
                                {statsSummary}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  }

  PokemonDetail.propTypes = {
    match: PropTypes.array
}

  export default PokemonDetail;