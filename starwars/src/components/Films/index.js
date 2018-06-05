import React, { Component } from 'react';

// The Films
class TheFilms extends Component {

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
      <div className="full">
          {/* Load films via API */}
          {this.state.films.map(film => {
            return <div className="card">
              <h1 key={film.episode_id}>{film.title}</h1>
              </div>;
            })}

      </div>
    );
  }
}


export default TheFilms;