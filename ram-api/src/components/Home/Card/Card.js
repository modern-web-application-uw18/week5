import React from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import MdStar from 'react-icons/lib/md/star';

const card = (props)=> {


    


        return (
            <NavLink to={'/detail/' + props.character.id} exact={true}>
                <div className="Card" style={{ backgroundImage: `url(${props.character.image})` }}>
                    <span>
                        {JSON.parse(localStorage.getItem("favoriteIds")).indexOf(props.character.id) !== -1 ? <MdStar className="CardStar"/> : false}
                    </span>
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