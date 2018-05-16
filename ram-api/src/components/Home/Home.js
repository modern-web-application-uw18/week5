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


        return (
            <div className="Home">
                {
                    this.state.characters.map(character => {
                        return <Card key={character.id} name={character.name}/>;
                    })
                }
            </div>
        )

    }


}

export default Home;
