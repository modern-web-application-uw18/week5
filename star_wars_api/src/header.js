import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import People from './people.js';
import Card from './card.js';

const propTypes = {
  data: PropTypes.objectOf(PropTypes.number),
  people: PropTypes.string,
}

class Header extends Component   {

  constructor(props) {
  super(props);
  this.state = {
    people: [],
    loading: true,
    redirect: false,
    character: [],
    };
    this.showCharacter = this.showCharacter.bind(this);
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(json => this.setState((prevState) => {
        return {
          people: json.results,
          loading: false,
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

  showCharacter = (event, people) => {
    event.preventDefault();
    console.log("This is the people object in showCharacter", people);
    this.setState((prevState, props) => ({
        character: people, 
        redirect: true
    }));
    setTimeout(() => {
      this.setState((prevState, props) => ({
        redirect: false
      }))
    }, 1000);
  }

  render(){
    return (
      <Router>
        <header className='header'>
          <nav className='nav'>
            <ul>
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='/people'>PEOPLE</Link></li>
              <li><Link to='/card'>CARD</Link></li>
              <Route path='/people' component ={() => (
                <People 
                  people={this.state} 
                  card={Card}
                  redirect={this.state.redirect}
                  showCharacter={this.showCharacter}
                  />
              )}/>
              <Route path={`/card`} component ={(props) => (
                <Card 
                  character={this.state.character}
                />
              )}/>
            </ul>
          </nav>
        </header>
      </Router>
    )
  }
}

Header.propTypes = propTypes;
export default Header;