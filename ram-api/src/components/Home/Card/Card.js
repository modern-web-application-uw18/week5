import React, { Component } from 'react';
import './Card.css';


const card = (props) => {

    return(
        <div className="Card">{props.name}</div>
    )
}


export default card;