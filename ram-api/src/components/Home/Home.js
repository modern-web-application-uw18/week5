import React from 'react';
import Card from './Card/Card';
import './Home.css';
import PropTypes from 'prop-types';


const home = (props) => {

    let filteredCards = props.characters.filter(character => {
        return character.name ? character.name.toLowerCase().indexOf(props.searchBoxValue.toLowerCase()) !== -1 : null;
    });

    return (
        <div className="Home">
            {
                filteredCards.map(character => {
                    return <Card key={character.id} character={character} />;
                })
            }
        </div>
    )
}


home.propTypes = {
    characters: PropTypes.array.isRequired
}


export default home;
