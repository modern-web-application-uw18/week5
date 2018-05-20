import React, { Component } from 'react';
import './App.js';
import './Character.css';

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    // componentDidMount() {
    //     const person = this.props.match.params.name;
    //     fetch('https://swapi.co/api/${people}/')
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState((prevState, props) => {
    //                 return { response: person };
    //             });
    //         });
    // }

    handleTap = () => {

        this.setState((prevState) => {
            let currentlyExpanded = prevState.expanded;
            return { expanded: !currentlyExpanded };
          });
      
    }

    render() {
        const person = this.props.person;
        const imageName = "images/" + person.name + ".jpg"

        if (this.state.expanded) {
            return (
                <a href="#" onClick={this.handleTap}>
                <div className="CharacterDetails">
                    <h1 className="Character">{person.name}</h1>
                    <div className="Image">
                        <img src={imageName}/>
                    </div>
                    <h2 className="Gender">Gender: {person.gender}</h2>
                    <ul className="ChararcterTrivia">
                        <li>Eye Color: {person.eye_color}</li>
                        <li>Skin: {person.skin_color}</li>
                        <li>Year Born: {person.birth_year}</li>
                        <li>Mass {person.mass}</li>
                    </ul>
                </div>
                </a>
            )
        } else {
            return (
                <a href="#" onClick={this.handleTap}>
                <div className="CharacterName"><h1>{person.name}</h1></div>
                </a>
            )
        }
    }
}

export default Character


                    
                

