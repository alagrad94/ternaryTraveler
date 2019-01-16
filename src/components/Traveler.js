import { Route } from 'react-router-dom';
import React, { Component } from "react";
// import NavBar from "./nav/NavBar"
// import ApplicationViews from "./ApplicationViews"

import PointsOfInterest from "./pointsofinterest/PointsOfInterest"

import "./Traveler.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Traveler extends Component {

    constructor() {
        super();

        this.state = {

            // destinations: [],
            pointsofinterest: []

        }
    }

    componentDidMount () {

        fetch("http://localhost:5002/pointsofinterest?_expand=destination")
        .then(r => r.json())
        .then(pointsofinterest => {this.setState({pointsofinterest: pointsofinterest})})
        // .then(() => fetch("http://localhost:5002/pointsofinterest")
        // .then(r => r.json()))
        // .then(pointsofinterest => {this.setState({pointsofinterest: pointsofinterest})})
    }

    render() {
        return (
            <React.Fragment>

               <Route exact path="/" render={(props) => {
                    return <PointsOfInterest pointsofinterest={this.state.pointsofinterest}/>
                }} />
            </React.Fragment>
        )
    }
}
export default Traveler