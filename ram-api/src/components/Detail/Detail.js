import React, { Component } from 'react';
import './Detail.css';
import InfoPanel from './InfoPanel/InfoPanel'


class Detail extends Component {
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
                <InfoPanel  character={this.state.character} />
            </div>
        )
    }
}

export default Detail;
