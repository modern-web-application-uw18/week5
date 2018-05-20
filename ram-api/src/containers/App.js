import React, { Component } from 'react';
import Layout from './Layout/Layout';

    //initialize localstorage to hold favorite character IDs in an array
    if (!localStorage.getItem("favoriteIds")) {
      localStorage.setItem("favoriteIds", "[]");
    }

class App extends Component {
  render() {



    return (
      <div>
        <Layout />
      </div>
    );
  }
}

export default App;
