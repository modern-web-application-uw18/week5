import React, { Component } from 'react';
import './InfoPanel.css';
import PropTypes from 'prop-types';
import MdAccessibility from 'react-icons/lib/md/accessibility';
import MdAssignmentInd from 'react-icons/lib/md/assignment-ind';
import MdBugReport from 'react-icons/lib/md/bug-report';
import MdLocationOn from 'react-icons/lib/md/location-on';
import MdStarBorder from 'react-icons/lib/md/star-border';
import MdStar from 'react-icons/lib/md/star';

class InfoPanel extends Component {

    state = {
        clicked: false
    }


    starHandler = ()=> {
        this.props.favAddRemoveHandler(this.props.character.id);
        let clicked = !this.state.clicked;
        this.setState(prevState => {
            return {
                clicked: clicked
            }
        })

    }


    render() {

        return (
            <div className="InfoPanel" >
                <img src={this.props.character.image} style={{ borderRadius: '5%' }} alt={this.props.character.name} />
                <div className="Star" onClick={this.starHandler}>{this.state.clicked ? <MdStar style={{color:'#e09900'}}/> : <MdStarBorder />}</div>
                <br />
                <br />
                <h3><span className="label label-danger">{this.props.character.name}</span></h3>
                <br />
                <span className="InfoPanelDetail"><MdAccessibility size={40} /> {this.props.character.gender ? this.props.character.gender : ''}</span>
                <span className="InfoPanelDetail"><MdAssignmentInd size={40} /> {this.props.character.status ? this.props.character.status : ''}</span>
                <span className="InfoPanelDetail"><MdBugReport size={40} /> {this.props.character.species ? this.props.character.species : ''}</span>
                <span className="InfoPanelDetail"><MdLocationOn size={40} />{this.props.character.location ? this.props.character.location.name : ''}</span>
            </div>
        )
    }

}

InfoPanel.propTypes = {
    character: PropTypes.object.isRequired,
    favAddRemoveHandler: PropTypes.func
}


export default InfoPanel;