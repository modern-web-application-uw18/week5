import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Detail extends Component {
    constructor() {
        super();
        this.state = {
            character: {}
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`https://swapi.co/api/people/${id}`)
            .then(response => response.json())
            .then(data => {
                this.setState((prevState, props) => {
                    return {
                        character: data
                    };
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <h2>{this.state.character.name}</h2>
                <p>Gender: {this.state.character.gender}</p>
                <p>Height: {this.state.character.height}</p>
                <p>Mass: {this.state.character.mass}</p>
                <p>Skin color: {this.state.character.skin_color}</p>
                <p>Created: {this.state.created}</p>
                <br></br>
                <p><Link to="/">Home</Link></p>
            </div>
        );
    }
}

export default Detail;