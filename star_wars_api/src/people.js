import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class People extends Component {   

  render() {
    if (this.props.redirect) {
      return <Redirect to='/card' />
    }

    return (
      <Router>  
            <div className='container'>
                {this.props.loading ? <h1> Loading... </h1> : null} 
                {this.props.error ? <p> {this.props.error} </p> : null} 
                {this.props.people.people.map((people, id) => {
                    return (
                        <div className='smallContainer' key={id}>    
                        <Link to={`/card/${people.name}`} onClick={(e) =>
                                    this.props.showCharacter(e, people)}>
                            <span className='card'>
                                <p>{people.name}</p>
                            </span>
                        </Link>
                        </div>
                    )
                })}
            </div>
        </Router>
    )
  }
}

export default People;
