import React, { Component } from 'react';
import Character from './CharacterDetail/Character';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';

class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
            .then(response => response.json())
            .then(data => {
                console.log('data',data);
                this.setState((prevState, props) => {
                    return {
                        characters: data.results
                    }
                })
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
        <Router>
        <div>
            <h2>Pokemon!</h2>
            {
                this.state.characters.map(character => {
                    
                    return (
                        <div>
                        <Link to={`${this.props.match.url}/${character.name}`}>{character.name}</Link>
                        
                        </div>
                    )
                })
            }  
            <Route exact path="/" component={Home} />
            <Route path= {`${this.props.match.url}/:charName`} render={ (props) => <Character CharacterData= {this.state.characters} {...props} />}/>
        </div>
        </Router>
        );
    } 

}

export default Characters;