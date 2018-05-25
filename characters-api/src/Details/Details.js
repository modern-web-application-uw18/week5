import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../Shared/Header';
import  './details.css';
import PropTypes from 'prop-types';

class Details extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      character: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`https://rickandmortyapi.com/api/character/${id}/`)
    .then(response => response.json())
    .then(data => {
      this.setState((prevState, props) => {
        return {
          character: data
        };
      });
    })
    .catch(error => console.log('Error in fetch'));
  }

  render() {
    const { name, species, gender, status, image, type } = this.state.character;  
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className='flexcontainer'>
          <div>
            <img src={image} className='character-img' />
          </div>
          <div>
            <h2>{name}</h2>
            <ul>
              <li><b>Species:</b> {species} </li>
              <li><b>Gender:</b> {gender} </li>
              <li><b>Status:</b> {status} </li>
              <li><b>Type:</b> {type} </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

Details.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
  status: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string
};

export default Details;