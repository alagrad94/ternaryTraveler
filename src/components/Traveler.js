import { Route } from 'react-router-dom';
import React, { Component } from "react";
// import NavBar from "./nav/NavBar"
// import ApplicationViews from "./ApplicationViews"

import PointsOfInterest from "./pointsofinterest/PointsOfInterest"
import AddPOIForm from "./addPoiForm/addPoiForm"
import EditPOIForm from "./editPoiForm/editPoiForm"

import "./Traveler.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Traveler extends Component {


    render() {
        return (
            <React.Fragment>
               <Route exact path="/" render={(props) => {
                    return <PointsOfInterest {...props} />
                }} />
                <Route path="/addpoi" render={(props) => {
                    return <AddPOIForm {...props} />
                }} />
                <Route path="/editpoi" render={(props) => {
                    return <EditPOIForm {...props} />
                }} />
            </React.Fragment>
        )
    }
}
export default Traveler