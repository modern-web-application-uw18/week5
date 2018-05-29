import React, { Component } from 'react';
import './App.js';
import './Character.css';
import { Link } from 'react-router-dom';

export default class Character extends Component {
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
            let detailShown = prevState.detailShown;
            return { detailShown: !detailShown};
          });
      
    }

    render() {
        // console.log("This person is: " + JSON.stringify(this.props));
        const person = this.props.person;
        // const imageName = "images/" + person.name + ".jpg"

        if (this.state.detailShown) {
            return (
                
                <button id="return">Return to Characters</button>
    
            )
        } else {
            return (
//                <Link to={`/character/$person.name`}>
                <Link to={
                    {
                        pathname: "/characterdetail/" + person.name,
                        data: {person}
                    }
                }>
                <div className="CharacterName"><h1>{person.name}</h1></div>
                </Link>
            )
        }
    }
}



                    
                

