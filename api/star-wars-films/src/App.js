import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const About = () => <p>This is a Star Wars film app</p>;

class FilmDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {}
    };
  }
  componentDidMount() {
    const filmID = this.props.match.params.filmID;
    fetch('https://swapi.co/api/films/${filmId}/')
      .then(response => response.json())
      .then(data => {
        this.setState((prevState, props) => {
          return { film: data };
        });
      });
  }

  render() 
    const { title, opening_crawl } = this.state.film;
return (
  <div>
    <h2>{title}</h2>
    <p>{opening_crawl}</p>
  </div>
)
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
  }


  componentDidMount() {
    fetch('https://swapi.co/api/films')
      .then(response => response.json())
      .then(data => {
        this.setState((prevState, props) => {
          return {
            films: data.results
          };
        });
      })
    //.catch(error => console.log(error));
  }


  render() {
    return (
      <div className="App">
        {this.state.films.map((film, idx) => <p key={idx}>{film.title}</p>)}
        <Router>
          <div>
            <Route path="/about" component={About} />
            <Route path="films/:filmID" component={FilmDetail} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
