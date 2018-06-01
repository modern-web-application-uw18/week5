import React, { Component } from 'react';

export default class Footer extends Component {

    render() {
        return (
          <footer>
            {this.props.previousURL && <div className="btn" onClick={this.props.fetchURL(this.props.previousURL)} title={this.props.previousURL}>Previous 20</div>}
            {this.props.nextURL && <div className="btn" onClick={this.props.fetchURL(this.props.nextURL)} title={this.props.nextURL}>Next 20</div>}
          </footer>
        );
    }
}
