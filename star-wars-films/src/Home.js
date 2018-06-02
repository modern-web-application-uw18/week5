import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, ListItemLink} from 'react-router-dom';
import PersonDetail from './PersonDetail';
import Characters from './characters.json';
import Avatar, { AvatarItem } from '@atlaskit/avatar';
import { Container, Row, Col } from 'react-grid-system';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          people: []
        };
      }

      componentDidMount() {
        fetch('https://swapi.co/api/people')
        .then(response => response.json())
        .then(data => {
          this.setState((prevState, props) => {
            return {
              people: data.results,
              characters: this.props.Characters,
            };
          });
        })
        .catch(error => console.log(error));
      }

    render() {
        const charImage = Characters.characters;
        console.log(charImage);
      return (
        <Router>
        <div>
          <h1>Star Wars Characters</h1>
          <h5>Click on any of the following for a bio</h5>
          <br/>
          <Container>
            <Row align="center">
              
                {charImage.character.map(
                  character =>
                  <Col ><AvatarItem avatar={<Avatar src={character.thumbnail} size="large" appearance="square"/>}/></Col>
                )}
              
            </Row>
            <Row align="center" >
              
                {this.state.people.map(
                people => 
                <Col ><Link to={`/people/${people.name}`}><h5>{people.name}</h5></Link></Col>
                )}
              
            </Row>
            </Container>
        </div>
        </Router>
      )
    }
  }

export default Home;