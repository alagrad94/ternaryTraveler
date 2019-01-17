import { Route } from 'react-router-dom';
import React, { Component } from "react";
// import NavBar from "./nav/NavBar"
// import ApplicationViews from "./ApplicationViews"

import PointsOfInterest from "./pointsofinterest/PointsOfInterest"
import AddPOIForm from "./addPoiForm/addPoiForm"

import "./Traveler.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Traveler extends Component {

    constructor() {
        super();

        this.state = {

            pointsofinterest: []

        }
    }

    componentDidMount () {

        fetch("http://localhost:5002/pointsofinterest?_expand=destination")
        .then(r => r.json())
        .then(pointsofinterest => {this.setState({pointsofinterest: pointsofinterest})})

    }

    render() {
        return (
            <React.Fragment>

               <Route exact path="/" render={(props) => {
                    return <PointsOfInterest pointsofinterest={this.state.pointsofinterest}/>
                }} />
                <Route path="/addpoi" render={(props) => {
                    return <AddPOIForm />
                }} />
            </React.Fragment>
        )
    }
}
export default Traveler