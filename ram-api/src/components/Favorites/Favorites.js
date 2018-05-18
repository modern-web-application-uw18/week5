import React, { Component } from 'react';
import './Favorites.css';
import PropTypes from 'prop-types';
import Card from '../Home/Card/Card';

class Favorites extends Component {


       
        state = {
                filteredCards: this.props.characters.filter(character => {
                        return character ? JSON.parse(localStorage.getItem("favoriteIds")).indexOf(character.id) !== -1 : null;
                })
        }



 
        //as the characters (ajax call in layout) may have not made it down to favs before favs page finishes rendering
        //,refresh the state on update
        componentDidUpdate(prevProps, prevState) {
                
                if (!prevState.filteredCards.length && JSON.parse(localStorage.getItem("favoriteIds")).length) {
                        let filteredCards = this.props.characters.filter(character => {
                                return character ? JSON.parse(localStorage.getItem("favoriteIds")).indexOf(character.id) !== -1 : null;
                        });
                        this.setState((prevState) => {
                                return {
                                        filteredCards: filteredCards
                                }
                        })
                }
        }




        render() {


                return (

                        <div className="Home">
                                {
                                        this.state.filteredCards.map(character => {
                                                return <Card key={character.id} character={character} />;
                                        })

                                }
                        </div>
                )


        }







}

Favorites.propTypes = {
        characters: PropTypes.array
}

export default Favorites;