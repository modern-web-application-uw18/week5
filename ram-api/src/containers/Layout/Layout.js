import React, { Component } from 'react';
import './Layout.css';
import Header from '../../components/Header/Header';
import MainStageRouter from '../../components/MainStageRouter/MainStageRouter';

class Layout extends Component {

    state = {
        searchBoxValue: ''
    }

    searchHandler = (searchBoxValue) => {
        this.setState((prevState) => {
            return { searchBoxValue: searchBoxValue }
        });


    }


    render() {
        return (
            <div className="Layout">
                <Header searchHandler={this.searchHandler} />
                <MainStageRouter searchBoxValue={this.state.searchBoxValue} />
            </div>
        )
    }
}

export default Layout;
