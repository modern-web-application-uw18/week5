import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../widgets/spinner/Spinner';

class CharacterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], loading: true
    };
  }

  componentDidMount() {
    const characterId = this.props.match.params.characterId;

    fetch(`https://swapi.co/api/people/${characterId}`)
    .then(response => response.json())
    .then(data => {
      this.setState((prevState, props) => {
        return {
          data: data,
          loading: false
        };
      });
    })
    .then(() => console.log(this.state.data))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.loading &&
          <Spinner />
        }
        {this.state.data.name}
      </div>
    );
  }
}

CharacterDetail.propTypes = {
  data: PropTypes.shape({
      name: PropTypes.string
  })
};

export default CharacterDetail
