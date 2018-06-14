import React, { Component } from 'react';
import Spinner from '../widgets/spinner/Spinner';
import Card from './Card';

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

        {this.state.data.map (
          (data, index) =>
            <Card data={data} key={index} paging={this.state.paging}/>
          )
        }

         { this.state.paging > 1 &&
           <button onClick={this.previousCharacterResult}>Previous Characters</button>
         }

         { this.state.paging < 9 &&
           <button onClick={this.nextCharacterResult}>Next Characters</button>
         }

      </div>
    );
  }
}

export default Characters
