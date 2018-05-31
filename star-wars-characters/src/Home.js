import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Detail from './Detail';
import { Link } from 'react-router-dom';

const propTypes = {
	name: PropTypes.string,
	url: PropTypes.string
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then(data => {
        this.setState((prevState, props) => {
          return {
            characters: data.results
          };
        });
      })
      .catch(error => console.log(error));
    }
    
  render() {
    console.log('state', this.state);
		const characters = this.state.characters;
    return (
      <div className="App">
				<h2>List of Star Wars Characters</h2>
        {this.state.characters.map((character, idx) =>
					<p>{idx+1}. <Link to={`/character/${idx+1}`}>{character.name}</Link></p>)}
      </div>
    );
  }
}

Home.propTypes = propTypes;

export default Home;