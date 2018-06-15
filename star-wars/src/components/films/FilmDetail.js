import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../widgets/spinner/Spinner';
import './FilmDetail.css';

class FilmDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}, loading: true
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

        {!this.state.loading &&
          <article>
            <h1 className='film-detail__header'>
              {this.state.data.title}
            </h1>

            <p className='film-detail__crawl'>{this.state.data.opening_crawl}</p>
          </article>
        }
      </div>
    );
  }
}

FilmDetail.propTypes = {
  data: PropTypes.shape({
      title: PropTypes.string,
      opening_crawl: PropTypes.string
  })
};

export default FilmDetail
