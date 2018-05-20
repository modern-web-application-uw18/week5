import React, { Component } from 'react';
import './Detail.css';
import InfoPanel from './InfoPanel/InfoPanel'
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


//https://github.com/airbnb/enzyme/issues/1112
//export used to be able to test Route
export class  Detail extends Component {
    state = {
        character: {}
    }
    componentDidMount() {

        fetch('https://rickandmortyapi.com/api/character/' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState(prevState => {
                    return {
                        character: { ...data }
                    }
                })
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="Detail">
                <InfoPanel  character={this.state.character} favAddRemoveHandler={this.props.favAddRemoveHandler} />
            </div>
        )
    }
}

Detail.propTypes = {
    favAddRemoveHandler: PropTypes.func
}

export default withRouter(Detail);
