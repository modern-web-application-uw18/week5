import React, { Component } from 'react';
import './Layout.css';
import Header from '../../components/Header/Header';
import MainStageRouter from '../../components/MainStageRouter/MainStageRouter';

class Layout extends Component {


    constructor(props) {
        super(props);
        
       
        this.state = {
            searchBoxValue: '',
            favoriteIds: JSON.parse(localStorage.getItem("favoriteIds")) || []
        }

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

            localStorage.setItem('favoriteIds',JSON.stringify(prevFavoriteIdsArr));
            
            return {
                favoriteIds: prevFavoriteIdsArr
            }
        })



    }


    render() {

        console.log(this.state);

        return (
            <div className="Layout">
                <Header searchHandler={this.searchHandler} />
                <MainStageRouter searchBoxValue={this.state.searchBoxValue} favAddRemoveHandler={this.favAddRemoveHandler} />
            </div>
        )
    }
}

export default Layout;
