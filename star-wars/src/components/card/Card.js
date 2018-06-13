import React, { Component } from 'react';

class Card extends Component {

  render() {
    const standardOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };

    return (
      <div key={this.props.index} className='loop'>
        <p>
          Movie Title: {this.props.data.title}
        </p>
        <p>
          Release Date: {new Date(this.props.data.release_date).toLocaleString('en-us', standardOptions)}
        </p>
      </div>
    );
  }
}

export default Card;
