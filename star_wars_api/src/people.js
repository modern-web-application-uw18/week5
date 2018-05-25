import React, { Component } from 'react';

//may need to:
//define People as a const in Card.js
//pull match location url from match
//run a comparative map over the array of previous people in Card rendered array
//make a new api call in People
//set the state in People
//render the returned data

class People extends Component {
  render() {
    console.log(this.props);
    let {people} = this.props;
    //console.log({people.name})
    return <h1>{people}</h1>
  }
}

export default People;
