import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            characters: [],
            currentPage:1
        }
    }

    componentDidMount() {
        this.fetchCharacters();
    }

    fetchCharacters = () => {
        fetch(`https://swapi.co/api/people/?page=${this.state.currentPage}`)
            .then(response => response.json())
            .then(data => {
                this.setState(() => {
                    return { characters: data.results };
                });
            })
            .catch(error => console.log(error));
    }

    fetchPrevious = () => {
        this.setState((prevState) => {
            return { currentPage: prevState.currentPage - 1 };
        }, this.fetchCharacters);
    }

    fetchNext = () => {
        this.setState((prevState) => {
            return { currentPage: prevState.currentPage + 1 };
        }, this.fetchCharacters);
    }

    render() {
        return (
            <div>
                <h3>Star Wars Characters</h3>
                {this.state.characters.map((character, index) =>
                    <p key={index}><Link to={`/character/${(this.state.currentPage-1)*10+(index + 1)}`}>{character.name}</Link></p>)}
                <button onClick={this.fetchPrevious}>Previous</button>
                <button onClick={this.fetchNext}>Next</button>
            </div>
        );
    }
}

export default Home;