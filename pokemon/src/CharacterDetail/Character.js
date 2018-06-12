import React, { Component } from 'react';

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterDetail: {}
        }
    }
    
    componentDidMount() {
        //const charId = this.props.match.params.charId;
        //console.log('Character Component Props', this.props.match.params.charName);
        //console.log('componentDidMount');
        const characterData = this.props.CharacterData;
        const character = this.props.match.params.charName;
        const pokeURL = characterData.find( (pokechar) => {
            if (pokechar.name == character ) {
                return pokechar.url
            }
        })
        //console.log('pokeURL', pokeURL.url);

        fetch(pokeURL.url)
            .then(response => response.json())
            .then(characterDetailData => {
                //console.log('characterDetail', characterDetailData);
                //console.log('componentDidMount', this.props.match.params.charName);
                //console.log('characterData', this.props.CharacterData);

                this.setState((prevState, props) => {
                    return {
                        characterDetail: characterDetailData
                    }
                })
            })
        
        console.log('componentDidMount characterDetail', this.state.characterDetail);
    }

    componentDidUpdate(prevProps) {
        //const charId = this.props.match.params.charId;
        //console.log('Character Component Props', this.props.match.params.charName);
        //console.log('componentDidMount');
        const characterData = this.props.CharacterData;
        const character = this.props.match.params.charName;
        const pokeURL = characterData.find( (pokechar) => {
            if (pokechar.name == character ) {
                return pokechar.url
            }
        })
        //console.log('pokeURL', pokeURL.url);

      if (character !== prevProps.match.params.charName){  

        fetch(pokeURL.url)
            .then(response => response.json())
            .then(characterDetailData => {
                //console.log('characterDetail', characterDetailData);
                //console.log('componentDidMount', this.props.match.params.charName);
                //console.log('characterData', this.props.CharacterData);

                this.setState((prevState, props) => {
                    return {
                        characterDetail: characterDetailData
                    }
                })
            })
        }  
    }

    render() {
        //const { name } = this.state.characterDetail;
        //console.log('props', this.props);

        const pokemon = this.props.match.params.charName;
        console.log('render characterDetail', this.state.characterDetail);
        const pokemonDetail = this.state.characterDetail;
        const sprites = pokemonDetail.sprites;
        if (sprites != undefined) {
            
            const abilities = pokemonDetail.abilities;
            return (
                <div>
                    <p><h2>Character Detail</h2></p>
                    <img src={pokemonDetail.sprites.front_default} alt={pokemonDetail.sprites.name} /><br />
                    You selected the Pokemon: {pokemon} <br />
                    Base Experience: {pokemonDetail.base_experience} <br />
                    Weight: {pokemonDetail.weight} <br />
                    height: {pokemonDetail.height} <br />
                    Abilities include: <br />
                        <ul>
                        {
                            abilities.map((ability) => {
                                console.log('ability',abilities);
                                //console.log('ability', ability.is_hidden );
                                return <li>{ability.ability.name}</li>;
                            })
                        }
                        </ul>
                    
    
                </div>
            )
        } else {        
            return (
            <div>
                <p>Character Detail</p>
                You selected the Pokemon: {pokemon} <br />
                Base Experience: {pokemonDetail.base_experience} <br />
                Weight: {pokemonDetail.weight} <br />
               

            </div>
        )}

        return (
            <div>
                <p>Character Detail</p>
                You selected the Pokemon: {pokemon} <br />
                Base Experience: {pokemonDetail.base_experience} <br />
                Weight: {pokemonDetail.weight} <br />
                {pokemonDetail.sprites.front_default}

            </div>
        )

        
        //console.log('species', pokemonDetail.species);

    }
}

export default Character;