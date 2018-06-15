import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'reset-css';
import './App.css';
import Header from './components/header/Header';
import Films from './components/films/Films';
import Characters from './components/characters/Characters';
import CharacterDetail from './components/characters/CharacterDetail';
import FilmDetail from './components/films/FilmDetail';
import NoMatch from './components/noMatch/NoMatch';

class App extends Component {

  render() {
    return (
      <Router>
        <main>

          <Header />

          <section className='body-container'>
            <Switch>
              <Route exact path='/' component={Characters}/>
              <Route exact path='/films' component={Films}/>
              <Route exact path='/films/:filmId' component={FilmDetail} />
              <Route exact path='/characters' component={Characters}/>
              <Route exact path='/characters/:characterId' component={CharacterDetail} />
              <Route component={NoMatch}/>
            </Switch>
          </section>

        </main>
      </Router>
    )
  }
}

export default App;
