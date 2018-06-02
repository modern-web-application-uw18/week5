import React, { Component } from 'react';

class Planets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: []
        }
    }

    componentDidMount() {
        Promise.all([
            fetch('https://swapt.co/api/planets/1')
                .then(response => response.json()),
            fetch('https://swapt.co/api/planets/2')
                .then(response => response.json()),
            fetch('https://swapt.co/api/planets/3')
                .then(response => response.json())
        ]).then(planetsFromApi => {
            this.setState((prevState, props) => {
                return {
                    planets: planetsFromApi
                }
            })
        });
    }
}

export default Planets;