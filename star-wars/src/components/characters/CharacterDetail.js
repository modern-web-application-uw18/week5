import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CharacterDetail.css';
import Spinner from '../widgets/spinner/Spinner';

class CharacterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], loading: true, characterId: parseInt(this.props.match.params.characterId, 10)
    };
  }

  nextCharacter = () => {
    this.setState((prevState, props) => {
      return { characterId: prevState.characterId + 1, loading: true };
    }, this.updateApiState);
  }

  previousCharacter = () => {
    this.setState((prevState, props) => {
      return { characterId: prevState.characterId - 1, loading: true };
    }, this.updateApiState);
  }

  updateApiState = () => {
    fetch(`https://swapi.co/api/people/${this.state.characterId}`)

    .then(response => response.json())

    .then(data => {
      this.setState((prevState, props) => {
        return { data: data, loading: false};
      });
    })

    .then(() => console.log(this.state.data))
    .catch(error => console.log(error));
  }

  componentDidMount() {
    this.updateApiState();
  }

  render() {
    return (
      <div>
        {this.state.loading &&
          <Spinner />
        }

        {!this.state.loading &&
          <article className='character-detail'>
            <h1 className='character-detail__header'>
              {this.state.data.name}
            </h1>
            <div className='character-detail__details'>
              <div className='character-detail__spec'>Birth year:</div>
              <div className='character-detail__data'>{this.state.data.birth_year}</div>
            </div>
            <div className='character-detail__details'>
              <div className='character-detail__spec'>Height:</div>
              <div className='character-detail__data'>{this.state.data.height} centimeters</div>
            </div>
            <div className='character-detail__details'>
              <div className='character-detail__spec'>Mass:</div>
              <div className='character-detail__data'>{this.state.data.mass} kilograms</div>
            </div>

            <div className='paging-actions'>
              <Link className='btn' to={`/characters/${this.state.characterId - 1}`} onClick={this.previousCharacter}>Previous</Link>
              <Link className='btn' to={`/characters/${this.state.characterId + 1}`} onClick={this.nextCharacter}>Next</Link>
            </div>
          </article>
        }
      </div>
    );
  }
}

CharacterDetail.propTypes = {
  data: PropTypes.shape({
      name: PropTypes.string,
      birth_year: PropTypes.number,
      height: PropTypes.number,
      mass: PropTypes.number
  })
};

export default CharacterDetail
