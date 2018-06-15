import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {

  render() {
    const url = `films/${this.props.data.url.split('/')[5]}`;

    return (
      <div>
        <Link className='character-list' to={url}>{this.props.data.title}</Link>
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
