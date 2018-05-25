import React, { Component } from 'react';
import PropTypes from 'prop-types'; //needed? 
//import App from './App.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import People from './people.js';

const propTypes = {
    data: PropTypes.objectOf(PropTypes.number),
    people: PropTypes.string,
} 

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            loading: true
        };
    }

componentDidMount() {
    fetch('https://swapi.co/api/people/')
        .then(response => response.json())
        .then(json => this.setState((prevState) => {
            return {
                people: json.results,
                loading: false
            }
        }))
        .catch((error) => {
            this.setState((prevState) => {
                return {
                    loading: false,
                    error: 'Error when retrieving People'
                }
            });
        });
}

render() {
    const characters = []; 
    for (var i = 0; i < this.state.people.length; i++) {
        characters.push(this.state.people[i]);
    }
    return ( 
        <Router>
            <div className='container'>
                {this.state.loading ? <h1> Loading... </h1> : null} 
                {this.state.error ? <p> {this.state.error} </p> : null} 
                {characters.map((people, id) => {
                    return (
                        <div className='smallContainer' key={id}>    
                            <Link to={`/people/${people.name}`} key={id}> 
                                <span className='card'>
                                    <p>{people.name}</p>
                                </span>
                            </Link> 
                            <Route exact path={`/people/${people.name}`} component= {People} />
                            {/* <Route exact path={`/people/${people.name}`} component={People} />  */}
                            {/* <Route exact path={`/people/${people.name}`} render={(props) => 
                                <People {...props} /> } />  */}
                            {/* <Route path={`/people/${people.name}`} 
                                    render={({ match }) => (
                                        <People people={this.match.people} />
                                )} /> */}
                        </div>
                    )
                })}
            </div>
        </Router> 
        );
    }
}

Card.propTypes = propTypes;
export default Card;
