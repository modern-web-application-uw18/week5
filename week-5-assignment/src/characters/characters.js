import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';

class Characters extends Component {
    constructor(props) {
      super(props);
      this.state = {
        results: {},
        page: 1,
    }
}
    componentWillMount() {
      this.getCharacters();
    }
    
    getCharacters = () => {
      fetch(`https://swapi.co/api/people/?page=${this.state.page}`)
      .then(response => response.json())
      .then(data => {
        this.setState(() => {
          return {
            results: data
          };
        });
      });
    }
    
    next = () => {
      this.setState((prevState) => {
        return { page: prevState.page + 1 };
      }, this.getCharacters);
    }
    
    previous = () => {
      this.setState((prevState) => {
        return { page: prevState.page - 1 };
      }, this.getCharacters);
    }

    
    render() {
      return (
        <div>
            <div className="list-group"> 
          {this.state.results.results && this.state.results.results.map((person, idx) => <li className="list-group-item list-group-item-action" onClick={this.getId} index={idx} key={idx}>
            <Link to={`character/${person.name}`}>{person.name}</Link>
          </li>)}
          </div>
          <button className="btn btn-primary" onClick={this.previous}>Previous</button>
          <button className="btn btn-danger"onClick={this.next}>Next</button>
          </div>
       );
    }
  }

  export default Characters;