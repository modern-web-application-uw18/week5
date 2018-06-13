import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'reset-css';
import './App.css';
import Spinner from './components/widgets/spinner/Spinner';
import Films from './components/films/Films';
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
            <p><Link to="/404">404</Link></p>
          </header>

          <Switch>
            <Route exact path='/' component={Spinner}/>
            <Route exact path='/films' component={Films}/>
            <Route exact path='/films/:filmId' component={FilmDetail} />
            <Route component={NoMatch}/>
          </Switch>

        </section>
      </Router>
    )
  }
}

export default App;
