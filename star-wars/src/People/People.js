import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import starwarsimages from '../json/starwars-characters.json';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {},
            loading: true
        };
    }

    getPersonImage = (name) => {
        for (let i=0; i<starwarsimages.length; i++) {
            if (starwarsimages[i].name === name) {
                return starwarsimages[i].image;
            }
        }
    }

    getPersonId = (url) => {
        if (url[url.length - 3] === '/' ) {
            return url.slice(url.length-2, url.length-1).toString();
        }
        else {
            return url.slice(url.lengh-3, url.length-1).toString();
        }
    }

    render() {
        const {
            name,
            url
        } = this.props.person;

        const linkTo = '/people/' + getPersonId(url);

        return (
           <div className='People' >
                <div className='People-image-container'>
                   <img src={this.getPersonImage(name)} alt=""/> 
                </div>
                <Link to={linkTo}>{name} </Link>
           </div>
        )
    }
}

People.propTypes = {
    person: PropTypes.instanceOf(Object).isRequired;
};

export default People;