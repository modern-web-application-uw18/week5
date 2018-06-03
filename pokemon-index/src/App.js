import React, { Component } from 'react';
import './App.css';
import PokemonDetail from './PokemonDetail/PokemonDetail.js';
import PokemonIndex from './PokemonIndex/PokemonIndex.js';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={PokemonIndex}/> 
            <Route path="/pokemon/:pokemonId" component={PokemonDetail}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
