import React, { Component } from 'react';
import Card from './Card/Card';
import './Home.css';
import PropTypes from 'prop-types';
import Paginator from './Paginator/Paginator';


class Home extends Component {

    state = {
        idxFrom: 0,
        idxTo: 19,
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
        fifth: 5,
        searchBoxValue: ''
    }


    componentDidUpdate(prevProps, prevState) {

        //if user types into the search area, go back to the first page of the paginator
        if (prevProps.searchBoxValue.toLowerCase() !== this.props.searchBoxValue.toLowerCase()) {
            this.setState(prevState => {
                return {
                    idxFrom: 0,
                    idxTo: 19,
                    first: 1,
                    second: 2,
                    third: 3,
                    fourth: 4,
                    fifth: 5
                }
            })
        }
    }


    paginatorHandler = (e, buttonID, innerValue) => {

        switch (buttonID) {
            case "inner":
                this.setState(prevState => {
                    let _idxFrom, _idxTo;

                    _idxFrom = innerValue === 1 ? innerValue * 19 : innerValue * 19 + 1;
                    _idxTo = _idxFrom + 19;

                    return {
                        idxFrom: _idxFrom,
                        idxTo: _idxTo
                    }
                })
                break;

            case "prev":

                this.setState(prevState => {
                    let _first, _second, _third, _fourth, _fifth;
                    _first = (prevState.first != null) && (prevState.first > 1) ? --prevState.first : 1;
                    _second = (prevState.second != null) && (prevState.second > 2) ? --prevState.second : 2;
                    _third = (prevState.third != null) && (prevState.third > 3) ? --prevState.third : 3;
                    _fourth = (prevState.fourth != null) && (prevState.fourth > 4) ? --prevState.fourth : 4;
                    _fifth = (prevState.fifth != null) && (prevState.fifth > 5) ? --prevState.fifth : 5;
                    return {
                        first: _first,
                        second: _second,
                        third: _third,
                        fourth: _fourth,
                        fifth: _fifth,
                        idxFrom: _first === 1 ? 0 : _first * 19 + 1,
                        idxTo: _first === 1 ? 19 : _first * 19 + 19
                    }
                })
                break;


            case "next":
                this.setState(prevState => {
                    let _first, _second, _third, _fourth, _fifth;
                    _first = (prevState.first != null) && (prevState.first < this.props.pageCount - 4) ? ++prevState.first : this.props.pageCount - 4;
                    _second = (prevState.second != null) && (prevState.second < this.props.pageCount - 3) ? ++prevState.second : this.props.pageCount - 3;
                    _third = (prevState.third != null) && (prevState.third < this.props.pageCount - 2) ? ++prevState.third : this.props.pageCount - 2;
                    _fourth = (prevState.fourth != null) && (prevState.fourth < this.props.pageCount - 1) ? ++prevState.fourth : this.props.pageCount - 1;
                    _fifth = (prevState.fifth != null) && (prevState.fifth < this.props.pageCount) ? ++prevState.fifth : this.props.pageCount;
                    return {
                        first: _first,
                        second: _second,
                        third: _third,
                        fourth: _fourth,
                        fifth: _fifth,
                        idxFrom: _first === 1 ? 0 : _first * 19 + 1,
                        idxTo: _first === 1 ? 19 : _first * 19 + 19

                    }
                })
                break;




            default:
                this.setState(prevState => {
                    return {
                        idxFrom: 0,
                        idxTo: 19,
                        first: 1,
                        second: 2,
                        third: 3,
                        fourth: 4,
                        fifth: 5
                    }
                })
        }

    }


    render() {



        let filteredCards = this.props.characters.filter(character => {
            return character.name ? character.name.toLowerCase().indexOf(this.props.searchBoxValue.toLowerCase()) !== -1 : null;
        });


        return (
            <div style={{ textAlign: "center" }}>

                {/* //show the paginator only when there is no filtering (searchbox value) in place */}
                {this.props.searchBoxValue.length === 0 ?
                    <Paginator
                        pageCount={this.props.pageCount}
                        characterCount={this.props.characterCount}
                        paginatorHandler={this.paginatorHandler}
                        first={this.state.first}
                        second={this.state.second}
                        third={this.state.third}
                        fourth={this.state.fourth}
                        fifth={this.state.fifth}
                    />
                    :
                    null


                }


                <div className="Home">
                    {
                        //show the limited amount of cards only when there is no filtering (searchbox value) in place
                        //otherwise show everything
                        this.props.searchBoxValue.length === 0 ?
                            filteredCards.map((character, idx) => {
                                return idx >= this.state.idxFrom && idx <= this.state.idxTo ? <Card key={character.id} character={character} /> : null;
                            })
                            :
                            filteredCards.map((character, idx) => {
                                return <Card key={character.id} character={character} />;
                            })
                    }
                </div>
            </div>
        )

    }

}


Home.propTypes = {
    characters: PropTypes.array.isRequired,
    pageCount: PropTypes.number,
    characterCount: PropTypes.number,
    searchBoxValue: PropTypes.string
}


export default Home;
