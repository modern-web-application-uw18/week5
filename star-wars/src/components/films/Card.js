import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {

  render() {
    const standardOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };

    const url = `films/${this.props.data.url.split('/')[5]}`;

    return (
      <div>
        <p>
          ID: {this.props.data.episode_id} | {this.props.data.title}
        </p>

        <p><Link to={url}>{this.props.data.title}</Link></p>

        <p>
          Release Date: {new Date(this.props.data.release_date).toLocaleString('en-us', standardOptions)}
        </p>
      </div>
    );
  }
}

Card.propTypes = {
  data: PropTypes.shape({
      episode_id: PropTypes.number,
      release_date: PropTypes.string,
      title: PropTypes.string
  })
};

export default Card;
