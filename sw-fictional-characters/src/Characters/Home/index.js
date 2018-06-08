import React, { Component } from 'react';
import CharacterImage from '../images/swcharacter.png';
// import CharacterImage from 'public/images/swcharacter.png';
import { 
     Link 
  } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        url: null,
        next: null,
        previous: null,
        characters: [],
        people: {},
        loading: true
      };
    }

  componentDidMount() {
    this.getCharacters();
  }

  getPageNo = () => {
    this.setState((prevState, props) => {
        const next = prevState.next;
        var page = next.split("=");
        // console.log("Page length: ", page.length)
        // console.log("First Page: ", page[0]);
        // console.log("Second Page: ", page[1]);
        var nextValue = Number(page[page.length - 1]);
        // console.log("Next page is: ", nextValue);
  
        if (next)  {
          nextValue = Number(nextValue) + 1;
        } else {
          nextValue = 1;
        }
        
        console.log("Next page is: ", nextValue);
        const nextpage = page[0] + '=' + (nextValue + 1);
        // console.log("The next-page is: ", nextpage);
        // console.log("Previous Page is: ", next);
        return {
          previous: next,
          next: nextpage,
          url: next
        };
      }, this.getCharacters);
  }


  getCharacters = () => {
    let nextUrl = 'https://swapi.co/api/people/';
    // const characterId = this.state.people.results[].id;
    // console.log("Home Character Id is: ", charpageNoacterId);
    if (this.state.url) 
    {
      nextUrl = this.state.url;
    }

    fetch(nextUrl)
    // fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        this.setState((prevState, props) => {
          return {
            people: data,
            next: data.next,
            previous: data.previous,
            characters: data.results,
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

  nextPage = () => {
    this.setState((prevState, props) => {
        const next = prevState.next;
        var page = next.split("=");
        // console.log("Page length: ", page.length)
        // console.log("First Page: ", page[0]);
        // console.log("Second Page: ", page[1]);
        var nextValue = Number(page[page.length - 1]);
        // console.log("Next page is: ", nextValue);

        if (next)  {
        nextValue = Number(nextValue) + 1;
        } else {
        nextValue = 1;
        }
        
        // console.log("Next page is: ", nextValue);
        const nextpage = page[0] + '=' + (nextValue + 1);
        // console.log("The next-page is: ", nextpage);
        // console.log("Previous Page is: ", next);
        return {
        previous: next,
        next: nextpage,
        url: next
        };
    }, this.getCharacters);
}

  prevPage = () => {
    this.setState((prevState, props) => {
      const prev = prevState.previous;
      var page = prev.split("=");

      var prevValue = Number(page[page.length - 1]);

      if (prev)  {
        prevValue = Number(prevValue);
      } else {
        prevValue = 1;
      }
      
      // console.log("Next page is: ", prevValue);
      const prevpage = (prevValue > 1) ? page[0] + '=' +  (prevValue - 1) : prev;
      // console.log("The next-page is: ", prevpage);
      // console.log("Previous Page is: ", prev);
      return {
        next: prev,
        previous: prevpage,
        url: prev
      };
    }, this.getCharacters);
  }

  getId = (character) => {
    var findId = character.split("/");
    const id = Number(findId[findId.length - 2]);
    return id;
  }



  render() {
    // this.getPageNo();
    //   const next = <Link to="/">{this.state.next}</Link>;
    //   const previous = <Link to="/">{this.state.previous}</Link>;
      const people = this.state.characters.map((character, key) => 
            <div key={key} className="grid-col-2">
                <Link to={`/CharacterDetail/${this.getId(character.url)}/`}>
                  <div className="content">
                    <img src={CharacterImage} className="sw-character"  alt="star wars character" />
                    <p key={key}>{character.name}</p>
                  </div>
                </Link>
            </div>
          );

      return (
          <div>
             <div className="nav-buttons">
              <button onClick={this.prevPage} className="btn prev-button">Previous</button>
              <button onClick={this.nextPage} className="btn next-button">Next</button>
             </div>
              {/* <p>Next people: {next}</p> */}
              {/* <p>Previous people: {previous}</p> */}
              {/* <Link to="/">{this.state.previous}</Link> */}
              <div className='characters-page'>
                  {this.state.loading ? <p>Loading ...</p> : null}
                  {this.state.error ? <p>{this.state.error}</p> : null}
                  <div className="grid grid-guttered">
                      {people}
                  </div>
              </div>
          </div>
      );
  }
}

export default Home;