import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './MainStage.css';
import Home from '../Home/Home';
import Detail from '../Detail/Detail';

class MainStage extends Component {
    render() {
        return (
            <div className="MainStage">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/detail" component={Detail} />
                </Switch>
            </div>
        )
    }
}

export default MainStage;
