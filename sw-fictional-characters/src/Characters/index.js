import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from './CharacterDetail';
import Home from './Home';
// import Page from './Page';

import { 
    BrowserRouter as Router, Route, Link 
  } from 'react-router-dom';
  
const About = () => <p>This is a Star Wars Characters app.</p>
// const NoMatch = () => <p>404. Website not found.</p>
// const Home = () => <p>Home</p>  

// class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           next: null,
//           previous: null,
//           characters: [],
//           loading: true
//         };
//       }

//       componentDidMount() {
//         fetch('https://swapi.co/api/people/')
//         // fetch('https://swapi.co/api/films/')
//           .then(response => response.json())
//           .then(data => {
//             // console.log(data)
//             this.setState((prevState, props) => {
//               return {
//                 next: data.next,
//                 previous: data.previous,
//                 characters: data.results,
//                 // characters: data.results[0].characters,
//                 loading: false
//               };
//             });
//           })
//           .catch(error => {
//               console.log(error)
//               this.setState((prevState, props) => {
//                 return {
//                   loading: false,
//                   error: 'Error when retrieving characters'
//                 };
//               })
//             });
//       }


//     render() {
//         const next = <Link to="/">{this.state.next}</Link>;
//         const previous = <Link to="/">{this.state.previous}</Link>;
//         const people = this.state.characters.map((character, key) => 
//                 <div key={key} className="grid-col-2">
//                     <div className="content">
//                     <p key={key}> <Link to="/">{character.name}</Link></p>
//                     </div>
//                 </div>
//             );
        
//         return (
//             <div>
//                 <button 
//                     className="btn">Previous</button>
//                 <button 
//                     className="btn">Next</button>
//                 <p>Next people: {next}</p>
//                 <p>Previous people: {previous}</p>
//                 <Link to="/">{this.state.previous}</Link>
//                 <div className='characters-page'>
//                     {this.state.loading ? <p>Loading ...</p> : null}
//                     {this.state.error ? <p>{this.state.error}</p> : null}
//                     {/* <ol> */}
//                     <div className="grid grid-guttered">
//                         {people}
//                     </div>
//                     {/* </ol> */}
//                 </div>
//             </div>
//         );
//     }
// }

// class CharacterDetail extends Component {
//     constructor(props)  {
//         super(props);
//         this.state = { 
//           detail: {},
//           loading: true
//         };
//       }

//       componentDidMount() {
//         // console.log(this.props.match.params.filmId);
//         const characterId = this.props.match.params.characterId;
//         // console.log("Character Id is: ", characterId);

//         fetch(`https://swapi.co/api/people/${characterId}/`)
//         .then(response => response.json())
//         .then(data => {
//         //   console.log(data)
//           this.setState((prevState, props) => {
//             return { 
//                 detail: data, 
//                 loading: false
//             };
//           });
//         })
//         .catch(error => {
//             console.log(error)
//             this.setState((prevState, props) => {
//               return {
//                 loading: false,
//                 error: 'Error when retrieving character details data.'
//               };
//             })
//           });
//         // .catch(error => console.log(error));
//     }

//     render() {
//         console.log(this.props);
//         console.log(this.props.match.params.characterId);
//         const { name, height, mass, 
//                 hair_color, skin_color, 
//                 eye_color, birth_year, gender } = this.state.detail;

//         return (
//             <div>
//                 <h2><u> Character Detail Page </u></h2>
//                 <h4>Name: {name}</h4>
//                 <p>Gender: {gender}</p>
//                 <p>Height: {height}</p>
//                 <p>Weight: {mass}</p>
//                 <p>Eye-color: {eye_color}</p>
//                 <p>Hair-color: {hair_color}</p>
//                 <p>Skin-color: {skin_color}</p>
//                 <p>Birth-year: {birth_year}</p>
//                 {/* <h3>This is film detail.</h3> */}
//             </div>
//         );
//     }
// }


class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
          people: {},
          loading: true
        };
      }

      

    componentDidMount() {
        fetch('https://swapi.co/api/people/')
        // fetch('https://swapi.co/api/films/')
          .then(response => response.json())
          .then(data => {
            // console.log(data)
            this.setState((prevState, props) => {
              return {
                people: data,
                // characters: data.results[0].characters,
                loading: false
              };
            
            });
          })
          .catch(error => {
              console.log(error)
              this.setState((prevState, props) => {
                return {
                  loading: false,
                  error: 'Error when retrieving characters'
                };
              })
            });
      }

    render() {
        
        return (
            <div>
              <div className="sw-body">
               {/* {people} */}
                <Router>
                    <div>
                        <nav>
                          <ul className="sw-navigation-bar">
                            <li> 
                                <Link to="/About">About</Link>
                            </li>
                          </ul>
                        </nav>
                        <h2>Star Wars Characters</h2>
                        
                        <Route exac path="/" component={Home} />
                        <Route path="/About" component={About} />
                        <Route path="/CharacterDetail/:characterId/" component={CharacterDetail} />
                        {/* <Route component={NoMatch} /> */}
        
                    </div>
                 </Router>
              </div>
            </div>
        );
    }
}

export default Characters;