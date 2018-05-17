import React, { Component } from 'react';
import './SearchBox.css';
import PropTypes from 'prop-types';

class SearchBox extends Component {

    state = {
        searchBoxValue: ''
    }


    handleChange = (e) => {
        let value = e.target.value;
        this.setState((prevState) => {
            this.props.searchHandler(value);
            return { searchBoxValue: value}
        });    
    }


    render() {

        return (
            <div className="SearchBox">
                <div className="row">
                    <div className="col-md-12">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Filter by character name..." value={this.state.searchBoxValue} onChange={this.handleChange} />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}



SearchBox.propTypes = {
    searchHandler: PropTypes.func.isRequired
}

export default SearchBox;