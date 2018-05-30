import React, { Component } from 'react';
import './App.css';
import './rickmorty.css';

import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';

const About = () => <p>This app pulls data from the <a href='https://rickandmortyapi.com/' target='_blank'>Rick and Morty API</a>.</p>;

class CharacterDetail extends Component {
	componentDidMount(){
	const id = this.props.match.params.id;
	fetch('https://rickandmortyapi.com/api/character/${id}/')
	.then(response => response.json())
	.then(data3 => console.log(data3));
	
}
	
	render() {
		console.log(this.props.match.params.id);
		return (
		<div>
		<h3>Character Detail</h3>
		</div>
		)
	}
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      episode: [],
	  character: []
    };
  }


  componentDidMount(){
  fetch('https://rickandmortyapi.com/api/episode')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    this.setState((prevState, props) => {
      return {
        episode: data.results
      };
    });
    })
  .catch(error => console.log(error));
  
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data2 => {
      console.log(data2);
    this.setState((prevState, props) => {
      return {
        character: data2.results
      };
    });
    })
  .catch(error => console.log(error));
  }

  render() {
    console.log('state', this.state);
    return (
      <div className="App">
	  <Router>
      <div id='routerdiv'>
      <Route path='/about' component={About} />
	  <Route path='/characterdetails/:character' component={CharacterDetail} />
      </div>
      </Router>
	  <div id="episodes">
	  <h3>Episodes</h3>
      {this.state.episode.map(ep => <div id="epcard"><p>{ep.name}</p></div>)}
	  </div>
	  <div id="characters">
	  <h3>Characters</h3>
	  {this.state.character.map(char => <div id="charcard">
	  <ul>
	  <li>ID: {char.id}</li>
	  <li>Name: {char.name}</li>
	  <li>Status: {char.status}</li>
	  <li>Species: {char.species}</li>
	  <li>Gender: {char.gender}</li>
	  <li><img src={char.image}></img></li>
	  <li><a href={char.url}>Character page</a></li>
	  </ul>
	  </div>)}
	  </div>
      </div>
    );
  }
}

export default App;
