import React, { Component } from 'react';
import './Character.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Character extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      character: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`https://swapi.co/api/people/${id}/`)
    .then(response => response.json())
    .then(data => {
      this.setState((prevState, props) => {
        return {
          character: data
        };
      });
    })
    .catch(error => console.log('error'));
  }

  render() {
    const { name, hair_color, skin_color, eye_color, gender, birth_year, height, mass } = this.state.character;
    return (
      <div>
        <p>Name: {name}</p>
        <p>Hair color: {hair_color}</p>
        <p>Skin color: {skin_color}</p>
        <p>Eye color: {eye_color}</p>
        <p>Gender: {gender}</p>
        <p>DOB: {birth_year}</p>
        <p>Height (centimeters): {height}</p>
        <p>Mass (kilograms): {mass}</p>
        <Link to="/">Return to Home</Link>
      </div>
    )
  }
}

export default Character;
