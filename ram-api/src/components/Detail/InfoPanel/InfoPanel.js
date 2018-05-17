import React from 'react';
import './InfoPanel.css';
import PropTypes from 'prop-types';
import MdAccessibility from 'react-icons/lib/md/accessibility';
import MdAssignmentInd from 'react-icons/lib/md/assignment-ind';
import MdBugReport from 'react-icons/lib/md/bug-report';
import MdLocationOn from 'react-icons/lib/md/location-on';

const infoPanel = (props) => (

   

    <div className="InfoPanel">


        

        <img src={props.character.image} style={{borderRadius: '5%'}} alt={props.character.name}/>

        <br/>
        <br/>
        <h3><span className="label label-danger">{ props.character.name }</span></h3>
        <br/>

        <span className="InfoPanelDetail"><MdBugReport size={40}  /> {props.character.gender ? props.character.gender : ''}</span>
        <span className="InfoPanelDetail"><MdAssignmentInd size={40} /> {props.character.status ? props.character.status : ''}</span>
        <span className="InfoPanelDetail"><MdAccessibility size={40}  /> {props.character.species ? props.character.species : ''}</span>
        <span className="InfoPanelDetail"><MdLocationOn size={40}  />{props.character.location ? props.character.location.name : ''}</span>


    </div>

)

infoPanel.propTypes = {
    character: PropTypes.object.isRequired
}

export default infoPanel;