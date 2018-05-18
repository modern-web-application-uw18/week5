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
        clicked: JSON.parse(localStorage.getItem("favoriteIds")).indexOf(this.props.character.id) !== -1 ? true : false
    }





    starHandler = () => {
        this.props.favAddRemoveHandler(this.props.character.id);
        let clicked = !this.state.clicked;
        this.setState(prevState => {
            return {
                clicked: clicked
            }
        })

    }

    componentDidUpdate(prevProps, prevState) {
        let storageClicked = JSON.parse(localStorage.getItem("favoriteIds")).indexOf(this.props.character.id) !== -1 ? true : false;
        if (prevState.clicked !== storageClicked) {
            this.setState((prevState) => {
                return {
                    clicked: storageClicked
                }
            })
        }
    }


    render() {



        return (
            <div className="InfoPanel" >
                <img src={this.props.character.image} style={{ borderRadius: '5%' }} alt={this.props.character.name} />

                {this.state.clicked ?
                    <div className="Star" onClick={this.starHandler}><MdStar style={{ color: '#e09900' }} /> </div>
                    :
                    <div className="Star" onClick={this.starHandler}><MdStarBorder /> </div>}

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