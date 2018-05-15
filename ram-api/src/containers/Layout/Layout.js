import React, { Component } from 'react';
import './Layout.css';
import Header from '../../components/Header/Header';
import MainStage from '../../components/MainStage/MainStage';

class Layout extends Component {
    render() {
        return (
            <div className="Layout">
                <Header />
                <MainStage />                    
            </div>
        )       
    }
}

export default Layout;
