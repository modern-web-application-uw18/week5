import React, { Component } from 'react';
import './Chars.css';
import {
  BrowserRouter as Router, Route, Link
} from "react-router-dom";

class Chars extends Component {
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
      //console.log("Data ", data);
      this.setState((prevState, props) => {
        return {
          character: data
        };
      });
    })
    .catch(error => console.log('error'));
  }

  render() {
    //console.log("Character ID is: ",this.props.match.params.id);
    const { name, birth_year, height, hair_color, eye_color } = this.state.character;
    return (
      <div>
        <p>Name: {name}</p>
        <p>DOB: {birth_year}</p>
        <p>Height: {height}</p>
        <p>Hair color: {hair_color}</p>
        <p>Eye color: {eye_color}</p>
        <Link to="/">Home</Link>
      </div>
    )
  }
}

export default Chars; 
