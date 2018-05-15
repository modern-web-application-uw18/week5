import React, { Component } from 'react';


class Home extends Component {

    state = {
        characters: []
    }


    componentDidMount () {

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
            <div>{
                this.state.characters.map(character => {
                    return <div key={character.id}>{character.name}</div>;
                })
            }</div>
        )
        
    }
    

}

export default Home;
