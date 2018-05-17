import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './MainStageRouter.css';
import Home from '../Home/Home';
import Detail from '../Detail/Detail';
import PropTypes from 'prop-types';

class MainStageRouter extends Component {
    render() {
        return (
            <div className="MainStageRouter">
                <Switch>
                    <Route exact path="/" render={() => {
                        return (<Home searchBoxValue={this.props.searchBoxValue} />)
                    }} />

                    <Route exact path="/detail/:id" render={() => {
                        return (<Detail favAddRemoveHandler={this.props.favAddRemoveHandler} />)
                    }} />


                    <Redirect exact from="/detail" to="/" />
                </Switch>
            </div>
        )
    }
}

MainStageRouter.propTypes = {
    searchBoxValue: PropTypes.string,
    favAddRemoveHandler: PropTypes.func
}

export default MainStageRouter;
