import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PointsOfInterest extends Component {

    render() {

        return (
            <section className="pointsofinterest">
            <Link to="addpoi"><button className="addPoiButton">Add Point of Interest</button></Link>
            {

                this.props.pointsofinterest.map(poi =>

                    <div className="poiDiv" key={poi.id}>
                        {`Name: `}{poi.name} <br/>
                        {`Description: `}{poi.description} <br/>
                        {`Cost: `}{poi.cost} <br/>
                        {`Review: `}{poi.review}<br/>
                        {`Place:`}{poi.destination.name}
                        <button className="poiEditButton" onClick={this.handleEditButton}>
                            Edit
                        </button>
                    </div>
                )
            }
            </section>
        );
    }
}