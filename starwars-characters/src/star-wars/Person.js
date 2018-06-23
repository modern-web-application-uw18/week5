import React, { Component } from 'react';
import './Person.css';
import './Home.css';
import starwarsimages from '../json/starwars-characters.json';

class Person extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: {},
            loading: true
        };
    }

    getImage = (name) => {
        const starwarsLogo = "https://vignette.wikia.nocookie.net/starwars/images/4/42/StarWarsOpeningLogo.svg/revision/latest/scale-to-width-down/640?cb=20120211213511";
        for (let i=0; i < starwarsimages.length; i++) {
          if (starwarsimages[i].name === name) {
            return starwarsimages[i].image;
          }
        }
        return starwarsLogo;
      }
    
    componentDidMount() {
        const url = `https://swapi.co/api/people/${this.props.match.params.personId}`;
        console.log(this.props);
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState((prevState) => {
                return {
                    person: json,
                    loading: false
                };
            }))
            .catch((error) => {
                this.setState((prevState) => {
                    return {
                        loading: false,
                        error: 'Error retrieving person'
                    };
                })
            });
    }

    render() {

         const {
            name,
            height,
            mass,
            hair_color,
            skin_color,
            eye_color,
            birth_year,
            gender
        } = this.state.person;

        return (
            <div className="Person">
                {this.state.loading ? <h1>Loading...</h1> : null}
                {this.state.error ? <p>{this.state.error}</p> : null}
                <h2>{name}</h2>
                <div className="Person-flex-container">
                    <div className="Person-image-container">
                        <img src={this.getImage(name)} alt="" />
                    </div>
                    <div className="Person-stats">
                        <div><strong>Gender: </strong>{gender}</div>
                        <div><strong>Birth Year: </strong>{birth_year}</div>
                        <div><strong>Height: </strong>{height} cm</div>
                        <div><strong>Weight: </strong>{mass} kg</div>
                        <div><strong>Hair Color: </strong>{hair_color}</div>
                        <div><strong>Skin Color: </strong>{skin_color}</div>
                        <div><strong>Eye Color: </strong>{eye_color}</div>
                        <br></br>
                    </div>
                </div>
                <div className = "Person-button-container">
                    <button onClick={this.props.history.goBack}
                                className="Person-Green-button">Back</button>
                </div>
            </div>
        );
    }
}
  
export default Person;

