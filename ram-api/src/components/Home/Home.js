import React, { Component } from 'react';
import Card from './Card/Card';
import './Home.css';


class Home extends Component {

    state = {
        characters: []
    }


    componentDidMount() {

        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => {
                this.setState(prevState => {
                    return {
                        characters: data.results
                    }
                })
            })
            .catch(error => console.log(error));
    }


    render() {


        let filteredCards = this.state.characters.filter(character => {
            return character.name.toLowerCase().indexOf(this.props.searchBoxValue.toLowerCase()) !== -1;
        });

        return (
            <div className="Home">
                {
                    filteredCards.map(character => {
                       
                        return <Card key={character.id} character={character}/>;
                    })
                }

            </div>
        )

    }


}

export default Home;
