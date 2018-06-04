import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './css/App.css';

// Static JSON - no longer used
import Character from './components/Character'
import people from './data/people.json';

// The Films
class theFilms extends Component {

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

    
  render(){
    return(
      <div>
          {/* Load films via API */}
          {this.state.films.map(film => {
            return <div className="card-people">
              <h1 key={film.episode_id}>{film.title}</h1>
              </div>;
            })}

      </div>
    );
  }
}


// Load the Films by Default
class App extends Component {

constructor(props){
  super(props);
    this.state = {
      people: [],
      loading:true
    }
}

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(json => this.setState((prevState)=> {
      return {
        people: json.results,
        loading:false
      };
    }));
  }
  
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">a rebels menace with APIs and Routes</h1>
          {/* // App Navigation */}
          <nav>
           <Link to="/">home</Link> | <Link to="/films">Films</Link>
          </nav>
        </header>
        <span className="App-intro">
         
           {this.state.loading ? <h1>loading...</h1> : null}

           {/* Load films via API */}
           {this.state.people.map(people => {
            return <div className="card-people">
              <h1>{people.name}</h1>
              </div>;
            })}

            {/* Route controll */}
          <Route path="/" />
          <Route path="/films" Component={theFilms} />
         
        </span>
      </div>
      </Router>
    );
  }
}
export default App;
