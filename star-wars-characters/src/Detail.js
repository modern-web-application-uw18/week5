import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
	name: PropTypes.string, 
	height: PropTypes.number,
	mass: PropTypes.number,
	gender: PropTypes.string, 
	birth_year: PropTypes.string, 
	url: PropTypes.string
};

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {}
    };
  }
	
  componentDidMount() {
		const id = this.props.match.params.id;
    fetch(`https://swapi.co/api/people/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState((prevState, props) => {
          return {
            character: data
          };
        });
      })
      .catch(error => console.log(error));
    }
 
  render() {
    console.log('state', this.state);
		const character = this.state.character;
    return (
      <div className="App">
				<h2>{character.name}</h2>
				<p>height: {character.height}</p>
				<p>mass: {character.mass}</p>
				<p>gender: {character.gender}</p>
				<p>birth year: {character.birth_year}</p>
				<br></br>
				<p><Link to="/">Home</Link></p>
      </div>
    );
  }
}

Detail.propTypes = propTypes;

export default Detail;