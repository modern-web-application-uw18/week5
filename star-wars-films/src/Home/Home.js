import React, { Component } from 'react';

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
      //console.log(data);
      this.setState((prevState, props) => {
        return {
          characters: data.results
        };
      });
    })
    .catch(error => console.log('error'));
  }

  render() {
    //console.log('state ',this.state);
    return (
      <div>
        {this.state.characters.map((character, index) => <h1 key={index}>{character.name}</h1>)}      
      </div>
    );
  }
}

export default Home;