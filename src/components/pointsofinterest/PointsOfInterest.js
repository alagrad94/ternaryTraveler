import React, { Component } from 'react'


export default class PointsOfInterest extends Component {

    handleEditButton() {

    }

    addPointOfInterest() {

    }

    render() {

        return (
            <section className="pointsofinterest">
            <button className="addPoiButton" onClick={this.addPointOfInterest}>Add Point of Interest</button>
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