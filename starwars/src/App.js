import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import Character from './components/Character'
import people from './data/people.json';

// console.log({people});

class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        films: [],
        loading:true
      }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
    .then(response => response.json())
    .then(json => this.setState((prevState)=> {
      return {
        films: json.results,
        loading:false
      };
    }));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">a rebels mennace with API's</h1>
        </header>
        <span className="App-intro">

          {/* {people.map((people, idx) => {
            return <Character key={idx} people={people} />
          })} */}

          {this.state.loading ? <h1>loading...</h1> : null}

           {this.state.films.map(film => {
            return <div className="card-people"><h1 key={film.episode_id}>{film.title}</h1>
            </div>;

          })}

         

        </span>
      </div>
    );
  }
}

export default App;
