import React, { Component } from 'react';

// Load the People
class ThePeople extends Component {

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
      <div className="full">
        {/* Load people via API */}
        {this.state.people.map(people => {
            return <div className="card">
              <h1>{people.name}</h1>
              </div>;
            })}
      </div>
    );
  }
}

export default ThePeople;