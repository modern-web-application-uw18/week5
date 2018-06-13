import React, { Component } from 'react';
import 'reset-css';
import Spinner from './components/widgets/spinner/Spinner';
import Card from './components/card/Card';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [], loading: true
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
    .then(response => response.json())
    .then(data => {
      this.setState((prevState, props) => {
        return { data: data.results, loading: false };
      });
    })
    .then(() => console.log(this.state.data))
    .catch(error => console.log(error))
    .finally(() => console.log('always winning'));
  }

  render() {
    return (
      <div className='parent'>

        {this.state.loading &&
          <Spinner />
        }

        {this.state.data.map (
          (data, index) =>
            <Card data={data} index={index}/>
          )
        }
      </div>
    );
  }
}

export default App;
