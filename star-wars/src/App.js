import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'reset-css';
import './App.css';
import Films from './components/films/Films';
import Characters from './components/characters/Characters';
import CharacterDetail from './components/characters/CharacterDetail';
import FilmDetail from './components/films/FilmDetail';
import NoMatch from './components/noMatch/NoMatch';

class App extends Component {

  render() {
    return (
      <Router>
        <section>

          <header>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/films">Films</Link></p>
          </header>

          <Switch>
            <Route exact path='/' component={Characters}/>
            <Route exact path='/films' component={Films}/>
            <Route exact path='/films/:filmId' component={FilmDetail} />
            <Route exact path='/characters' component={Characters}/>
            <Route exact path='/characters/:characterId' component={CharacterDetail} />
            <Route component={NoMatch}/>
          </Switch>

        </section>
      </Router>
    )
  }
}

export default App;
