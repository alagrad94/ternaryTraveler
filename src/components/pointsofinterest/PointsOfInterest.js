import React, { Component } from 'react'


export default class PointsOfInterest extends Component {

    render() {

        return (
            <section className="pointsofinterest">
            {
                this.props.pointsofinterest.map(pointofinterest =>
                    <div key={pointofinterest.id}>
                        {`Name: `}{pointofinterest.name} <br/>
                        {`Description: `}{pointofinterest.description} <br/>
                        {`Cost: `}{pointofinterest.cost} <br/>
                        {`Review: `}{pointofinterest.review}<br/>

                        {pointofinterest.destination.map(place =>
                        <div className="destination" >
                        {`Place:`} {place.name}
                        </div>)}
                    </div>
                )
            }
            </section>
        );
    }
}