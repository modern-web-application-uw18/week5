import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Characters from './characters.json';

class PersonDetail extends Component {
    constructor(props) {
      super(props);
      this.state = {
        personDetail: [],
        personImage: []
      };
    }

    componentDidMount() {
        const personID = this.props.match.params.personID;
        const personImage = function getImage() {
          for(var i = 0; i < undefined; i++) {
            if(Characters.characters.character[i].personID === this.props.match.params.personID) {
              return {
                personImage: Characters.characters.character[i]
             }
            }
          }
       }
        fetch(`https://swapi.co/api/people/?search=${personID}`)
        .then(response => response.json())
        .then(data => {
          console.log("Data ", data);
          this.setState((prevState, props) => {
            return {
              personDetail: data.results[0]
            };
          });
        })
        .catch(error => console.log(error));
      }
    
      render() {
          const { name, birth_year, eye_color, gender, hair_color, skin_color } = this.state.personDetail;
          console.log(this.props.match.params.personID);
          const { image } = this.state.personImage;
          console.log(this.state.personImage);
        return (
          <div>
              <h2>{this.state.personDetail.name}</h2>
              <p>Birth Year: {birth_year}</p>
              <p>Eye Color: {eye_color}</p>
              <p>Gender: {gender}</p>
              <p>Hair Color: {hair_color}</p>
              <p>Skin Color: {skin_color}</p>
              <img src={image}/>
              <Link to="/"><p>Home</p></Link>
          </div>
        );
      }
  }

  export default PersonDetail