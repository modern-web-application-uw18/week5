import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './NavigationItem.css';

const navigationItem = ( props ) => (
    <li className="NavigationItem">
        <NavLink to={props.link} exact={props.exact}>{props.children}</NavLink>
    </li>
);

navigationItem.propTypes = {
    link: PropTypes.string.isRequired
}

export default navigationItem;