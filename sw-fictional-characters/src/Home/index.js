import React, { Component } from 'react';
// import { 
//     BrowserRouter as Router, Route, Link 
//   } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          characters: [],
          loading: true
        };
      }

      componentDidMount() {
        fetch('https://swapi.co/api/films/')
          .then(response => response.json())
          .then(data => {
            console.log(data)
            this.setState((prevState, props) => {
              return {
                characters: data.results.characters,
                loading: false
              };
            });
          })
          .catch(error => {
              console.log(error)
              this.setState((prevState, props) => {
                return {
                  loading: false,
                  error: 'Error when retrieving characters'
                };
              })
            });
      }


    render() {
        const people = this.state.characters.map((character, key) => 
                <li key={key}>
                    {character.name}
                </li>
            );
        
        return (
            <div>
                {this.state.loading ? <p>Loading ...</p> : null}
                {this.state.error ? <p>{this.state.error}</p> : null}
                <ol>
                    {people}
                </ol>
            </div>
        );
    }
}


export default Home;