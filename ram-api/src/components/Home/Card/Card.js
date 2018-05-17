import React from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const card = (props) => {

    return (


        <NavLink to={'/detail/'+props.character.id} exact={true}>
            <div className="Card" style={{ backgroundImage: `url(${props.character.image})` }}>
                <span className="Name">
                    {props.character.name}

                </span>
            </div>
        </NavLink>


    )
}

card.propTypes = {
    character: PropTypes.object.isRequired
}

export default card;