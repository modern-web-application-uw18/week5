import React, { Component } from 'react';
import Spinner from '../widgets/spinner/Spinner';
import Button from '../widgets/button/Button';
import Card from './Card';
import './Characters.css';

class Characters extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [], loading: true, paging: 1
    };
  }

  nextCharacterResult = () => {
    this.setState((prevState, props) => {
      return { paging: prevState.paging + 1, loading: true };
    }, this.updateApiState);
  }

  previousCharacterResult = () => {
    this.setState((prevState, props) => {
      return { paging: prevState.paging - 1, loading: true };
    }, this.updateApiState);
  }

  updateApiState = () => {
    fetch(`https://swapi.co/api/people/?page=${this.state.paging}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return Promise.reject('something went wrong!')
       }
    })
    .then(data => {
      this.setState((prevState, props) => {
        return { data: data.results, loading: false};
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
      <div className='parent'>

        {this.state.loading &&
          <Spinner />
        }

        {!this.state.loading && this.state.data.map (
          (data, index) =>
            <Card data={data} key={index} paging={this.state.paging}/>
          )
        }

        <div className='paging-actions'>
          {!this.state.loading && this.state.paging > 1 &&
           <Button styles='' onClick={this.previousCharacterResult} text='Previous Characters' />
          }

          {!this.state.loading && this.state.paging < 9 &&
           <Button styles='' onClick={this.nextCharacterResult} text='Next Characters' />
          }
        </div>

      </div>
    );
  }
}

export default Characters
