import React, {Component} from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

class Character extends Component{
    constructor(props){
        super(props);
        this.state = {
            character: this.character
        };
    }

    character = this.props.match.params.number;

    componentDidMount(){
        fetch(`https://swapi.co/api/people/?search=${this.character}`)
        .then(response => response.json())
        .then(json => this.setState((prevState) => {
            return {character: json.results};
    }));
    }

    

    render(){
    return (
      <div className="border border-success bg-light">
        <p>Name: {this.state.character[0].name}</p>
        <p>Height: {this.state.character[0].height}</p>
        <p>Mass: {this.state.character[0].mass}</p>
        <p>Birth Year: {this.state.character[0].birth_year}</p>
        <p>Gender: {this.state.character[0].gender}</p>
      </div>
    )
  }
}

Character.propTypes = {
        name: PropTypes.string,
        height: PropTypes.string,
        mass: PropTypes.string,
        birth_year: PropTypes.string,
        gender: PropTypes.string
}

export default Character;