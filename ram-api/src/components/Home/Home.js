import React, { Component } from 'react';
import Card from './Card/Card';
import './Home.css';


class Home extends Component {


    state = {
        characters: []
    }

    
    sortCharactersAlph = () => {
        let characters = this.state.characters.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });

        this.setState(prevState => {
            return {
                characters: characters
            }
        })
    }

    componentDidMount() {
        let allCharacters = [];
        let initalJsonPullPromise = new Promise((resolve, reject) => {   //first load the "pages" value from the info object of the character API point
            fetch('https://rickandmortyapi.com/api/character/')
                .then(response => response.json())
                .then(data => resolve(data.info.pages))                  //resolve the promise with the actual page count
        })
        initalJsonPullPromise.then(pageCount => {
            let promiseArr = [];
            while (pageCount >= 1) {
                promiseArr.push( //new promise/fetch for each page
                    fetch('https://rickandmortyapi.com/api/character/?page=' + pageCount)
                        .then(response => response.json())
                        .then(data => data.results.forEach(character => allCharacters.push(character)))
                );
                pageCount--;
            }
            Promise.all(promiseArr)
                .then(allCombined => { //pushing individual characters into the allCharacters array above to avoid nested for loops as allCombined is array of arrays...
                    this.setState(prevState => {
                        return {
                            characters: allCharacters
                        }
                    })
                    this.sortCharactersAlph();
                });

        })

    }


    render() {


        let filteredCards = this.state.characters.filter(character => {
            return character.name ? character.name.toLowerCase().indexOf(this.props.searchBoxValue.toLowerCase()) !== -1 : null;
        });

        return (
            <div className="Home">
                {
                    filteredCards.map(character => {

                        return <Card key={character.id} character={character} />;
                    })
                }

            </div>
        )

    }


}

export default Home;
