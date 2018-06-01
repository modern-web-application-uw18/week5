import React, { Component } from 'react';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: {},
            page: 1,
            loading: true
        };
    }

    componentDidMount() {
        this.getCharacters();
    }

    getCharacters = () => {
        fetch('https://swapi.co/api/people/')
          .then(response => response.json())
          .then(data => {
            // console.log(data)
            this.setState((prevState, props) => {
              return {
                results: data,
                loading: false
              };
            
            });
          })
          .catch(error => {
              console.log(error)
              this.setState((prevState, props) => {
                return {
                  loading: false,
                  error: 'Error when retrieving people'
                };
              })
            });
    }

    next = () => {
        this.setState((prevState) => {
            return {
                page: prevState.page + 1
            };
        }, this.getCharacters);
    }

    previous = () => {
        this.setState((prevState) => {
            return {
                page: prevState.page - 1
            };
        }, this.getCharacters);
    }

    render() {
        return (
            <div>
                {this.state.results.results && this.state.results.results.map(
                    character => <p>{character.name}</p>)}
                <button onClick={this.previous}>Prev</button>
                <button onClick={this.next}>Next</button>
                )}
            </div>
        );
    }
}

// ReactDOM.render(<Page />, document.getElementById('root'));