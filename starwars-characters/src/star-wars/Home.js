import React, { Component } from 'react';
import People from './People';
import './Home.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: [],
            currentPage: 1,
            next: '',
            previous: '',
            loading: true
        };
    }

    loadPeople = () => {
        let url = `https://swapi.co/api/people/?page=${this.state.currentPage}`;
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState((prevState) => {
                return {
                    people: json.results,
                    previous: json.previous,
                    next: json.next,
                    loading: false
                };
            }))
            .catch((error) => {
                this.setState((prevState) => {
                    return {
                        loading: false,
                        error: 'Error retrieving people'
                    };
                })
            });
    }
    
    componentDidMount() {
        this.loadPeople();
    }

    nextPage = () => {
        this.setState((prevState) => {
          return { currentPage: prevState.currentPage + 1 };
        }, this.loadPeople);
    }
    
    previousPage = () => {
        this.setState((prevState) => {
          return { currentPage: prevState.currentPage - 1 };
        }, this.loadPeople);
    }
    
    render() {

        return (
            <div className="Home">
                {this.state.loading ? <h1>Loading...</h1> : null}
                {this.state.error ? <p>{this.state.error}</p> : null}
                <div className="Home-flex-container" >
                    {this.state.people.map((person, index) => {
                        return <People key={index} person={person} />;
                    })}
                </div>
                <div className="Home-page-link-container">
                    <div className="Home-page-link">
                        <button onClick={this.state.previous !== null ? this.previousPage : null}
                                className={this.state.previous !== null ? 'Home-Green-button' : 'Home-Gray-button'}>Previous</button>
                    </div>
                    <div className="Home-page-link">
                         <button onClick={this.state.next !== null ? this.nextPage : null}
                                className={this.state.next !== null ? 'Home-Green-button' : 'Home-Gray-button'}>Next</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;