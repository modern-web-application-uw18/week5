import React, { Component } from 'react';
import './App.js';
import './CharacterDetail.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CharacterDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    render() {
        if (this.props.location == null || this.props.location.data == null || this.props.location.data.person == null) {
            return (
                <div>
                <p>Unknown character in the Star Wars Universe.</p>
                <Link to="/">Use the Force! Find a Character</Link>
                </div>
            )
        }

        const person = this.props.location.data.person;
        const imageName = "../images/" + person.name + ".jpg";

        if (person != null) {
            return (
                <div className="CharacterPage">
                    <h1 className="Character">{person.name}</h1>
                    <div className="Image">
                        <img src={imageName} alt={person.name}/>
                    </div>
                    <h2 className="Gender">Gender: {person.gender}</h2>
                    <ul className="ChararcterTrivia">
                        <li>Eye Color: {person.eye_color}</li>
                        <li>Skin: {person.skin_color}</li>
                        <li>Year Born: {person.birth_year}</li>
                        <li>Mass: {person.mass}</li>
                    </ul>
                    <Link to="/">Home</Link>
                    </div>
            )
        }
    }
}

export default CharacterDetail;

CharacterDetail.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string,
        gender: PropTypes.string,
        eye_color: PropTypes.string,
        skin_color: PropTypes.string,
        birth_year: PropTypes.number,
        mass: PropTypes.number

    })
 };
