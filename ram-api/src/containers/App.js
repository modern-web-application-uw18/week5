import React, { Component } from 'react';
import Layout from './Layout/Layout';



class App extends Component {
  render() {

    //initialize localstorage to hold favorite character IDs in an array
    if (!localStorage.getItem("favoriteIds")) {
      localStorage.setItem("favoriteIds", "[]");
    }

    return (
      <div>
        <Layout />
      </div>
    );
  }
}

export default App;
