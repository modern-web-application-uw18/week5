import React, { Component } from 'react';
import Spinner from '../widgets/spinner/Spinner';

class FilmDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], loading: true
    };
  }

  componentDidMount() {
    const filmId = this.props.match.params.filmId;

    fetch(`https://swapi.co/api/films/${filmId}`)
    .then(response => response.json())
    .then(data => {
      this.setState((prevState, props) => {
        return { data: data, loading: false };
      });
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.loading &&
          <Spinner />
        }
        <p>{this.state.data.title}</p>
        <p>{this.state.data.opening_crawl}</p>
      </div>
    );
  }
}

export default FilmDetail
