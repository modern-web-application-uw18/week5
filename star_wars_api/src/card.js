import React, { Component } from 'react';

class Card extends Component {

    render() {
        var character = this.props.character; 
        return (
                <span className='cardOpened'>
                    <p>{`Character Name: ${character.name}`}</p>
                    <p>{`Hair Color: ${character.hair_color}`}</p>
                    <p>{`Gender: ${character.gender}`}</p>
                    <p>{`Height: ${character.height} cm`}</p>
                    <p>{`Eye Color: ${character.eye_color}`}</p>
                </span>
            );
        }
}

export default Card;
