import React, { Component } from 'react';
import './Layout.css';
import Header from '../../components/Header/Header';
import MainStageRouter from '../../components/MainStageRouter/MainStageRouter';

class Layout extends Component {

    constructor(props) {
        super(props);


        this.state = {
            searchBoxValue: '',
            favoriteIds: JSON.parse(localStorage.getItem("favoriteIds")) || [],
            characters: []
        }

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
                .then(data => resolve({
                    pageCount: data.info.pages,
                    characterCount: data.info.count
                }))                  //resolve the promise with the actual page count and character count
        })
        initalJsonPullPromise.then(resolveObj => {

            let promiseArr = [];
            while (resolveObj.pageCount >= 1) {
                promiseArr.push( //new promise/fetch for each page
                    fetch('https://rickandmortyapi.com/api/character/?page=' + resolveObj.pageCount)
                        .then(response => response.json())
                        .then(data => data.results.forEach(character => allCharacters.push(character)))
                );
                resolveObj.pageCount--;
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



    searchHandler = (searchBoxValue) => {
        this.setState((prevState) => {
            return { searchBoxValue: searchBoxValue }
        });
    }

    favAddRemoveHandler = (id) => {


        let prevFavoriteIdsArr = [...this.state.favoriteIds],
            indexOfId = prevFavoriteIdsArr.indexOf(id);

        indexOfId > -1 ? prevFavoriteIdsArr.splice(indexOfId, 1) : prevFavoriteIdsArr.push(id);

        this.setState(prevState => {

            localStorage.setItem('favoriteIds', JSON.stringify(prevFavoriteIdsArr));

            return {
                favoriteIds: prevFavoriteIdsArr
            }
        })



    }


    render() {


        return (
            <div className="Layout">
                <Header searchHandler={this.searchHandler} />
                <MainStageRouter searchBoxValue={this.state.searchBoxValue} favAddRemoveHandler={this.favAddRemoveHandler} characters={this.state.characters} />
            </div>
        )
    }
}

export default Layout;
