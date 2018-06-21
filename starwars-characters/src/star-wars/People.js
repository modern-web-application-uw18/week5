
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './People.css';
import starwarsimages from '../json/starwars-characters.json';

class People extends Component {

  getImage = (name) => {
    const starwarsLogo = "https://vignette.wikia.nocookie.net/starwars/images/4/42/StarWarsOpeningLogo.svg/revision/latest/scale-to-width-down/640?cb=20120211213511";
    for (let i=0; i < starwarsimages.length; i++) {
      if (starwarsimages[i].name === name) {
        return starwarsimages[i].image;
      }
    }
    return starwarsLogo;
  }

  getId = (url) => {
    return (url[url.length-3] === '/') ?
              url.slice(url.length-2, url.length-1).toString() :
              url.slice(url.length-3, url.length-1).toString();
  }

  render() {

    const {
      name,
      url
    } = this.props.person;

    const linkTo = "/people/" + this.getId(url);

    return (
      <div className="People" >
        <div className="People-image-container" >
          <img src={this.getImage(name)} alt="" />
        </div>
        <Link to={linkTo}>{name}</Link>
      </div>
    );
  }
}

People.propTypes = {
  person: PropTypes.instanceOf(Object).isRequired,
};

export default People;
