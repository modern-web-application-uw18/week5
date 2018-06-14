import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {

  render() {
    const url = `characters/${this.props.data.url.split('/')[5]}`;

    return (
      <div>
        <p><Link to={url}>{this.props.data.name}</Link></p>
      </div>
    );
  }
}

Card.propTypes = {
  data: PropTypes.shape({
      name: PropTypes.string,
      birth_year: PropTypes.string
  })
};

export default Card;
