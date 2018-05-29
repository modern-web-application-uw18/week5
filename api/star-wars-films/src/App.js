import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

// export const About = () => <p>Explore Star Wars Characters</p>;


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      page: 1,
      people: [],
      shown: true
    };
  }

  
  componentWillMount() {
    this.getCharacters();
  }

  getCharacters = () => {
    fetch(`https://swapi.co/api/people/?page=${this.state.page}`)
      .then(response => response.json())
      .then(data => {
        this.setState(() => {
          return {
            results: data
          };
        });
      });
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  next = () => {
    this.setState((prevState) => {
      return { page: prevState.page + 1 };
    }, this.getCharacters);
  }

  previous = () => {
    this.setState((prevState) => {
      return { page: prevState.page - 1, shown: false };
    }, this.getCharacters);
  }



  render() {

      if (this.state.page < 2) {
        return (
          <div className="CharacterPage">
            {this.state.results.results && this.state.results.results.map(person => <div key={person.name}>
                <Link to={
                      {
                          pathname: "/characterdetail/" + person.name,
                          data: {person}
                      }
                  }>
                  <h1 id='CharacterName'>{person.name}</h1>
                </Link>
              </div>
            )}
            <button id='.next' onClick={this.next}>Get Characters</button>
          </div>
          
        )
      }
      else if (this.state.page < 9) {
        return (
          <div className="CharacterPage">
            {this.state.results.results && this.state.results.results.map(person => <div key={person.name}>
              <Link to={
                      {
                          pathname: "/characterdetail/" + person.name,
                          data: {person}
                      }
                  }>
              <h1 id='CharacterPage'>{person.name}</h1>
              </Link>
            </div>
            )}
            <button id=".previous" onClick={this.previous}>Previous Characters</button>
            <button id='.next' onClick={this.next}>Next Characters</button>
          </div>
        );
      }
      else return (
        <div className="CharacterPage">
        {this.state.results.results && this.state.results.results.map(person => <div key={person.name}>
          <Link to={
                  {
                      pathname: "/characterdetail/" + person.name,
                      data: {person}
                  }
              }>
          <h1 id='CharacterPage'>{person.name}</h1>
          </Link>
        </div>
        )}
        <button id=".previous" onClick={this.previous}>Previous Characters</button>
      </div>
      );
 
   }
}