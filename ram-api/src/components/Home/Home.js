import React from 'react';
import Card from './Card/Card';
import './Home.css';
import PropTypes from 'prop-types';
import Paginator from './Paginator/Paginator';


const home = (props) => {

    let filteredCards = props.characters.filter(character => {
        return character.name ? character.name.toLowerCase().indexOf(props.searchBoxValue.toLowerCase()) !== -1 : null;
    });

    return (
        <div style={{textAlign:"center",opacity:0.5}}>

            <Paginator />


            <div className="Home">

                {
                    filteredCards.map((character, idx) => {
                        return idx >= 0 && idx <= 19 ? <Card key={character.id} character={character} /> : null;
                    })
                }
            </div>
        </div>
    )
}


home.propTypes = {
    characters: PropTypes.array.isRequired
}


export default home;
