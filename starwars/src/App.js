import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './css/App.css';

// Static JSON
import Character from './components/Character'
import people from './data/people.json';

// The People
class thePeople extends Component {
  render(){
    return(
      <div>
         {people.map((people, idx) => {
          return <Character key={idx} people={people} />
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
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">a rebels mennace with API's and Routes</h1>
          {/* // App Navigation */}
          <nav>
            <Link to="/people">People</Link> | <Link to="/">home</Link>
          </nav>
        </header>
        <span className="App-intro">
         
           {this.state.loading ? <h1>loading...</h1> : null}

           {/* Load films via API */}
           {this.state.films.map(film => {
            return <div className="card-people">
              <h1 key={film.episode_id}>{film.title}</h1>
              </div>;
            })}

           <Route path="/" />
          <Route path="/people" Component={thePeople} />
         
        </span>
      </div>
      </Router>
    );
  }
}
export default App;
